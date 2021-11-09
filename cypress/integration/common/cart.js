/// <reference types="cypress" />

import { CART } from "../../support/pages"

const {
    route,
    selectors : { cartPage : pageSelectors }
} = CART;

class CartPage {

    verifyProductsAddedToCart(productNames) {
        cy.getByClassName(pageSelectors.cartItemsClass).each(function($element, index, $list) {
            let isProductPresent = false;
            for(var counter = 1; counter < productNames.length; counter++) {
                let productName = productNames[counter];
                if(productName[1] == $element.find("." + pageSelectors.inventoryItemNameClass).text()) {
                    expect($element.find("." + pageSelectors.itemQuantity).text()).to.eq(productName[0]);
                    isProductPresent = true;
                    break;
                }
            }
            expect(isProductPresent).to.be.true;
        });
    }

    verifyProductNotInCart(productName) {
        let isProductPresent = false;
        cy.getByClassName(pageSelectors.cartItemsClass).each(($element, index, $list) => {
            cy.debug();
            if($element.find("." + pageSelectors.inventoryItemNameClass).text().includes(productName)) {
                isProductPresent = true;
            }
        });

        expect(isProductPresent).to.be.false;
    }

    removeProductFromCart(productName) {
        cy.getByClassName(pageSelectors.cartItemsClass).each(($element, index, $list) => {
            if($element.find("." + pageSelectors.inventoryItemNameClass).text().includes(productName)) {
                $element.find("." + pageSelectors.cartRemoveButtonClass).click();
            }
        });
    }
    
    clickCheckoutButton() {
        cy.getByID(pageSelectors.checkoutButtonID).click();
    }

    clickContinueShoppingButton() {
        cy.getByID(pageSelectors.continueShoppingButtonID).click();
    }
}

export default CartPage;