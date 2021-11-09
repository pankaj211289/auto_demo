/// <reference types="cypress" />

import { CHECKOUT_COMPLETE } from "../../support/pages";

const {
    route,
    selectors : { checkoutCompletePage : pageSelectors }
} = CHECKOUT_COMPLETE;

class CheckoutCompletePage {

    // Validates that order is placed successfully
    verifyCompleteOrder() {
        cy.getByClassName(pageSelectors.completeHeaderClass).then((element) => {
            expect(element.text().includes('THANK YOU FOR YOUR ORDER')).to.be.true;
        });

        cy.getByClassName(pageSelectors.completeTextClass).then((element) => {
            expect(element.text().includes('Your order has been dispatched')).to.be.true;
        });
    }

    // Clicks Back Home button
    clickBackHome() {
        cy.getByID(pageSelectors.backHomeID).click();
        cy.wait(1000);
    }
}

export default CheckoutCompletePage;