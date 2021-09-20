export type UserType = {
  name: string
  corpId: string
  employeeId: number
}

export function getUsers(): Promise<UserType[]> {
  const userList: UserType[] = []
  const chars = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]
  for (let i = 0; i < 70000; i++) {
    userList.push({
      corpId: 'A' + Math.floor(Math.random() * 7000),
      name:
        chars[Math.floor(Math.random() * 27)] +
        '' +
        chars[Math.floor(Math.random() * 27)] +
        '' +
        chars[Math.floor(Math.random() * 27)] +
        '' +
        chars[Math.floor(Math.random() * 27)] +
        '' +
        chars[Math.floor(Math.random() * 27)] +
        '' +
        chars[Math.floor(Math.random() * 27)] +
        '' +
        chars[Math.floor(Math.random() * 27)] +
        '' +
        chars[Math.floor(Math.random() * 27)] +
        '' +
        chars[Math.floor(Math.random() * 27)] +
        '' +
        chars[Math.floor(Math.random() * 27)] +
        ',' +
        chars[Math.floor(Math.random() * 27)] +
        '' +
        chars[Math.floor(Math.random() * 27)] +
        '' +
        chars[Math.floor(Math.random() * 27)] +
        '' +
        chars[Math.floor(Math.random() * 27)] +
        '' +
        chars[Math.floor(Math.random() * 27)] +
        '' +
        chars[Math.floor(Math.random() * 27)] +
        '' +
        chars[Math.floor(Math.random() * 27)] +
        '' +
        chars[Math.floor(Math.random() * 27)] +
        '' +
        chars[Math.floor(Math.random() * 27)] +
        '' +
        chars[Math.floor(Math.random() * 27)],
      employeeId: Math.floor(Math.random() * 7000),
    })
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userList)
    }, 2000)
  })
}
