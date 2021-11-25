const push = (array: Array<number> | Array<any>, ...items: number[]) => {
  items.forEach((item) => {
    array.push(item)
  })
}

const nums: any[] = []
push(nums, 1, 2, 3)
