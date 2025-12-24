/// <reference types="cypress" />

import { Then, When } from "@badeball/cypress-cucumber-preprocessor"

const url = "https://www.webdriveruniversity.com"

When(`type a first name`, () => {
  cy.get('input[name="first_name"]').type("Larinha")
})

When(`type a last name`, () => {
cy.get('input[name="last_name"]').type("zero grau")

})
When(`type a valid email address`, () => {
  cy.get('input[name="email"]').type("zero grau")

})
When(`type a comment`, () => {
    cy.get('textarea[name="message"]').type("zero grau")

})
When(`click in the submit button`, () => {
     cy.get('input[type="submit"]').type("zero grau")

})


// Then(`should present a loading page showing a message that the form was send successfuly.`, () => {
//   cy.get()
// })
