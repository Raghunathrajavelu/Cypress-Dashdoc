Feature: Add a new company

Scenario: Add a new company for the shippers category

Given I am logged in to the dashdoc demo application
When I click on the "Add a company button"
And I fill the company details
And I click on the "save" button
Then The company is added successfully
