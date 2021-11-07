/// <reference types="cypress" />

import { INVENTORY } from "../../support/pages";

const {
    route,
    selectors : { inventoryPage : pageSelectors }
} = INVENTORY;

class InventoryPage {

    validateInventoryPageURL() {
        cy.location().should((location) => {
            expect(location.href).to.eq(Cypress.config().baseUrl + route);
            expect(location.pathname).to.eq(route);
        });
    }

    validateInventoryTitle() {

        let testData;
        cy.fixture("testdata").then(function(data) {
            this.testData = data;
        });

        cy.get("." + pageSelectors.titleClass).then(function(webElement) {
            expect(webElement.text()).to.eq(this.testData.inventoryPageTitle);
        });
    }

    validateInventoryMenuButton() {
        cy.get("#" + pageSelectors.menuButtonID).should('be.visible');
    }

    validateInventoryShoppingCardIcon() {
        cy.get("#" + pageSelectors.shoppingCardIconId).should('be.visible');
    }
}

export default InventoryPage;