const { loginPage } = require('./pages/loginPage');
const { folderPage } = require('./pages/folderPage');
const { toDoPage } = require('./pages/taskPage');
const { editPage } = require('./pages/editPage')
const credentials = require('../fixtures/login.json');
const { username, password } = Cypress.env('login')
const { idEndpoint, titleEndpoint, descriptionEndpoint, logoutEndpoint, loginEndpoint } = Cypress.env('endpoints');



describe('QA Challenge ', () => {

  beforeEach(() => {
    cy.visit('/')
    loginPage.typeUserName(username)
    loginPage.typePass(password)
    loginPage.clickOnSubmitButton()
  })

  credentials.forEach(credentials => {
    it(credentials.name, () => {
      loginPage.clickOnAccountMenu()                                  
      loginPage.clickOnLogoutButton()                    
      loginPage.verifyEndpoint(logoutEndpoint)             
      loginPage.clickOnHomeButton()                        
      loginPage.verifyEndpoint(loginEndpoint)                        
      loginPage.clickOnSubmitButton()                      
      if (credentials.test === 1) {
        loginPage.emptyInputMessage(credentials.expected)             // empty input alert message
      } else {
        loginPage.typeUserName(credentials.username)       
        loginPage.typePass(credentials.password)           
        loginPage.clickOnSubmitButton()
        if (credentials.test === 2) {
          loginPage.errorOnCredentials(credentials.expected)          // popup  error 
        } else {
          loginPage.loggedsuccessfully(credentials.expected)          // popup  login  succesfully
        }
      }
    })
  })

  it('should create folders', () => {
    folderPage.clickOnManageFolderButton()                // wait for the main page to  load and click on  manage folder
    folderPage.clickOnNewFolderButton()        
    folderPage.typeOnFolderNameInput()                    // wait for the modal to load and  type on  folder name input
    folderPage.clickOnSaveButton()            
    folderPage.verifyNewFolder()                          // verify   folder has been created correctly
  })

  it('should create To-Do items', () => {
    toDoPage.clickOnToDoButton()                          // click on "Manage To-Do Items" button
    toDoPage.clickOnCreateToDo()               
    toDoPage.typeOnToDoNameInput()             
    toDoPage.typeOnToDoDescription()           
    toDoPage.selectFolder()                              //  select folder ID
    toDoPage.clickOnSaveToDoButton()          
    toDoPage.verifyNewToDo()                             //  verify item has been created succesfully     

  })

  it('sort To-Do Items', () => {
    toDoPage.clickOnToDoButton()                  
    toDoPage.sortID()                                    // sort items by  ID
    toDoPage.verifyEndpoint(idEndpoint)                  // verify sort
    toDoPage.sortDescription()                           // sort items by Description
    toDoPage.verifyEndpoint(descriptionEndpoint)         // verify sort
    toDoPage.sortTitle()                                 // sort items by  title
    toDoPage.verifyEndpoint(titleEndpoint)               // verify sort

  })

  it.only('Should view edit and delete ToDo item', () => {
    toDoPage.clickOnToDoButton()                         // click on "Manage To-Do Items" button
    editPage.clickOnViewButton()                         // click on view button and select  the frist  item
    editPage.verifyViewPage()                            // verify view page
    editPage.clickOnEditButton()               
    editPage.verifyEditTitleInput()                      // check title input edition
    editPage.verifyEditDescriptionInput()                // check description input edition
    editPage.verifyEditFolderSelector()                  // check selector folder can be edit
    editPage.clickOnSaveButton()                  
    editPage.verifyUpdateItem()                          //  verify update item whith the popup 
    editPage.verifyPopupMessageClose()                   // Wait for the popup to close because it causes a conflict with the next popup
    editPage.clickOnDeleteButton()                       // click on delete and confirm delete
    editPage.verifyDeletedItem()                         // verify popup
  })

  it('should login  and logout', () => {
    loginPage.clickOnAccountMenu()                       
    loginPage.clickOnLogoutButton()                      
    loginPage.verifyEndpoint(logoutEndpoint)             
    loginPage.clickOnHomeButton()                       
    loginPage.verifyEndpoint(loginEndpoint)             
    loginPage.typeUserName(username)                     
    loginPage.typePass(password)                        
    loginPage.clickOnSubmitButton()                      
    loginPage.loggedsuccessfully(credentials.expected)   // popup  login succesfully 
  })


})