Feature: Login Page tests

    consisting scenarios to test login page of website

    Scenario: Success Login into application
        Given I navigate to Login page
        When I logged in as valid user
        Then I am on Inventory page