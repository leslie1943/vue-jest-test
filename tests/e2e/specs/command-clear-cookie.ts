/**
 *Clear the value of an input or textarea.
 */

// import { expect } from 'chai'
describe('commands-clear-cookie', () => {
  it('command clear: to page', () => {
    cy.visit('/#/cypress-command-clear-cookie')
    cy.wait(1000)
  })

  it('command clear cookie: set cookie', () => {
    cy.setCookie('user', 'leslie')
    cy.getCookie('user').should('not.be.null')
    cy.wait(1000)
  })

  it('command clear cookie: clear cookie', () => {
    cy.clearCookie('user')
    cy.getCookie('user').should('be.null')
  })
})
