    class  FolderPage {

        get ={
            mangeFolderButton: () => cy.get('button[type="button"]').contains('Manage Folders'),
            newFolderButton: () => cy.get('#jh-create-entity'),
            folderNameInput: () => cy.get('#folder-name'),
            saveButton: () => cy.get('#save-entity'),
            popupMessage: () =>  cy.get('.Toastify__toast-body')

        }


        clickOnManageFolderButton(){
            this.get.mangeFolderButton().should('be.visible').click()
        } 
        clickOnNewFolderButton(){
            this.get.newFolderButton().should('be.visible').click()
        }

        typeOnFolderNameInput(){
            this.get.folderNameInput().should('be.visible').type('Test Folder')
        }
        clickOnSaveButton(){
            this.get.saveButton().should('be.visible').click()
        }
    
        verifyNewFolder(){
            this.get.popupMessage().should('be.visible').invoke('text').should('include', 'A new folder is created with identifier')
        }

    }


    export const folderPage = new FolderPage