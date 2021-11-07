/// <reference types="cypress" />

import { LOGIN } from "../../support/pages";

const {
    route,
    selectors : {loginForm : pageSelectors},
} = LOGIN;

class LoginPage {

    navigateToPage() {
        cy.visit(route);
    }

    fillUsername(username) {
        cy.get("#" + pageSelectors.usernameID).type(username);
    }

    fillPassword(password) {
        cy.get("#" + pageSelectors.passwordID).type(password);
    }

    clickLoginButton() {
        cy.get("#" + pageSelectors.loginButtonID).click();
    }
}

export default LoginPage;


