class Counter {
  public value = 0

  addOne(): void {
    this.value = this.value + 1
  }

  addTwo(): void {
    this.value = this.value + 2
  }

  minusOne(): void {
    this.value = this.value - 1
  }

  minusTwo(): void {
    this.value = this.value - 2
  }
}

export default Counter
