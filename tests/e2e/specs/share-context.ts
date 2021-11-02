// https://docs.cypress.io/api/introduction/api.html
describe('Share context', () => {
  beforeEach(() => {
    cy.visit('/#/home')
    cy.wait(2000)
  })

  let text = ''

  it('alias text', () => {
    cy.get('.home > .v-btn > .v-btn__content').then(($btn) => {
      text = $btn.text()
    })
  })

  it('Visits the app root url', () => {
    expect(text).to.include('emit')
  })

  // it('intercept api to return response', () => {
  //   cy.intercept('POST', '/users', { id: 123 }).as('postUser')
  //   cy.get('form').submit()
  //   cy.wait('@postUser').then(({ request }) => {
  //     expect(request.body).to.have.property('name', 'Brian')
  //   })
  //   cy.contains('Successfully created user: Brian')
  // })
})
