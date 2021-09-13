interface ItemResult {
  index: number
  id: number
  isGood: boolean
}

function makeItem({ counter }: { counter: number }): Promise<ItemResult> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ index: counter, id: Math.random(), isGood: true })
      } else {
        reject({ index: counter, id: Math.random(), isGood: false })
      }
    }, 1000)
  })
}

export const simulateSettled = async () => {
  // Need result in each async call => allSettled
  const res = await Promise.allSettled([makeItem({ counter: 100 }), makeItem({ counter: 200 })])
  console.log('🚀 ~ file: allSettled.ts ~ line 21 ~ simulateSettled ~ res', res)
  /**
   * [
   *    {
   *        reason:{id: 0.31266898661538356,index: 100, isGood: false},
            status: "rejected"
   *    },
        {
   *        value:{id: 0.532172924038818, index: 200, isGood: true},
            status: "fulfilled"
   *    }
   * ]
   */
  return res
}
