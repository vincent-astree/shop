/// <reference types="cypress" />
export class RegisterPage {
    getAccountIconButton(){
        return cy.get('.icon-account');
    }
    getRegisterButton(){
        return cy.get('.moreBtn');
    }
    // personal information input
    getNameInput(){
        return cy.get('#billing_last_name');
    }
    getFirstNameInput(){
        return cy.get('#billing_first_name');
    }
    getPhoneNumberInput(){
        return cy.get('#billing_phone');
    }
    getBirthDateInput(){
        return cy.get('#billing_birth');
    }
    getNextButton(){
        return cy.get('.InscStepUn > .navInsc > .moreBtn');
    }
    // company information input
    getCompanyNameInput(){
        return cy.get('#account_company');
    }
    getAddressInput(){
        return cy.get('#account_address_1');
    }
    getPostalCodeInput(){
        return cy.get('#account_postcode');
    }
    getCityInput(){
        return cy.get('#account_city');
    }
    getSecondNextButton(){
        return cy.get('.InscStepDeux > .navInsc > .valid_insc_step');
    }
    getMailInput(){
        return cy.get('#reg_email');
    }
    getConfirmMailInput(){
        return cy.get('#reg_email_2');
    }
    getPasswordInput(){
        return cy.get('#reg_password');
    }
    getPasswordConfirmInput(){
        return cy.get('#reg_password2');
    }
    getCGVCase(){
        return cy.get('#cgvInscription');
    }
    getSaveButton(){
        return cy.get('.woocommerce-Button');
    }
}