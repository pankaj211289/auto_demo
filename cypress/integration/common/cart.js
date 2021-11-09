/// <reference types="cypress" />

import { CART } from "../../support/pages"

const {
    route,
    selectors : { cartPage : pageSelectors }
} = CART;

class CartPage {

    // Validates Products (accepts an 2D array of products, where inner array consisting of qunatity and its name) added to cart
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

    // Validates that specified product is not added to cart
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

    // Removes Product form cart
    removeProductFromCart(productName) {
        cy.getByClassName(pageSelectors.cartItemsClass).each(($element, index, $list) => {
            if($element.find("." + pageSelectors.inventoryItemNameClass).text().includes(productName)) {
                $element.find("." + pageSelectors.cartRemoveButtonClass).click();
            }
        });
    }
    
    // Clicks checkout button 
    clickCheckoutButton() {
        cy.getByID(pageSelectors.checkoutButtonID).click();
    }

    // Clicks continue shopping button
    clickContinueShoppingButton() {
        cy.getByID(pageSelectors.continueShoppingButtonID).click();
    }
}

export default CartPage;