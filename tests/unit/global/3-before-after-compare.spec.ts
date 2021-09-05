import Counter from './counter/index'
const { info } = console

describe('Test afterEach/afterAll, beforeEach/beforeAll, ', () => {
  let counter: Counter | null = null

  beforeAll(() => {
    info('LifeCycle: beforeAll >> execute before test cases')
  })

  beforeEach(() => {
    counter = new Counter()
    info('LifeCycle: beforeEach >> execute before every test cases')
  })

  afterAll(() => {
    info('LifeCycle: afterAll >> execute after all test cases')
  })

  afterEach(() => {
    info('LifeCycle: afterEach >> execute after every test cases')
  })

  it('Test Counter addOne ', () => {
    info('Test addOne')
    counter?.addOne()
    expect(counter?.value).toBe(1)
  })

  it('Test Counter addTwo ', () => {
    info('Test addTwo')
    counter?.addTwo()
    expect(counter?.value).toBe(2)
  })

  it('Test Counter minusOne ', () => {
    info('Test minusOne')
    counter?.minusOne()
    expect(counter?.value).toBe(-1)
  })

  it('Test Counter minusTwo ', () => {
    info('Test minusTwo')
    counter?.minusTwo()
    expect(counter?.value).toBe(-2)
  })
})

/**
 * Output:
    LifeCycle: beforeAll >> execute before test cases

    LifeCycle: beforeEach >> execute before every test cases

    Test addOne

    LifeCycle: afterEach >> execute after every test cases

    LifeCycle: beforeEach >> execute before every test cases

    Test addTwo

    LifeCycle: afterEach >> execute after every test cases

    LifeCycle: beforeEach >> execute before every test cases

    Test minusOne

    LifeCycle: afterEach >> execute after every test cases

    LifeCycle: beforeEach >> execute before every test cases

    Test minusTwo

    LifeCycle: afterEach >> execute after every test cases

    LifeCycle: afterAll >> execute after all test cases
 */
