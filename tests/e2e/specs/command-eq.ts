/**
 *Get A DOM element at a specific index in an array of elements.
 */

// import { expect } from 'chai'
describe('commands-eq', () => {
  it('command clear: to page', () => {
    cy.visit('/#/cypress-command-clear')
    cy.wait(1000)
  })

  it('command eq: get the 2nd elements', () => {
    cy.get('li').eq(1).should('contain.text', 'siamese')
    cy.get('li').eq(1).should('contain', 'siamese')
  })

  it('command eq: get the 3rd row of table', () => {
    cy.get('tr').eq(2).should('contain', 'Canada')
  })
})
