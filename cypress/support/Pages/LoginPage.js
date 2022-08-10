/// <reference types="cypress" />

export class LoginPage {

    escribirUsuario(usuario){
        cy.get("#user").type(usuario);
    };
    escribirPasword(pasword){
        cy.get("#pass").type(pasword)
    }
    clickLoginBoton(){
        cy.get("#submitForm").click();
    }

}