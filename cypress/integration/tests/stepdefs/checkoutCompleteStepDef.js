/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CheckoutCompletePage from "../../common/checkoutComplete";

const checkoutCompletePage = new CheckoutCompletePage();

Then("I can see checkout complete message", () => {
    checkoutCompletePage.verifyCompleteOrder();
});

And("I click Back Home Button", () => {
    checkoutCompletePage.clickBackHome();
});