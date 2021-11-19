/**
 Get the first DOM element that matches the selector (whether it be itself or one of its ancestors).
 */

// import { expect } from 'chai'
describe('commands-clock-closet', () => {
  it('command clock: to page', () => {
    cy.visit('/#/cypress-command-clock')
    cy.get('.first').should('include.text', 0)
    cy.clock(1000)
    cy.get('.second').should('include.text', 1)
    cy.wait(1000)
    cy.get('.third').should('include.text', 2)
  })

  it('command closet: closet', () => {
    // 找到第一个 class为 first 的 li 元素
    cy.get('li').closest('.first').should('have.class', 'first').should('not.be.a', '')
  })

  it('command closet: closet', () => {
    cy.get('span').closest('.more-detail').should('include.text', '1')
  })
})
