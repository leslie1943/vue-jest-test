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

  it('command click: add button', () => {
    cy.get('#btn_add').click()
    cy.get('.counter').should('have.text', 1)
    cy.wait(1000)
  })

  it('command click: minus button', () => {
    cy.get('#btn_minus').click()
    cy.get('.counter').should('have.text', 0)
    cy.wait(1000)
  })

  it('command click: double click on button', () => {
    cy.get('#btn_add').click()
    cy.get('.counter').should('have.text', 1)
    cy.wait(1000)

    cy.get('#btn_mul').dblclick()
    cy.get('.counter').should('have.text', 10)
    cy.wait(1000)
  })

  it('command: multiple click', () => {
    cy.get('.v-image').click({ multiple: true })
  })

  it('command click: click <a>', () => {
    cy.get('nav > a').click({ ctrlKey: true, force: true })
  })
})
