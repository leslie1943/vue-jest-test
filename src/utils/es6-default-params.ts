const createUserIdByOptionalParams = (name: string, id: number, age?: number) => {
  console.info('age', age)
  return name + id
}

const createUserIdByDefaultParams = (name = 'Bill Gate', id: number, age?: number) => {
  console.info('age', age)
  return name + id
}

const user1 = createUserIdByOptionalParams('Bill Gate', 2012, 10)
console.info('user 1', user1)

//
const user2 = createUserIdByDefaultParams('', 2013)
console.info('user 2', user2)
