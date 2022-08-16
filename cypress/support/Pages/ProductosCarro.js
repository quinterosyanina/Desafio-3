/// <reference types="cypress" />

export class ProductosCarro {

    agregarProductoAlCarrito(productos){
        cy.get(`[value="${productos}"]`).click()
    }

    clickModal(){
        cy.get('#closeModal').click()
    }
}