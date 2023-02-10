import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'


const addCompanyShippersPage = require('../pageObjects/addCompanyShippersPage')
const loginPage = require('../pageObjects/loginPage')
const homePage = require('../pageObjects/homePage')

Given ('I am logged in to the dashdoc demo application', () => {

    loginPage.visitPage()
    loginPage.loginValidCredentials()
    loginPage.clickLoginBtn()
    loginPage.successLogin()
    homePage.clickAddressBook()

})

When ('I click on the "Add a company button"', () => {
    
    addCompanyShippersPage.addCompanyBtn()

})

And ('I fill the company details', () => {

    addCompanyShippersPage.fillCompanyDetails()
})

And ('I click on the "save" button', () => {
    
    addCompanyShippersPage.saveCompany()

})

Then ('The company is added successfully', () => {

    addCompanyShippersPage.checkSavedCompany()

})

