describe('commands-and', () => {
  it('command as test: to page', () => {
    cy.visit('/#/cypress-command-as')
    cy.wait(1000)
  })

  it('command as test: not exist before click', () => {
    // SHOULD_API: not.exist
    cy.get('.main-result').find('.v-chip__content').should('not.exist')
  })

  it('command as test', () => {
    cy.get('.main-nav').find('button').first().as('firstButton')
    cy.get('.main-nav').find('button').last().as('lastButton')
    cy.get('@firstButton').click().should('be.disabled') // SHOULD_API: be.disabled
    cy.get('@lastButton').click()
    cy.wait(1000)
    cy.get('.main-result').find('.v-chip__content').first().as('firstChip')
    cy.get('.main-result').find('.v-chip__content').last().as('lastChip')
    cy.get('@firstChip').should('be.visible').should('have.text', 'TypeScript chip') // SHOULD_API: have.text
    cy.get('@lastChip').should('be.visible').should('have.text', 'NestJS chip') // SHOULD_API: have.text
  })

  // TODO:
  // it('test api', () => {
  //   const url = `https://d7.weather.com.cn/fishing/api/v1/tab?stationId=101070201`
  //   cy.intercept('GET', url).as('getWeather')
  //   cy.wait(1000)
  // })
})
