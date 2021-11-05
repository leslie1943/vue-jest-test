/**
 * blue: blur a focused element
 * This element must currently be in focus.
 * If you want to ensure an element is focused before blurring, try using .focus() before .blur().
 */

import { expect } from 'chai'
describe('commands-blur', () => {
  it('command as test: to page', () => {
    cy.visit('/#/cypress-command-blur')
    cy.wait(1000)
  })

  it('before blur', () => {
    cy.get('#blur').should('have.text', '')
    cy.wait(1000)
  })

  it('make sure it should be focused, then blur', () => {
    cy.get('#name').clear().type('change name').blur()
    cy.wait(2000)
    // cy.get('#email').blur() // can only be called when there is a currently focused element
    cy.get('#email').focus().blur()
    cy.wait(2000)
  })

  it('after blur', () => {
    cy.get('#blur').should('have.text', 'content blur name')
    cy.get('#blur').should('have.html', 'content blur name')
  })

  it('clear content then typing some something in element', () => {
    cy.get('#area').clear()
    cy.wait(5000)
    cy.get('#area').type(`blur() is a helpful command used as a shortcut.`)
  })
})
