/**
 Click a DOM element.
 */

// import { expect } from 'chai'
describe('commands-click', () => {
  it('command clear: to page', () => {
    cy.visit('/#/cypress-command-click')
    cy.get('.counter').should('have.text', 0).should('have.css', 'color')
    cy.wait(1000)
  })

  it('command click: button', () => {
    cy.get('#btn_add').click()
    cy.get('.counter').should('have.text', 1)
    cy.wait(1000)
  })

  it('command click: button', () => {
    cy.get('#btn_minus').click()
    cy.get('.counter').should('have.text', 0)
    cy.wait(1000)
  })

  it('command click: click <a>', () => {
    cy.get('nav > a').click()
  })
})
