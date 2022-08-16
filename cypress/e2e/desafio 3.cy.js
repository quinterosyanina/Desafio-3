/// <reference types="cypress"   />
import {LoginPage} from "../support/Pages/LoginPage"

import {RegisterPage} from "../support/Pages/RegisterPage"
import {HomePage} from"../support/Pages/HomePage"
import {SelectProduct} from"../support/Pages/SelectProduct"
import{ShoppingCart} from"../support/Pages/ShoppingCart"
import {ProductosCarro} from "../support/Pages/ProductosCarro"

describe('Desafio 3', () =>{
  const loginPage = new LoginPage
  const registerPage= new RegisterPage
  const homePage= new HomePage
  const selecProduct= new SelectProduct
  const shoppingcart= new ShoppingCart
  const productoscarro = new ProductosCarro
  let loginData,fixtureProductos


 
before('setear la data', () =>{
  cy.fixture('loginData').then((data)=>{
  loginData=data;  
   })
   cy.fixture ('fixtureProductos').then(dataProducto =>{
    fixtureProductos = dataProducto
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
  productoscarro.agregarProductoAlCarrito(fixtureProductos.Prenda1)
  productoscarro.clickModal()
  productoscarro.agregarProductoAlCarrito(fixtureProductos.Prenda2)
  productoscarro.clickModal()
  shoppingcart.popupGoToShoppingCar()
  shoppingcart.ShowTotalSuma2Productos()
  shoppingcart.ComparacionProducto(fixtureProductos.Prenda1);
  shoppingcart.ComparacionPrecioProduct(fixtureProductos.Prenda1,fixtureProductos.PrecioPrenda1);
  shoppingcart.ComparacionProducto(fixtureProductos.Prenda2);
  shoppingcart.ComparacionPrecioProduct(fixtureProductos.Prenda2,fixtureProductos.PrecioPrenda2); 
  shoppingcart.Precios2Productos('have.text', fixtureProductos.PrecioPrenda1 + fixtureProductos.PrecioPrenda2)
 

  

  
  

  })
})
