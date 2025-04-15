// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// this is how .click() is implemented
Cypress.Commands.add('login', (EmailAddress, Password) => { 
    cy.log('command')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form').should('be.visible')
    cy.get('[data-qa="login-email"]').type(EmailAddress)
  cy.get('[data-qa="login-password"]').type(Password)
  cy.get('[data-qa="login-button"]').click() })