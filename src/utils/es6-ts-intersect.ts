interface IWork {
  companyId: number
}

interface IEmployee {
  id: number
  name: string
}

type IStaff = IWork & IEmployee

const staff: IStaff = {
  id: 12,
  name: 'leslie',
  companyId: 2212,
}
console.log('🚀 ~ file: es6-ts-intersect.ts ~ line 17 ~ staff', staff)

export {}
