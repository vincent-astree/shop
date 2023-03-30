/// <reference types="cypress" />
export class MaterialPage {
    getFirstObjectModal(){
        return cy.get('.post-4097');
    }
    getMaterialModal(){
        return cy.get('.trMateriel > .product-name');
    }
    getDeleteMaterialButton(){
        return cy.get('.trMateriel > .product-remove > .remove > .icon-delete');
    }
}