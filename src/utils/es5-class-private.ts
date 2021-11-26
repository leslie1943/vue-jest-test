class Person {
  #name: string
  favorite: string
  constructor(name: string, favorite: string) {
    this.#name = name
    this.favorite = favorite
  }

  greet() {
    console.info(`Hello, my name is ${this.#name}!`)
  }
}

const leslie = new Person('leslie', 'football')
console.info('leslie.favorite', leslie.favorite)
// leslie.#name
