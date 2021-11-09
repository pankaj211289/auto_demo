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

        cy.getByClassName(pageSelectors.titleClass).then(function(webElement) {
            expect(webElement.text()).to.eq(this.testData.inventoryPageTitle);
        });
    }

    validateInventoryMenuButton() {
        cy.getByID(pageSelectors.menuButtonID).should('be.visible');
    }

    validateInventoryShoppingCardIcon() {
        cy.getByID(pageSelectors.shoppingCardIconID).should('be.visible');
    }

    addProductToCart(productName) {
        cy.getByClassName(pageSelectors.inventoryItemsClass).each(($ele, index, $list) => {
            if($ele.find("." + pageSelectors.inventoryItemsNameClass).text().includes(productName)) {
                $ele.find("." + pageSelectors.inventoryItemsPriceClass).text();
                $ele.find("." + pageSelectors.addToCartButtonClass).click();
            }
        });  
    }

    verifyProductAddedToCart(numberOfProducts) {
        cy.getByClassName(pageSelectors.shoppingCardIconID).then((webElement) => {
            expect(webElement.text()).to.eq(numberOfProducts);
        });
    }

    clickCartContainerIcon() {
        cy.getByID(pageSelectors.shoppingCartContainerID).click();
    }

    logout() {
        cy.scrollTo("topLeft");
        cy.getByID(pageSelectors.menuButtonID).scrollIntoView();
        cy.getByID(pageSelectors.menuButtonID).focus();
        cy.getByID(pageSelectors.menuButtonID).click();
        cy.getByID(pageSelectors.logoutLinkID).click();
    }
}

export default InventoryPage;