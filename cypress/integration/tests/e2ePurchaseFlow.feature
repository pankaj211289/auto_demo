Feature: e2e Shopping cart flow

    consisting scenarios to test e2e shopping flow

    Scenario: Add product to cart
        Given I navigate to Login page
        When I logged in as valid user
        And I add product "Sauce Labs Backpack" to cart
        Then I can see "1" items added to cart
        When I add product "Sauce Labs Bike Light" to cart
        Then I can see "2" items added to cart

    Scenario: Add product and remove product from cart
        Given I navigate to Login page
        When I logged in as valid user
        And I add product "Sauce Labs Backpack" to cart
        And I add product "Sauce Labs Bike Light" to cart
        And I click on cart container icon
        Then I can see products are added to cart
            | quantity | productName            |
            | 1        | Sauce Labs Backpack    |
            | 1        | Sauce Labs Bike Light  |
        When I remove product "Sauce Labs Bike Light"
        Then I cannot see product "Sauce Labs Bike Light" in cart

    Scenario: Add product and validate checkout items
        Given I navigate to Login page
        When I logged in as valid user
        And I add product "Sauce Labs Backpack" to cart
        And I add product "Sauce Labs Bike Light" to cart
        And I click on cart container icon
        When I click on checkout button
        And I fill-up checkout step one form with firstname as "TestFirst", lastname as "TestLast" and postal code as "10115"
        And I click continue button on Checkout Step One page
        Then I validate total amount in checkout page
        And I validate checkout items in checkout page
            | quantity | productName            |
            | 1        | Sauce Labs Backpack    |
            | 1        | Sauce Labs Bike Light  |
        And I can see payment information as "SauceCard #31337"
        When I click on Finish Checkout button
        Then I can see checkout complete message
        And I click Back Home Button
