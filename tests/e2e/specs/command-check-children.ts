/**
 * Get the children of each DOM element within a set of DOM elements.
    .children()
    .children(selector)
    .children(options)
    .children(selector, options)
 */

// import { expect } from 'chai'
describe('commands-children', () => {
  it('command children: to page', () => {
    cy.visit('/#/cypress-command-children')
    cy.wait(1000)
  })

  it('command children: have.length', () => {
    cy.get('ul.secondary-nav').children().should('have.length', 3)
    cy.wait(1000)
  })

  it(`command children: have.length and test any children's text`, () => {
    cy.get('ul.secondary-nav').children().should('have.length', 3).should('contain.text', 'Signage')
    cy.wait(1000)
  })

  it('command children: get children with selector to narrow elements', () => {
    cy.get('ul.secondary-nav').children('.services-1').should('have.length', 1)
    cy.get('ul.secondary-nav').children('.services-2').should('have.text', 'Logo Design')
    cy.get('ul.secondary-nav').children('.services-3').should('contain', 'Print Design')
    cy.wait(1000)
  })

  it('command children: have.length', () => {
    cy.get('.tertiary-nav').children().should('have.length', 3)
    cy.get('.tertiary-nav').children('li').should('have.length', 3)
    cy.get('ul.tertiary-nav').children('li').should('have.length', 3)
    cy.wait(1000)
  })

  it('command children: chain call', () => {
    cy.get('.tertiary-nav').children().should('contain.text', 'Signage')
    cy.get('.tertiary-nav').children().should('contain.text', 'Shirt')
    cy.get('.tertiary-nav').children().should('contain.text', 'Business Cards')
    cy.wait(1000)
  })

  it('command children: first/next/next/last', () => {
    cy.get('ul.tertiary-nav').children().first().should('contain.text', 'Signage')
    cy.get('ul.tertiary-nav').children().next().should('contain.text', 'Shirt')
    cy.get('ul.tertiary-nav').children().next().next().should('contain.text', 'Business')
    cy.get('ul.tertiary-nav').children().last().should('contain.text', 'Business')
    cy.wait(1000)
  })

  it('command children: get children with special selector', () => {
    cy.get('ul.tertiary-nav').children('li').should('have.length', 3)
    cy.get('ul.tertiary-nav').children('li').first().should('contain.text', 'Signage')
    cy.get('ul.tertiary-nav').children('li').next().should('contain.text', 'Shirt')
    cy.get('ul.tertiary-nav').children('li').next().next().should('contain.text', 'Business')
    cy.get('ul.tertiary-nav').children('li').last().should('contain.text', 'Business')

    cy.get('.tertiary-nav').children('li').should('have.length', 3)
    cy.get('.tertiary-nav').children('li').first().should('contain.text', 'Signage')
    cy.get('.tertiary-nav').children('li').next().should('contain.text', 'Shirt')
    cy.get('.tertiary-nav').children('li').next().next().should('contain.text', 'Business')
    cy.get('.tertiary-nav').children('li').last().should('contain.text', 'Business')
    cy.wait(1000)
  })
})
