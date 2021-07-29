const belongs = [
  {
    id: '1000',
    type: 'Country',
    title: 'China',
  },
  {
    id: '1001',
    type: 'Province',
    title: 'Liao Ning',
  },
  {
    id: '10010',
    type: 'City',
    title: 'Dalian',
  },
  {
    id: '1001010',
    type: 'Area',
    title: 'QiXianNanLu 85#',
  },
]

const resTotal = belongs.reduce((acc, cur, index) => {
  return acc + cur.title + (index !== belongs.length - 1 ? '>' : '')
}, '')

console.info('restotl', resTotal)
