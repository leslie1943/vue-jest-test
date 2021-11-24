interface IWork {
  companyId: number
}

interface IEmployee {
  id: number
  name: string
}

type IStaff = IWork & IEmployee
type UStaff = IWork | IEmployee

const istaff: IStaff = {
  id: 12,
  name: 'leslie',
  companyId: 2212,
}
console.log('🚀 ~ file: es6-ts-intersect.ts ~ line 17 ~ staff', istaff)

const ustaff_1: UStaff = {
  companyId: 1234,
  //   name: 'leslie',
  //   id: 12,
}
const ustaff_2: UStaff = {
  companyId: 1234,
  //   name: 'leslie',
  id: 12,
}
const ustaff_3: UStaff = {
  //   companyId: 1234,
  name: 'leslie',
  id: 12,
}
// Union类型,必须<<<<至少>>>>满足一个类型
console.log('🚀 ~ file: es6-ts-intersect.ts ~ line 25 ~ ustaff', ustaff_1)
console.log('🚀 ~ file: es6-ts-intersect.ts ~ line 25 ~ ustaff', ustaff_2)
console.log('🚀 ~ file: es6-ts-intersect.ts ~ line 25 ~ ustaff', ustaff_3)

export {}
