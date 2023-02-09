Feature: Login scenario for dashdoc

Scenario: Login to Dashdoc demo application with valid credentials

Given I go to the url of the dashdoc demo application
When I fill the valid credentials like "Email" and "password"
And I click on the "Login" button
Then I am successfully logged in to the Dashdoc demo application



Scenario: Login to Dashdoc demo application with invalid credentials

Given I go to the url of the dashdoc demo application
When I fill the invalid credentials like "Email" and "password"
And I click on the "Login" button
Then I should see an error message "Incorrect username or password."