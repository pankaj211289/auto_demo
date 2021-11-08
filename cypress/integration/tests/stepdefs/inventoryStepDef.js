/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import InventoryPage from "../../common/inventory";

const inventoryPage = new InventoryPage();

Then("I am on Inventory page", ()=> {
    inventoryPage.validateInventoryPageURL();
    inventoryPage.validateInventoryTitle();
    inventoryPage.validateInventoryMenuButton();
    inventoryPage.validateInventoryShoppingCardIcon();
});

When("I add product {string} to cart", (productName) => {
    inventoryPage.addProductToCart(productName);
});

Then("I can see {string} items added to cart", (numberOfProducts) => {
    inventoryPage.verifyProductAddedToCart(numberOfProducts);
});

Then("I click on cart container icon", ()=> {
    inventoryPage.clickCartContainerIcon();
});
