import { Before, Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

const loginPage = require('../pageObjects/loginPage') 

Given ('I go to the url of the dashdoc demo application', () => {

loginPage.visitPage()

})

When ('I fill the valid credentials like "Email" and "password"', () =>{

    loginPage.loginValidCredentials()

})

When ('I fill the invalid credentials like "Email" and "password"', () =>{

    loginPage.loginInvalidCredentials()
})

And ('I click on the "Login" button', () =>{

    loginPage.clickLoginBtn()

})

Then ('I am successfully logged in to the Dashdoc demo application', () =>{

    loginPage.successLogin()

})

Then ('I should see an error message "Incorrect username or password."', () => {

    loginPage.errorLogin()
})