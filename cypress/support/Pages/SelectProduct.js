/// <reference types= "cypress" />
export class SelectProduct {
    elegimosPrimerProducto(){
    cy.get ('#whitepants').click()
    cy.get ("button").contains("Close").click()}
    elegimosSegundoProducto(){
    cy.get ('#blacksocks').click()
    cy.get("button").contains("Close").click()
    }
    clickShop(){
    cy.get ("button").contains("Go to shopping cart").click()
    }

}
    