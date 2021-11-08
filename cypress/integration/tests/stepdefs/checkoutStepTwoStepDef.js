/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CheckoutStepTwoPage from "../../common/checkoutStepTwo";

const checkoutStepTwoPage = new CheckoutStepTwoPage();

Then("I validate total amount in checkout page", () => {
    checkoutStepTwoPage.validateTotalAmount();
});

Then("I validate checkout items in checkout page", (dataTable) => {
    checkoutStepTwoPage.validateCheckoutItems(dataTable.rawTable);
});

Then("I can see payment information as {string}", (paymentInfo) => {
    checkoutStepTwoPage.validatePaymentInformation(paymentInfo);
});

And("I click on Finish Checkout button", () => {
    checkoutStepTwoPage.clickFinishButton();
})