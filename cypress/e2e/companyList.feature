Feature: Go to the company list page

Scenario: Navigate to the shipper companies list

Given I am logged in to the dashdoc application
When I click on the "Address book" option on the homepage
Then I should see the list of companies for the shippers
And I should see the option to add a new company