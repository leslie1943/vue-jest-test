/**
 *Clear the value of an input or textarea.
 */

// import { expect } from 'chai'
describe('commands-clear', () => {
  it('command clear: to page', () => {
    cy.visit('/#/cypress-command-clear')
    cy.wait(1000)
  })

  it('command clear: test', () => {
    cy.get('input').clear()
    cy.get('textarea').clear().type('new text setence.')
  })
})
