/// <reference types="cypress" />
import {OrganizationInfoPage} from "./page-object/organizationInfo-page";
import {GeneralPage} from "./page-object/general-page";

const orga:OrganizationInfoPage = new OrganizationInfoPage();
const general:GeneralPage = new GeneralPage();

describe('Organization Informations', () => {
    it('modification information (AS-TC-101, AS-TC-102, AS-TC-103)', () => {
        general.login();
        general.getAccountManagementAccessTab()
            .click();
        orga.getNumberAndNameStreetInput()
            .clear()
            .type('1 rue du test');
        orga.getCityInput()
            .clear()
            .type('Saint-Etienne');
        orga.getPostalCodeInput()
            .clear()
            .type('42100');
        orga.getSaveModificationButton()
            .click();
        orga.getModificationSaveMessage()
            .should('exist')
            .should('contain.text', 'Les détails du compte ont bien été modifiés.');
        orga.getBillingAddressButton()
            .click();
        orga.getBillingNumberAndNameAddressInput()
            .clear()
            .type('23 rue de la facturation');
        orga.getBillingPostalCodeInput()
            .clear()
            .type('42100');
        orga.getBillingDeliverySaveButton()
            .click();
        orga.getDeliveryAddressButton()
            .click();
        orga.getDeliveryAddressInput()
            .clear()
            .type('1 rue de la livraison');
        orga.getDeliveryCompanyNameInput()
            .clear()
            .type('company delivery');
        orga.getBillingDeliverySaveButton()
            .click();
        orga.getModificationSaveMessage()
            .should('exist');
        orga.getBankInformationButton()
            .click();
        orga.getPaymentMethodText()
            .should('contain.text', 'Visa se terminant par 4242');
        orga.getStatusText()
            .should('contain.text', 'Utilisé par votre abonnement');
        orga.getEndCardDateText()
            .should('contain.text', '12/23')
    })
})