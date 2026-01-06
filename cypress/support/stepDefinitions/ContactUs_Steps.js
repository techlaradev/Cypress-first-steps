/// <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor"

const url = "https://www.webdriveruniversity.com"


// #### Happy Paths ####

When(`type a first name`, () => {
  cy.get('input[name="first_name"]').type("Larinha")
})

When(`type a last name`, () => {
cy.get('input[name="last_name"]').type("zero grau")

})
When(`type a valid email address`, () => {
  cy.get('input[name="email"]').type("zerograu@email.com")

})
When(`type a comment`, () => {
    cy.get('textarea[name="message"]').type("zero grau")

})

When(`click in the submit button`, () => {
     cy.get('[type="submit"]').click()
})


Then(`should present a loading page showing a message that the form was send successfuly.`, () => {
  cy.get('h1').should('have.text','Thank You for your Message!') 
  //used for dynamic texts, is likely useful
})

  // testing happy path with a specific scripts
When(`type a first name like {string}`, (firstName) => {
  cy.get('input[name="first_name"]').type(firstName)
})

When(`type a last name like {string}`, (lastName) => {
cy.get('input[name="last_name"]').type(lastName)

})
When(`type a valid email address like {string}`, (email) => {
  cy.get('input[name="email"]').type(email)

})

When(`type a comment like {string} and type a number {int}`, (word,number) => {
    cy.get('textarea[name="message"]').type(`${word} ${number}`)

})




// #### Negative scenarios #####

Then(`should present a page with a message that all fields are required`, () => {
  cy.get('body')
  .should('have.text','\n\n\n Error: all fields are required\n Error: Invalid email address\n\n\n')
  //used for dynamic texts, is likely useful
})


// #### Alternative scenarios #####


Then(`click in the reset button`, () => {
cy.get('[type="reset"]').click()
})


// #### For outline scenarios


When('type a first name {word} and a last name {string}', (firstName, lastName) => {
cy.get('input[name="first_name"]').type(firstName)
cy.get('input[name="last_name"]').type(lastName)

})


When('type a email {string} and a comment {string}', (email, message) => {
cy.get('input[name="email"]').type(email)
cy.get('textarea[name="message"]').type(message)

})

Then('should present a page with a message {string}', (text) =>{
 cy.xpath("//h1 | //body").contains(text)

})