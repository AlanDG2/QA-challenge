
class LoginPage {

    get={
        userInput: () => cy.get('#username'),
        passInput: () =>  cy.get('#password'),
        submitButton: () => cy.get('[type="submit"]'),
        logged: () => cy.get('h2').contains('Welcome to Ensolvers QA Challenge'),
        errormsg: () => cy.get('[class="alert alert-danger fade show"'),
        emptyInput: () => cy.get('[class="invalid-feedback"').contains('Username cannot be empty!'),
        accountMenu: () =>  cy.get('#account-menu > a'),
        logoutButton: () =>  cy.get('a[href="/logout"]'),
        homeButton: () => cy.get('#header-tabs > li:nth-child(1) > a')
        

    }

    reloadPage(){
        cy.reload()
    }
    clickOnHomeButton(){
        this.get.homeButton().should('be.visible').click()
    }
    verifyEndpoint(endpoint){
        cy.url().should('include', endpoint)
    }
    clickOnLogoutButton(){
        this.get.logoutButton().should('be.visible').click()
    }
    clickOnAccountMenu(){
        this.get.accountMenu().should('be.visible').click()
    }

    typeUserName(user){
        this.get.userInput().should('be.visible').type(user, { force: true })
    };


    typePass(pass){
        this.get.passInput().should('be.visible').type(pass, { force: true },)
    };
    clickOnSubmitButton(){
        this.get.submitButton().should('be.visible').click()
    }

    loggedsuccessfully(){
        this.get.logged().should('be.visible').and('have.text', 'Welcome to Ensolvers QA Challenge!')
    }

    errorOnCredentials(message){
        this.get.errormsg().should('be.visible').and('have.text', message)
    }

    emptyInputMessage(text){
        this.get.emptyInput().should('be.visible').should('have.text', text)
    }

}

export const loginPage = new LoginPage