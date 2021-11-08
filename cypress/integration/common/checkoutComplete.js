/// <reference types="cypress" />

import { CHECKOUT_COMPLETE } from "../../support/pages";

const {
    route,
    selectors : { checkoutCompletePage : pageSelectors }
} = CHECKOUT_COMPLETE;

class CheckoutCompletePage {

    verifyCompleteOrder() {
        cy.getByClassName(pageSelectors.completeHeaderClass).then((element) => {
            expect(element.text().includes('THANK YOU FOR YOUR ORDER')).to.be.true;
        });

        cy.getByClassName(pageSelectors.completeTextClass).then((element) => {
            expect(element.text().includes('Your order has been dispatched')).to.be.true;
        });
    }

    clickBackHome() {
        cy.getByID(pageSelectors.backHomeID).click();
    }
}

export default CheckoutCompletePage;