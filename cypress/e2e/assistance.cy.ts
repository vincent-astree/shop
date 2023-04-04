/// <reference types="cypress" />
import { AssistancePage } from "./page-object/assistance-page";
import { GeneralPage } from "./page-object/general-page";

const as:AssistancePage = new AssistancePage();
const general:GeneralPage = new GeneralPage();

describe('Assistance page', () => {
    beforeEach('access to assistance page', () => {
        general.login();
        as.getAssistanceButton()
            .click();
    })
    it('assistance page tests (AS-TC-112)', () => {
        as.getSupportPhoneNumberText()
            .should('contain.text', 'Support technique : 04 81 12 02 22')
        as.getCommercialPhoneNumberText()
            .should('contain.text', 'Commercial : 04 81 12 02 23')
        as.getSendButton()
            .click();
        as.getErrorSubjectMessage()
            .should('exist')
            .and('contain.text', 'Veuillez renseigner ce champ.');
        as.getErrorTextMessage()
            .should('exist')
            .and('have.text', 'Veuillez renseigner ce champ.');
        as.getSubjectFormInput()
            .type('Test')
            .should('have.value', 'Test');
        as.getTextFormInput()
            .type('Ceci est un test')
            .should('have.value', 'Ceci est un test');
    })
})