/// <reference types="cypress" />

import { CHECKOUT_STEP_ONE } from "../../support/pages";

const {
    route,
    selectors : { checkoutStepOnePage : pageSelectors }
} = CHECKOUT_STEP_ONE;

class CheckoutStepOnePage {

    enterFirstName(firstName) {
        cy.getByID(pageSelectors.firstNameID).type(firstName);
    }

    enterLastName(lastName) {
        cy.getByID(pageSelectors.lastNameID).type(lastName);
    }

    enterPostalCode(postalCode) {
        cy.getByID(pageSelectors.postalCodeID).type(postalCode);
    }

    clickContinueButton() {
        cy.getByID(pageSelectors.continueButtonID).click();
    }
}

export default CheckoutStepOnePage;