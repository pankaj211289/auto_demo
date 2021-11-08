/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CheckoutStepOnePage from "../../common/checkoutStepOne";

const checkoutStepOnePage = new CheckoutStepOnePage();

And("I fill-up checkout step one form with firstname as {string}, lastname as {string} and postal code as {string}", (firstname, lastname, postalCode) => {
    checkoutStepOnePage.enterFirstName(firstname);
    checkoutStepOnePage.enterLastName(lastname);
    checkoutStepOnePage.enterPostalCode(postalCode);
});

And("I click continue button on Checkout Step One page", () => {
    checkoutStepOnePage.clickContinueButton();
})
