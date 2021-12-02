const name = 'aaaa-,vvv'
const replacedName = name.replace(/[^\w-\s]/gi, ' ')
console.info('After:', replacedName)
export {}
