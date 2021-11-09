/// <reference types="cypress" />

import { INVENTORY } from "../../support/pages";

const {
    route,
    selectors : { inventoryPage : pageSelectors }
} = INVENTORY;

class InventoryPage {

    // Validates Inventory Page URL
    validateInventoryPageURL() {
        cy.location().should((location) => {
            expect(location.href).to.eq(Cypress.config().baseUrl + route);
            expect(location.pathname).to.eq(route);
        });
    }

    // Validates Inventory title
    validateInventoryTitle() {

        let testData;
        cy.fixture("testdata").then(function(data) {
            this.testData = data;
        });

        cy.getByClassName(pageSelectors.titleClass).then(function(webElement) {
            expect(webElement.text()).to.eq(this.testData.inventoryPageTitle);
        });
    }

    // Validates Inventory Menu button
    validateInventoryMenuButton() {
        cy.getByID(pageSelectors.menuButtonID).should('be.visible');
    }

    // Validates Inventory Shopping Cart Icon
    validateInventoryShoppingCardIcon() {
        cy.getByID(pageSelectors.shoppingCardIconID).should('be.visible');
    }

    // Adds product to cart
    addProductToCart(productName) {
        cy.getByClassName(pageSelectors.inventoryItemsClass).each(($ele, index, $list) => {
            if($ele.find("." + pageSelectors.inventoryItemsNameClass).text().includes(productName)) {
                $ele.find("." + pageSelectors.inventoryItemsPriceClass).text();
                $ele.find("." + pageSelectors.addToCartButtonClass).click();
            }
        });  
    }

    // Validates Product which is added to cart
    verifyProductAddedToCart(numberOfProducts) {
        cy.getByClassName(pageSelectors.shoppingCardIconID).then((webElement) => {
            expect(webElement.text()).to.eq(numberOfProducts);
        });
    }

    // Clicks Cart Container Icon
    clickCartContainerIcon() {
        cy.getByID(pageSelectors.shoppingCartContainerID).click();
    }

    // Clicks Logout
    logout() {
        cy.scrollTo("topLeft");
        cy.getByID(pageSelectors.menuButtonID).scrollIntoView();
        cy.getByID(pageSelectors.menuButtonID).focus();
        cy.getByID(pageSelectors.menuButtonID).click();
        cy.getByID(pageSelectors.logoutLinkID).click();
    }
}

export default InventoryPage;