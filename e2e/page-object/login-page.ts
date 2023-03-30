/// <reference types="cypress" />

export class LoginPage {
    getAccesLoginIcon(){
        return cy.get('.icon-account');
    }
    getEmailInput(){
        return cy.get('#username');
    }
    getPasswordInput(){
        return cy.get('#password');
    }
    getConnectButton(){
        return cy.get('.woocommerce-button');
    }
    getTitle(){
        return cy.get('.contenuPrive__head__title');
    }
}