// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('.v-toolbar__content .v-btn__content > .v-icon').click()
    cy.wait(2000)
    cy.get('.v-toolbar__content .v-btn__content > .v-icon').click()
  })

  /**
   * API: contains
   * Get the DOM element containing the text.
   * DOM elements can contain more than the desired text and still match.
   * Additionally, Cypress prefers some DOM elements over the deepest element found.
   * Syntax
      cy.contains(content)
      cy.contains(content, options)
      cy.contains(selector, content)
      cy.contains(selector, content, options)
   */
  it('Test the title of home page', () => {
    cy.get('.home').contains('h1', 'JUST') //  Yield el in .home containing 'JUSt'
    cy.contains('h1', `JUST DO IT`) // Yield first el in document containing 'Hello'
    cy.get('.home > .v-btn > .v-btn__content').trigger('click')
  })

  it('Test expect', () => {
    // expect({ name: 'leslie' }).to.deep.equal({ name: 'leslie' })
    // expect({ name: 'leslie' }).equal({ name: 'leslie' })
    // expect('leslie').equal('leslie')
  })
})
