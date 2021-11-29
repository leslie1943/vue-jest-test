/**
 *Get A DOM element at a specific index in an array of elements.
 */

// import { expect } from 'chai'
describe('commands-eq', () => {
  it('command clear: to page', () => {
    cy.visit('/#/cypress-command-clear')
    cy.wait(1000)
  })

  it('command eq: ul.li with class active', () => {
    cy.get('ul').find('li').should('have.length.at.least', 5)
    cy.get('ul').find('li').filter('.active').should('have.length', 1)
  })
})
