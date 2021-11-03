// https://docs.cypress.io/api/introduction/api.html

describe('Test Assertion', () => {
  it('Visit to Hello World Page', () => {
    cy.visit('/#/hello-world')
  })

  it('Assertion basic data(equal): OK', () => {
    // expect('leslie').equal('leslie')
    // expect('1').equal('1')
    // expect(100).equal(100)
    // expect(null).equal(null)
    // expect('').equal('')
    // expect(undefined).equal(undefined)
  })
  it('Assertion basic data(to.not.equal / not.to.equal): NOT OK', () => {
    // expect('123').not.to.equal('321')
    // expect('123').to.not.equal('321')
    // expect(NaN).not.to.equal(NaN)
  })

  it('Assertion reference data(to.deep.equal): OK', () => {
    // expect({ name: 'leslie' }).to.deep.equal({ name: 'leslie' })
    // expect([1, 2, 3, 4]).to.deep.equal([1, 2, 3, 4])
  })
  it('Assertion reference data(to.not.equal / not.to.equal): NOT OK', () => {
    // expect({ name: 'leslie' }).to.not.equal({ name: 'leslie' })
    // expect({ name: 'leslie' }).not.to.equal({ name: 'leslie' })
  })

  it('Assertion nested', () => {
    // const obj = {
    //   a: {
    //     b: ['x', 'y'],
    //   },
    // }
    // expect(obj).to.have.nested.property('a.b[0]')
    // expect(obj).to.have.nested.property('a.b[1]')
    // expect(obj).to.not.have.nested.property('a.b[2]')
    // expect(obj).to.nested.include({ 'a.b[1]': 'y' })
    // expect(obj).to.nested.includes({ 'a.b[1]': 'y' })
  })

  it('Assertion ordered', () => {
    // const nums = [1, 2, 3]
    // expect(nums).to.have.ordered.members([1, 2, 3])
    // expect(nums).to.not.have.ordered.members([3, 2, 1])
  })
})
