/**
 Get the DOM element containing the text. DOM elements can contain more than the desired text and still match. Additionally, 
 Cypress prefers some DOM elements over the deepest element found.

 cy.contains(content)
  cy.contains(content, options)
  cy.contains(selector, content)
  cy.contains(selector, content, options)
 */

// import { expect } from 'chai'
describe('commands-contains', () => {
  it('command contains: to page', () => {
    cy.visit('/#/cypress-command-contains')
  })

  it('command contains: button', () => {
    cy.contains('First').click()
    cy.wait(1000)
    cy.get('div.res').should('include.text', '1')
  })

  it('command contains: first match', () => {
    cy.contains('apples').should('have.class', 'app1')
  })

  it('command contains: first match', () => {
    // contains 要完全 match.
    cy.contains('TEST').should('have.class', '1').click()
    cy.contains('test', { matchCase: false }).should('have.class', '1').click()
  })
})
