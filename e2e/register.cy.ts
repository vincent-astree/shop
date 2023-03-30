/// <reference types="cypress" />
import {RegisterPage} from "./page-object/register-page";
const registerPage:RegisterPage = new RegisterPage();

describe('register test', () => {
    it('register (AS-TC-98, AS-TC-99)', () => {
        cy.visit('/')
        registerPage.getAccountIconButton().click();
        registerPage.getRegisterButton().click();
        // personal information
        registerPage.getNameInput()
            .type('Toto');
        registerPage.getFirstNameInput()
            .type('Vincent');
        registerPage.getPhoneNumberInput()
            .type('0606060606');
        registerPage.getBirthDateInput()
            .type('13-12-1990{enter}');
        registerPage.getCompanyNameInput()
            .type(Cypress.env('company'))
        registerPage.getAddressInput()
            .type('Toto avenue');
        registerPage.getPostalCodeInput()
            .type('42500', {force:true});
        registerPage.getCityInput()
            .type('Sainté');
        registerPage.getSaveButton()
            .should('be.disabled');
        registerPage.getMailInput()
            .type(Cypress.env('username'));
        registerPage.getConfirmMailInput()
            .type(Cypress.env('username'));
        registerPage.getPasswordInput()
            .type(Cypress.env('password'));
        registerPage.getPasswordConfirmInput()
            .type(Cypress.env('password'))
        registerPage.getCGVCase()
            .check();
        registerPage.getSaveButton()
            .should('be.enabled');
    })
})