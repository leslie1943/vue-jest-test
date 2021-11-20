describe('commands-debug', () => {
  it('command debug: to page', () => {
    cy.visit('/#/cypress-command-debug')
    cy.wait(1000)
  })
  it('command debug: to page', () => {
    cy.get('.name').debug() // 在控制台能看到 debug 的内容
  })
  it('command debug: to page', () => {
    cy.get('a').debug().should('have.attr', 'href').debug() // 在控制台能看到 debug 的内容
  })
})
