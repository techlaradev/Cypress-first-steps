/// <reference types="cypress" />
 const { Given,When } = require("@badeball/cypress-cucumber-preprocessor");


const url = "https://www.webdriveruniversity.com"

Given(`Navigate to the webdriver university homepage`, () => {
    cy.visit(url);
}) 

 When(`click on contact us button`,() => {

     cy.get("#contact-us").invoke("removeAttr", "target").click()


 }) 




