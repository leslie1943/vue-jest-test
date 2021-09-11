class NumberMsg {
  public msg = ''
  public cur = 0

  getRandom(): number {
    return Math.random() * 100
  }

  getFixValue(): number {
    return 50
  }

  printResult(): void {
    const num = this.getRandom()
    if (num > 50) {
      this.msg = 'Good'
    } else {
      this.msg = 'Cool'
    }
  }

  printFixResult(): void {
    const num = this.getFixValue()
    this.cur = num
  }
}

describe('Name of the group', () => {
  const nm = new NumberMsg()

  it('Test ## 1: should return OK ', () => {
    jest.spyOn(nm, 'getRandom').mockReturnValue(60)
    nm.printResult()
    expect(nm.msg).toBe('Good')
  })

  it('Test ## 2: should return Cool ', () => {
    jest.spyOn(nm, 'getRandom').mockReturnValue(12)
    nm.printResult()
    expect(nm.msg).toBe('Cool')
  })

  it('Test ## 3: should return mock value ', () => {
    // will impact test case 4, if not use mockReturnValueOnce
    // you can try to change it to mockReturnValue to check the impact.
    jest.spyOn(nm, 'getFixValue').mockReturnValueOnce(1)
    nm.printFixResult()
    expect(nm.cur).toBe(1)
  })

  it('Test ## 4: should return fix value ', () => {
    nm.printFixResult()
    expect(nm.cur).toBe(50)
  })
})
