/// <reference types="cypress" />
import { LoginPage } from "./page-object/login-page";

const log:LoginPage = new LoginPage();

describe('Login, shop to manager (AS-TC-100)', () => {
    beforeEach(() => {
        cy.viewport(1280,900);
        cy.visit('/');
    })
    it('Should Load the correct URL', () => {
        cy.url()
            .should('eq',  Cypress.env('URL_SHOP'));
        cy.title()
            .should('eq', 'Logiciel MES pour tous, sans engagement');
    }),
    it('acces to login page', () => {
        log.getAccesLoginIcon()
            .should('have.class', 'icon-account')
            .click();
        cy.url()
            .should('eq',  Cypress.env('URL_SHOP')+'mon-compte/');
        cy.get('body')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(255, 255, 255)');
        log.getEmailInput()
            .should('have.css', 'background-color')
            .and('eq', 'rgb(242, 244, 247)');
        log.getPasswordInput()
            .should('have.css', 'background-color')
            .and('eq', 'rgb(242, 244, 247)');
        log.getConnectButton()
            .should('have.css', 'background-color')
            .and('eq', 'rgb(228, 61, 48)');
        log.getConnectButton()
            .should('have.text', 'Se connecter')
        log.getTitle()
            .should('have.text', 'Connectez-vous  à votre espace privé');
        log.getTitle()
            .should('have.css', 'color')
            .and('eq', 'rgb(29, 37, 44)');
    }),
    it('try login without credentials', () => {
        log.getAccesLoginIcon()
            .should('have.class', 'icon-account')
            .click();
        log.getConnectButton()
            .click();
        cy.get('.woocommerce-error > li')
            .should('include.text', 'Identifiant obligatoire.');
        cy.url()
            .should('eq',  Cypress.env('URL_SHOP')+'mon-compte/');
    }),
    it('try login with wrong email', () => {
        log.getAccesLoginIcon()
            .click();
        cy.get('.woocommerce-error')
            .should('not.exist');
        log.getEmailInput()
            .type('wrong@email.com');
        log.getPasswordInput()
            .type('wrong passs');
        log.getConnectButton()
            .click();
    }),
    it('try good email and wrong password', () => {
        log.getAccesLoginIcon()
            .click();
        log.getEmailInput()
            .type(Cypress.env('username'));
        log.getEmailInput()
            .should('have.value', Cypress.env('username'))
        log.getPasswordInput()
            .type('WRONGGGG');
        log.getPasswordInput()
            .should('have.value', 'WRONGGGG');
        log.getConnectButton()
            .click();
        cy.get('.woocommerce-error')
            .should('exist');
        cy.get('.woocommerce-error  > li')
            .should('include.text', 'Identifiants de connexion erronés');
    })
    it('try login (AS-TC-100)', () => {
        log.getAccesLoginIcon()
            .click();
        log.getEmailInput()
            .type(Cypress.env('username'));
        log.getEmailInput()
            .should('have.value', Cypress.env('username'));
        log.getPasswordInput()
            .type(Cypress.env('password'));
        log.getPasswordInput()
            .should('have.value', Cypress.env('password'));
        log.getConnectButton()
            .click();
        cy.url()
            .should('eq', Cypress.env('URL_SHOP')+'mon-compte/');
    })
})