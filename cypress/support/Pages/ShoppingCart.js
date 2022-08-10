/// <reference types= "cypress" />
export class ShoppingCart{


    EndcheckProduct(product){
        cy.get(`[name='${product}']`).should('exist')


    }
    EndcheckPrice(price,product){
        cy.get(`[name='${product}']`).siblings('#prodictPrice').should('have.text', `$${price}`)
        

    }
    clickTotalPrice(price){
    
        cy.get ("button").contains("Show total price").click()
    }

}