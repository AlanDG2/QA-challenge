
class  ToDoPage {

    get = {
        todoButton: () => cy.get('button[type="button"]').contains('Manage To-Do Items'),
        NewToDoButton: () => cy.get('#jh-create-entity'),
        toDoNameInput: () => cy.get('#to-do-item-title'),
        toDoDescriptionInput: () => cy.get('#to-do-item-description'),
        toDoFolderSelect: () => cy.get('#to-do-item-folder'),
        saveToDoButton: () => cy.get('#save-entity'),
        popupMessage: () => cy.get('.Toastify__toast-body'),
        idButton: () => cy.get('.hand').contains('ID '),
        titleButton: () => cy.get('.hand').contains('Title '),
        descriptionButton: () => cy.get('.hand').contains('Description ')



    }

    sortTitle(){
        this.get.titleButton().should('be.visible').click()
    }
    sortDescription(){
        this.get.descriptionButton().should('be.visible').click()
    }

    verifyEndpoint(endpoint){
        cy.url().should('include', endpoint)
    }
    sortID(){
        this.get.idButton().click()
    }
    clickOnToDoButton(){
        this.get.todoButton().should('be.visible').click()
    }
    clickOnCreateToDo(){
        this.get.NewToDoButton().should('be.visible').click()
    }
    typeOnToDoNameInput(){
        this.get.toDoNameInput().should('be.visible').type('Test Task')
    }
    
    typeOnToDoDescription(){
        this.get.toDoDescriptionInput().should('be.visible').type('This is a test task')
    }

    selectFolder(){
        this.get.toDoFolderSelect().select(1);
    }
    clickOnSaveToDoButton(){
        this.get.saveToDoButton().should('be.visible').click()
    }

    verifyNewToDo(){
        this.get.popupMessage().should('be.visible').invoke('text').should('include', 'A new toDoItem is created with identifier')
    }

}

export const toDoPage = new ToDoPage