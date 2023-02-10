import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'


const homePage = require('../pageObjects/homePage')
const loginPage = require('../pageObjects/loginPage')

Given ('I am logged in to the dashdoc application', () => {

    loginPage.visitPage()
    loginPage.loginValidCredentials()
    loginPage.clickLoginBtn()
    loginPage.successLogin()
    

})

When ('I click on the "Address book" option on the homepage', () => {

    homePage.clickAddressBook()
 
})

Then ('I should see the list of companies for the shippers', () => {

    homePage.checkCompanyList()

})

And ('I should see the option to add a new company', () => {

    homePage.checkAddCompanyBtn()


})
