/// <reference types="cypress" />
import {LoginPage} from "./login-page";
const loginPage:LoginPage = new LoginPage();

export class GeneralPage {
    login(){
        cy.visit('/mon-compte/');
        loginPage.getEmailInput()
            .type(Cypress.env('username'))
        loginPage.getPasswordInput()
            .type(Cypress.env('password'));
        loginPage.getConnectButton().click()
    }
    // button
    getMySubscriptionAccessTab(){
        return cy.get('.woocommerce-MyAccount-navigation-link--dashboard');
    }
    getAccountManagementAccessTab(){
        return cy.get('.woocommerce-MyAccount-navigation-link--edit-account');
    }
    getOrdersAccessTab(){
        return cy.get('.woocommerce-MyAccount-navigation-link--orders');
    }
    getInvoicesAccessTab(){
        return cy.get('.woocommerce-MyAccount-navigation-link--invoice');
    }
    getMaterielAccessTab(){
        return cy.get('.woocommerce-MyAccount-navigation-link--materiel');
    }
    getManagerAccessTab(){
        return cy.get('.woocommerce-MyAccount-navigation-link--manager');
    }
    getAssistanceAccessTab(){
        return cy.get('.woocommerce-MyAccount-navigation-link--assistance');
    }
    getLogoutButton(){
        return cy.get('.woocommerce-MyAccount-navigation-link--customer-logout');
    }
}