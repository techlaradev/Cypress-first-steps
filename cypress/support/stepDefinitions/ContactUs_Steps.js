/// <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor"

const url = "https://www.webdriveruniversity.com"


// #### Happy Path

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
