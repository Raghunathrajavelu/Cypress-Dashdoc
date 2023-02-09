import { Before, Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'


const login = require('../pageObjects/login') 

Given ('I go to the url of the dashdoc demo application', () => {

login.visitPage()

})

When ('I fill the valid credentials like "Email" and "password"', () =>{

    login.loginValidCredentials()

})

When ('I fill the invalid credentials like "Email" and "password"', () =>{

    login.loginInvalidCredentials()
})

And ('I click on the "Login" button', () =>{

    login.clickLoginBtn()

})

Then ('I am successfully logged in to the Dashdoc demo application', () =>{

    login.successLogin()

})

Then ('I should see an error message "Incorrect username or password."', () => {

    login.errorLogin()
})