Feature: Login Page tests

    consisting scenarios to test login page of website

    Scenario: Success Login into application
        Given I navigate to Login page
        When I logged in as valid user
        Then I am on Inventory page
        And I logout from application
        Then I can see login page

    Scenario: Validating error message for wrong username and password
        Given I navigate to Login page
        When I enter username as "incorrect_user"
        And I enter password as "random_pass"
        And I click on Login button
        Then I can see error message as "Username and password do not match any user in this service"

    Scenario: Validating error message for locked user
        Given I navigate to Login page
        When I logged in as locked user
        Then I can see error message as "this user has been locked out"
