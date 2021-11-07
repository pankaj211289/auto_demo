/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../common/login";

const loginPage = new LoginPage();

Given("I navigate to Login page", () => {
    loginPage.navigateToPage();
})

When("I enter username as {string}", (username) => {
    loginPage.fillUsername(username);
})

When("I enter password as {string}", (password) => {
    loginPage.fillPassword(password);
})

When("I click on Login button", () => {
    loginPage.clickLoginButton();
})

When("I logged in as valid user", () => {
    loginPage.fillUsername(Cypress.env('username'));
    loginPage.fillPassword(Cypress.env('password'));
    loginPage.clickLoginButton();
}) 
