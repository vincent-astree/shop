/// <reference types="cypress" />
export class AssistancePage {
    getAssistanceButton(){
        return cy.get('.woocommerce-MyAccount-navigation-link--assistance > a');
    }
    getSupportPhoneNumberText(){
        return cy.get('.wp-block-columns > :nth-child(2) > ul > :nth-child(1)');
    }
    getCommercialPhoneNumberText(){
        return cy.get('.wp-block-columns > :nth-child(2) > ul > :nth-child(2)');
    }

    // form
    getSubjectFormInput(){
        return cy.get(':nth-child(6) > .wpcf7-form-control-wrap > .wpcf7-form-control')
    }
    getTextFormInput(){
        return cy.get(':nth-child(8) > .wpcf7-form-control-wrap > .wpcf7-form-control');
    }
    getErrorSubjectMessage(){
        return cy.get(':nth-child(6) > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip');
    }
    getErrorTextMessage(){
        return cy.get(':nth-child(8) > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip');
    }
    getSendButton(){
        return cy.get('button');
    }
}