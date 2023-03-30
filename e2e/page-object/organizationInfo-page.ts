/// <reference types="cypress" />
export class OrganizationInfoPage {
    getNumberAndNameStreetInput(){
        return cy.get('#billing_address_1');
    }
    getCityInput(){
        return cy.get('#billing_city');
    }
    getPostalCodeInput(){
        return cy.get('#billing_postcode');
    }
    getSaveModificationButton(){
        return cy.get('.woocommerce-Button');
    }
    getModificationSaveMessage(){
        return cy.get('.woocommerce-message');
    }
    // link button
    getBillingAddressButton(){
        return cy.get('[href="https://sta.astngo.com/mon-compte/edit-address/billing/"]');
    }
    getDeliveryAddressButton(){
        return cy.get('[href="https://sta.astngo.com/mon-compte/edit-address/shipping/"]');
    }
    getBankInformationButton(){
        return cy.get('[href="https://sta.astngo.com/mon-compte/payment-methods/"]');
    }

    // billing page
    getBillingNumberAndNameAddressInput(){
        return cy.get('#billing_address_1');
    }
    getBillingPostalCodeInput(){
        return cy.get('#billing_postcode');
    }
    getBillingDeliverySaveButton(){
        return cy.get('.button');
    }

    // delivery page
    getDeliveryAddressInput(){
        return cy.get('#shipping_address_1');
    }
    getDeliveryCompanyNameInput(){
        return cy.get('#shipping_company');
    }

    // bank page
    getPaymentMethodText(){
        return cy.get('.payment-method > .woocommerce-PaymentMethod--method');
    }
    getStatusText(){
        return cy.get('.in_subscription_message')
    }
    getEndCardDateText(){
        return cy.get('.payment-method > .woocommerce-PaymentMethod--expires');
    }
}