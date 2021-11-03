describe('commands-and', () => {
  it('command and test: to page', () => {
    cy.visit('/#/cypress-command-and')
    cy.wait(1000)
  })

  it('Test: get => should => and', () => {
    const el_a = cy
      .get('a')
      .should('contain', 'Edit User') // expected <a> to contain Edit User => yields <a>
      .and('have.attr', 'href') // expected <a> to have attribute href => yields string value of href
      .and('match', /users/) // expected users/123/edit to match /users/ =>  yields string value of href
      .and('not.include', '#')
    console.log('🚀 ~ file: commands-and.ts ~ line 9 ~ it ~ el_a', el_a)
  })

  it('Test: get => should => and', () => {
    /**
       // Yield el in .nav containing 'About'
        cy.get('.nav').contains('About')
        // Yield first el in document containing 'Hello'
        cy.contains('Hello')
        // you can use regular expression
        cy.contains(/^b\w+/)
        // yields <ul>...</ul>
        cy.contains('ul', 'apples')
        // tries to find the given text for up to 1 second
        cy.contains('my text to find', {timeout: 1000})
       */
    cy.contains(
      'Create an assertion. Assertions are automatically retried until they pass or time out.'
    ).and('be.visible')
  })

  it('Test get with timeout', () => {
    cy.get('#and-name', { timeout: 10000 }).should('have.value', 'moon').and('have.attr', 'type')
  })
})
