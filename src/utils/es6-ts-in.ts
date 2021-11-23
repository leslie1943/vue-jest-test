interface Admin {
  name: string
  privileges: string[]
}

interface Employee {
  name: string
  startDate: Date
}

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee) {
  console.info(`Name: ${emp.name}`)
  if ('privileges' in emp) {
    console.info(`privileges: ${emp.privileges}`)
  }
  if ('startDate' in emp) {
    console.info(`startDate: ${emp.startDate}`)
  }
}

printEmployeeInformation({ name: 'leslie', privileges: ['read', 'create', 'update', 'delete'] })

export {}
