import usersInJson from '../fixtures/admin-users.json'
describe('commands-fixture', () => {
  it('command as test: to page', () => {
    cy.visit('/#/cypress-command-as')
    cy.wait(1000)
  })

  it('fixture: by then', () => {
    cy.fixture('admin-users.json').then((userFixture) => {
      expect(usersInJson, 'the same data').to.deep.equal(userFixture)
    })
  })
  it('fixture by alias.', () => {
    cy.fixture('admin-users.json').as('admins')

    // get alias and then
    cy.get('@admins').then((aliasData) => {
      /**
       * cy.log(JSON.stringify(aliasData))
       {"users":[
          {"name":"leslie","id":1},
          {"name":"mark","id":2},
          {"name":"justin","id":3}
        ]}
      */
      cy.log(`there are ${(aliasData as any).users.length} users`)
      expect((aliasData as any).users.length).to.equal(usersInJson.users.length)
    })
  })
})
