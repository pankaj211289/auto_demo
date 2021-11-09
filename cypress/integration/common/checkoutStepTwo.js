/// <reference types="cypress" />

import { CHECKOUT_STEP_TWO } from "../../support/pages";

const {
    route,
    selectors : { checkoutStepTwoPage : pageSelectors }
} = CHECKOUT_STEP_TWO;

class CheckoutStepTwoPage {

    // Validates checkout items
    validateCheckoutItems(productInfos) {
        cy.getByClassName(pageSelectors.cartItemsClass).each(($element, index, $list) => {
            let isProductPresent = false;
            for(var counter = 1; counter < productInfos.length; counter++) {
                let productInfo = productInfos[counter];
                if(productInfo[1] == $element.find("." + pageSelectors.inventoryItemNameClass).text()) {
                    expect($element.find("." + pageSelectors.itemQuantityClass).text()).to.eq(productInfo[0]);
                    isProductPresent = true;
                }
            }
            expect(isProductPresent).to.be.true;
        });
    }

    // Validates Payment information
    validatePaymentInformation(paymentInfo) {
        cy.getByClassName(pageSelectors.summaryInfoClass).should("contain", paymentInfo);
    }

    // Validates Total Amount
    validateTotalAmount() {
        let totalItemsPrice = 0;
        let regexPrice = /\d+\.\d{0,2}/;
        cy.getByClassName(pageSelectors.cartItemsClass).each(($element, index, $list) => {
            var itemPrice = $element.find("." + pageSelectors.inventoryItemPriceClass).text();
            itemPrice = itemPrice.match(regexPrice)[0];
            totalItemsPrice += Number(itemPrice);
        });

        let subtotalAmount = 0;
        let taxAmount = 0;
        let totalAmount = 0;

        cy.getByClassName(pageSelectors.summarySubtotalClass).then((webelement) => {
            subtotalAmount = webelement.text().match(regexPrice)[0];
            expect(Number(subtotalAmount)).to.eq(totalItemsPrice);
        });

        cy.getByClassName(pageSelectors.summaryTaxClass).then((webelement) => {
            taxAmount = webelement.text().match(regexPrice)[0];
        });
        
        cy.getByClassName(pageSelectors.summaryTotalClass).then((webelement) => {
            totalAmount = webelement.text().match(regexPrice)[0];
        });

        expect(Number(subtotalAmount) + Number(taxAmount)).to.eq(Number(totalAmount));
    }

    // Clicks Finish button
    clickFinishButton() {
        cy.getByID(pageSelectors.finishButtonID).click();
    }
}

export default CheckoutStepTwoPage;