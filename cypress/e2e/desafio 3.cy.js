/// <reference types="cypress"   />
import {LoginPage} from "../support/Pages/LoginPage"
/// <reference types="cypress"  />
import {RegisterPage} from "../support/Pages/RegisterPage"
///<reference types="cypress" />
import {HomePage} from"../support/Pages/HomePage"
///<reference types="cypress" />
import {SelectProduct} from"../support/Pages/SelectProduct"
///<reference types="cypress"  />
import{ShoppingCart} from"../support/Pages/ShoppingCart"

describe('Desafio 3', () =>{
  const loginPage = new LoginPage
  const registerPage= new RegisterPage
  const homePage= new HomePage
  const selecProduct= new SelectProduct
  const shoppingcart= new ShoppingCart
  let loginData
  let productosData
before('setear la data', () =>{
  cy.fixture('loginData').then((data)=>{
  loginData=data;  
   })
   cy.fixture ('productosData').then(Pdata =>{
    productosData = Pdata
   })
  })
beforeEach('Deberia loguearse',()=>{
  cy.visit("/")
  registerPage.DobleClik()
  loginPage.escribirUsuario(loginData.username)
  loginPage.escribirPasword(loginData.password)
  loginPage.clickLoginBoton()
  homePage.clickOnlyShop()
})
it('Elegir 2 productos', () => {
  selecProduct.elegimosPrimerProducto()
  selecProduct.elegimosSegundoProducto()
  selecProduct.clickShop()
  shoppingcart.EndcheckProduct
  shoppingcart.EndcheckPrice

  shoppingcart.clickTotalPrice()
  cy.get('#price > b')
expect(30).to.equal(30)

  

  
  

  })
})
