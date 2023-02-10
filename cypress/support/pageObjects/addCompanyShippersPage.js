const { expect } = require("chai")

class addCompanyShippersPage {

    constructor(){

        this.addCompanyBtn = ('[data-testid="add-company-button"]')
        this.addCompanyTitle = ('[data-testid="company-modal-title"]')
        this.Name = ('[data-testid="company-modal-name"]')
        this.PostalCode = ('[data-testid="company-modal-postcode"]')
        this.City = ('[data-testid="company-modal-city"]')
        this.CountryDrpdwn = ('Select__value-container css-18zjsqr')
        this.Country = ('Select__value-container Select__value-container--has-value css-18zjsqr')
        this.Adress = ('[data-testid="company-modal-address"]')
        this.ShipperCheckbox = ('[data-testid="checkbox-is-shipper"]')
        this.Save = ('[data-testid="company-modal-save"]')
    }

    clickAddCompanyBtn(){

        cy.get(this.addCompanyBtn).click()
        cy.get(this.addCompanyTitle).should('contain', 'Add a company')
    }

    fillCompanyDetails(){

        cy.get(this.Name).type('Test Company')
        cy.get(this.Adress).type('Rue de paris')
        cy.get(this.PostalCode).type('75001')
        cy.get(this.City).type('Paris')
        cy.get(this.CountryDrpdwn).click()
        cy.get(this.Country).select('France')
        cy.get(this.ShipperCheckbox).click()
    }

    saveCompany(){

        cy.get(this.Save).click()

    }

    checkSavedCompany(){

        cy.get('h5').find('span').then(function(e){
            const t = e.text()
            expect(t).to.contains('Test Company')
        })


    }

}

   module.exports = new addCompanyShippersPage()