type Employee = {
  CODE: string
  CORP_ID: string
  NAME: string
  ID?: string
}

type Studuent = {
  SCORE: number
  NAME: number
  CLASS: string
}

type MixPeople = Partial<Employee | Studuent>

/**
 * Partial<A|B>: A 和 B 中所有属性的合集都为可选
 */
const mixPeople: MixPeople = {
  CODE: 'A001',
  // CORP_ID: 'A099',
  NAME: 'Leslie',
  ID: 'I_002',
  CLASS: '02-02',
  // TEACH:'',
}
console.log('🚀 ~ file: advanced-compare.types.ts ~ line 20 ~ mixPeople', mixPeople)

type EmployeeStuduent = Employee | Studuent
// 满足 Studuent
const es1: EmployeeStuduent = {
  SCORE: 123,
  NAME: 222,
  CLASS: '0202',
}
console.log('🚀 ~ file: advanced-compare.types.ts ~ line 45 ~ es3', es1)

// 满足 Employee - 1: 不加可选属性
const es2: EmployeeStuduent = {
  CODE: 'C1',
  CORP_ID: 'CI_01',
  NAME: 'Leslie',
}
console.log('🚀 ~ file: advanced-compare.types.ts ~ line 45 ~ es3', es2)

// 满足 Employee - 2 加可选属性
const es3: EmployeeStuduent = {
  CODE: 'C1',
  CORP_ID: 'CI_01',
  NAME: 'Leslie',
  ID: '2002',
}
console.log('🚀 ~ file: advanced-compare.types.ts ~ line 45 ~ es3', es3)

// 满足全部并合并重复选项
const es4: EmployeeStuduent = {
  CODE: 'CDOE_1',
  CORP_ID: 'CORP_ID_1',
  NAME: 'NAME_1', // NAME也可以是 number
  ID: 'ID_1',
  SCORE: 100,
  CLASS: 'CLASS_1',
}
console.log('🚀 ~ file: advanced-compare.types.ts ~ line 45 ~ es3', es4)

type S1 = {
  name: string
  age: number
}

type S2 = S1 & {
  name?: string
  age?: number
}

const s2: S2 = {
  name: 'sss', //   Property 'name' is missing in type '{ age: number; }' but required in type 'S1'.ts(2322)
  age: 19,
}
console.log('🚀 ~ file: advanced-compare.types.ts ~ line 79 ~ s2', s2)

export {}
