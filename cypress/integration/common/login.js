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
        cy.getByID(pageSelectors.usernameID).type(username);
    }

    fillPassword(password) {
        cy.getByID(pageSelectors.passwordID).type(password);
    }

    clickLoginButton() {
        cy.getByID(pageSelectors.loginButtonID).click();
    }

    validateErrorMessage(errorMessage) {
        cy.getByClassName(pageSelectors.errorContainerClass).then((element) => {
            expect(element.text().includes(errorMessage)).to.be.true;
        });
    }
}

export default LoginPage;


