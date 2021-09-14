export interface ItemResult {
  index: number
  id: number
  isGood: boolean
}

export type SettledItem = {
  value?: ItemResult
  reason?: ItemResult
  status: 'fulfilled' | 'rejected'
}

function makeItemResolve({ counter }: { counter: number }): Promise<ItemResult> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ index: counter, id: Math.random(), isGood: true })
    }, 1000)
  })
}
function makeItemReject({ counter }: { counter: number }): Promise<ItemResult> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ index: counter, id: Math.random(), isGood: true })
    }, 1000)
  })
}

export const simulateSettled = async () => {
  // Need result in each async call => allSettled
  const result = await Promise.allSettled([
    makeItemResolve({ counter: 100 }),
    makeItemReject({ counter: 200 }),
  ])
  console.log('🚀 ~ file: allSettled.ts ~ line 21 ~ simulateSettled ~ res', result)
  /**
   * [
   *    {
   *        reason: { id: 0.31266898661538356,index: 100, isGood: false},
            status: "rejected"
   *    },
        {
   *        value: { id: 0.532172924038818, index: 200, isGood: true},
            status: "fulfilled"
   *    }
   * ]
   */
  return result
}

export const simulateAll = async () => {
  const result = await Promise.all([
    makeItemResolve({ counter: 100 }),
    makeItemResolve({ counter: 200 }),
  ])
  console.log('🚀 ~ file: allSettled.ts ~ line 21 ~ simulateAll ~ res', result)
  /**
   *[
        0: {index: 100, id: 0.4533822541908561, isGood: true}
        1: {index: 200, id: 0.11062889675268872, isGood: true}
    ]
   */
  return result
}
