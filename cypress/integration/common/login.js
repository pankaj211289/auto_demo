/// <reference types="cypress" />

import { LOGIN } from "../../support/pages";

const {
    route,
    selectors : {loginForm : pageSelectors},
} = LOGIN;

class LoginPage {

    // Navigates To Home Page
    navigateToPage() {
        cy.visit(route);
    }

    // Enters username
    fillUsername(username) {
        cy.getByID(pageSelectors.usernameID).type(username);
    }

    // Enters Password
    fillPassword(password) {
        cy.getByID(pageSelectors.passwordID).type(password);
    }

    // Clicks Login button
    clickLoginButton() {
        cy.getByID(pageSelectors.loginButtonID).click();
    }

    // Validates Error message
    validateErrorMessage(errorMessage) {
        cy.getByClassName(pageSelectors.errorContainerClass).then((element) => {
            expect(element.text().includes(errorMessage)).to.be.true;
        });
    }

    // Validates Home Page
    validateHomePage() {
        cy.getByID(pageSelectors.usernameID).should('be.visible');
        cy.getByID(pageSelectors.usernameID).focus();
    }
}

export default LoginPage;


