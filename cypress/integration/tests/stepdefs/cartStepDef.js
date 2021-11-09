/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CartPage from "../../common/cart";

const cartPage = new CartPage();

And("I can see products are added to cart", (dataTable) => {
    cartPage.verifyProductsAddedToCart(dataTable.rawTable);
});

Then("I cannot see product {string} in cart", (productName) => {
    cartPage.verifyProductNotInCart(productName);
});

And("I remove product {string}", (productName) => {
    cartPage.removeProductFromCart(productName);
});

And("I click on checkout button", () => {
    cartPage.clickCheckoutButton();
});

And("I click on Conitune Shopping button", () => {
    cartPage.clickContinueShoppingButton();
});