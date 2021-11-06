/**
 * This element must be an <input> with type checkbox or radio
 * Check checkbox(es) or radio(s).
  .check()
  .check(value)
  .check(values)
  .check(options)
  .check(value, options)
  .check(values, options)
 */

// import { expect } from 'chai'
describe('commands-check', () => {
  it('command as test: to page', () => {
    cy.visit('/#/cypress-command-check')
    cy.wait(1000)
  })

  it('before check event', () => {
    cy.get('#rd1').should('be.checked')
    cy.get('#rd2').should('not.be.checked')
    cy.get('#rd3').should('not.be.checked')
    cy.wait(3000)
  })

  it('trigger check for rd2 ', () => {
    cy.get('#rd2').check({ force: true })
    cy.wait(1000)
    cy.get('#rd1').should('not.be.checked').and('have.value', 1)
    cy.get('#rd2').should('be.checked').and('have.value', 2)
    cy.get('#rd3').should('not.be.checked').and('have.value', 3)
    cy.wait(1000)
    cy.get('#rd1').should('have.value', 1)
    cy.get('#rd2').should('have.value', 2)
    cy.get('#rd3').should('have.value', 3)
  })

  it(`get label for radio button:label[for="xxxx"]`, () => {
    cy.wait(1000)
    cy.get('label[for="rd1"').should('have.text', 'Radio 1')
    cy.get('label[for="rd2"').should('have.text', 'Radio 2')
    cy.get('label[for="rd3"').should('have.text', 'Radio 3')
  })
})
