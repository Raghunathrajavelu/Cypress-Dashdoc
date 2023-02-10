const { expect } = require("chai")

class loginPage {

   constructor(){
    
          this.url = "https://demo.dashdoc.eu/app/"
          this.email = ('[data-testid="login-email-input"]')
          this.pwd = ('[data-testid="login-password-input"]')
          this.loginBtn = ('.css-gsqvlz e15u5xqs0')
          this.loginError = ('[data-testid="login-error-message]')
   
   }

   visitPage() {

    cy.visit(this.url)

   }

   loginValidCredentials() {

    cy.get(this.email).type('qatest@yopmail.com')
    cy.get(this.pwd).type('truck123').tab()
    
   }

   loginInvalidCredentials() {

    cy.get(this.email).type('test1@gmail.com')
    cy.get(this.pwd).type('12345').tab()
   }

   clickLoginBtn(){

    cy.focused().click()
   }

   successLogin(){

    cy.url().should('include', 'api/user/password/reset/')
   }

   errorLogin(){

    cy.get(this.errorLogin).should('be.visible').and('contain', 'Incorrect username or password.')
   }
}

module.exports = new loginPage()