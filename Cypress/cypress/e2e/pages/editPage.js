
class EditPage {
    get = {
        viewButton: () => cy.get('[data-cy="entityDetailsButton"]:first'),
        viewPage: () => cy.get('h2').contains('ToDoItem'),
        editButton: () => cy.get('[class="btn btn-primary"]'),
        idInput: () => cy.get('#to-do-item-id').invoke('val').then((valor) => { let id = valor }),
        titleInput: () => cy.get('#to-do-item-title'),
        descriptionInput: () => cy.get('#to-do-item-description'),
        folderSelector: () =>   cy.get('#to-do-item-folder'),
        saveButton: () =>   cy.get('#save-entity'),
        popupMessage: () =>   cy.get('.Toastify__toast-body',{ timeout: 10000 }),
        deleteButton: () =>  cy.get('[data-cy="entityDeleteButton"]').eq(0),
        confirmDeleteButton: () => cy.get('#jhi-confirm-delete-toDoItem')
    }

    verifyDeletedItem(){
        this.get.popupMessage().should('be.visible').invoke('text').should('include', 'A toDoItem is deleted with identifier')

    }

    clickOnDeleteButton(){
        this.get.deleteButton().should('be.visible').click()
        this.get.confirmDeleteButton().should('be.visible').click()
    }
    verifyPopupMessageClose(){
        this.get.popupMessage().should('not.be.visible',{ timeout: 10000 })

    }
    verifyUpdateItem(){
        this.get.popupMessage().should('be.visible').invoke('text').should('include', 'A toDoItem is updated with identifier')

    }

clickOnSaveButton(){
    this.get.saveButton().should('be.visible').click()
}
    verifyEditFolderSelector() {
        this.get.folderSelector().invoke('prop', 'selectedIndex').then((index) => {
            this.get.folderSelector().select(1 + index).invoke('prop', 'selectedIndex').should('not.eq', index);
        })
    }

    verifyEditDescriptionInput(){
        this.get.descriptionInput().invoke('val').then((valor) => {
            this.get.descriptionInput().type('test').invoke('val').should('not.eq', valor)
        })
    }
    verifyEditTitleInput() {
        this.get.titleInput().invoke('val').then((valor) => {
            this.get.titleInput().type('test').invoke('val').should('not.eq', valor)
        })
    }



    clickOnEditButton() {
        this.get.editButton().should('be.visible').click()
    }

    verifyViewPage() {
        this.get.viewPage().should('be.visible')
    }
    clickOnViewButton() {
        this.get.viewButton().should('be.visible').click()
    }



}




export const editPage = new EditPage