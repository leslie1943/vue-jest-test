/**
 * This element must be an <input> with type checkbox or radio
 * Check checkbox(es) or radio(s).
  .check()
  .check(value)
  .check(values)
  .check(options)
  .check(value, options)
  .check(values, options)

  ------- test ids -------
  ck_red || ck_red_darken-3  || ck_indigo || ck_indigo_darken_3 || ck_orange || ck_orange_darken_3
 */

// import { expect } from 'chai'
describe('commands-check', () => {
  it('command as test: to page', () => {
    cy.visit('/#/cypress-command-check')
    cy.wait(1000)
  })

  it('command as test: uncheck', () => {
    cy.wait(1000)
    cy.get('[type="checkbox"]').first().uncheck({ force: true })
    cy.get('[type="checkbox"]').last().uncheck({ force: true })
    cy.get('[type="checkbox"]').should('have.length', 6)
  })

  it('command as test: all check', () => {
    cy.wait(1000)
    cy.get('[type="checkbox"]').check({ force: true })
  })

  it('command as test: all uncheck', () => {
    cy.wait(1000)
    cy.get('[type="checkbox"]').uncheck({ force: true })
  })

  //
  it('command as test: check one and uncheck one', () => {
    cy.wait(5000)
    cy.get('#ck_red').check({ force: true })
    cy.get('#ck_red_darken-3').check({ force: true })
    cy.get('#ck_indigo').check({ force: true })
    cy.get('#ck_indigo_darken_3').check({ force: true })
    cy.get('#ck_orange').check({ force: true })
    cy.get('#ck_orange_darken_3').check({ force: true })
  })

  it('command check: checked and value', () => {
    cy.wait(2000)
    cy.get('#ck_red:checked').should('be.checked').and('have.value', 'red')
  })

  it('command check: unchecked and value', () => {
    cy.wait(2000)
    cy.get('#ck_indigo').uncheck({ force: true })
    cy.get('#ck_indigo').should('not.be.checked').and('have.value', 'indigo')
  })
})
