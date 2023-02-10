const { expect } = require("chai")

class homePage {

    constructor(){

         this.adressBook = ('.css-y50ccf e10v8s9c0')
         this.shippersTitle = ('[data-testid="screen-title"]')
         this.companyList1 = ('[data-test-row-id="26559"]')
         this.addCompanyBtn = ('[data-testid="add-company-button"]')
         
        
    }

    clickAddressBook() {

        cy.get(this.adressBook).contains('Address book')
        cy.get(this.shippersTitle).should('contain', 'Shippers')
      
    }
    
    checkCompanyList(){

        cy.get(this.companyList1).should('contain', 'Mine de Guibert Vaillant SARL')
    }

    checkAddCompanyBtn() {

        cy.get(this.addCompanyBtn).should('contain', 'Add a company')
        
    }
}

module.exports = new homePage()