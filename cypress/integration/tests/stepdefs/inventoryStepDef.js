/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import InventoryPage from "../../common/inventory";

const inventoryPage = new InventoryPage();

Then("I am on Inventory page", ()=> {
    inventoryPage.validateInventoryPageURL();
    inventoryPage.validateInventoryTitle();
    inventoryPage.validateInventoryMenuButton();
    inventoryPage.validateInventoryShoppingCardIcon();
});