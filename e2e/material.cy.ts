/// <reference types="cypress" />
import {GeneralPage} from "./page-object/general-page";
import {MaterialPage} from "./page-object/material-page";

const general:GeneralPage = new GeneralPage();
const material:MaterialPage = new MaterialPage();

describe('Material', () => {
    it('add and delete material (AS-TC-107, AS-TC-111)', () => {
        general.login();
        general.getMaterielAccessTab()
            .click();
        cy.get('body')
            .then(body => {
                let object = body.find('.post-4097 > .woocommerce-loop-product__title').text();
                material.getFirstObjectModal()
                    .find('.single_add_to_cart_button')
                    .click();
                material.getMaterialModal()
                    .should('exist');
                cy.get('.trMateriel > .product-name > .product-nameElts > .nameAbo > a')
                    .should('have.text', object);
            })
        material.getDeleteMaterialButton()
            .click();
        cy.wait(2000);
        material.getMaterialModal()
            .should('not.exist');
    })
})