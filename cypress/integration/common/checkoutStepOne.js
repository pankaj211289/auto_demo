/// <reference types="cypress" />

import { CHECKOUT_STEP_ONE } from "../../support/pages";

const {
    route,
    selectors : { checkoutStepOnePage : pageSelectors }
} = CHECKOUT_STEP_ONE;

class CheckoutStepOnePage {

    // Enters First name
    enterFirstName(firstName) {
        cy.getByID(pageSelectors.firstNameID).type(firstName);
    }

    // Enters last name
    enterLastName(lastName) {
        cy.getByID(pageSelectors.lastNameID).type(lastName);
    }

    // Enters postal code
    enterPostalCode(postalCode) {
        cy.getByID(pageSelectors.postalCodeID).type(postalCode);
    }

    // Clicks Continue button
    clickContinueButton() {
        cy.getByID(pageSelectors.continueButtonID).click();
    }
}

export default CheckoutStepOnePage;