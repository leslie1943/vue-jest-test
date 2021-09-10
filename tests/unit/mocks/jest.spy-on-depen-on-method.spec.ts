class NumberMsg {
  public msg = ''

  getRandom(): number {
    return Math.random() * 100
  }

  printResult(): void {
    const num = this.getRandom()
    if (num > 50) {
      this.msg = 'Good'
    } else {
      this.msg = 'Cool'
    }
  }
}

describe('Name of the group', () => {
  const nm = new NumberMsg()

  it('should return OK ', () => {
    jest.spyOn(nm, 'getRandom').mockReturnValue(60)
    nm.printResult()
    expect(nm.msg).toBe('Good')
  })

  it('should return OK ', () => {
    jest.spyOn(nm, 'getRandom').mockReturnValue(12)
    nm.printResult()
    expect(nm.msg).toBe('Cool')
  })
})
