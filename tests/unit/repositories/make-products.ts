interface Product {
  id: number
  name: string
  category: 'A' | 'B'
}
type CallBack = (item: Product) => void
type LogFn = () => void

export const processProducts = (products: Product[], callback: CallBack, log: LogFn) => {
  products.forEach((product) => {
    callback(product)
    log()
  })
}

export const products: Array<Product> = [
  { name: 'TV', id: 1, category: 'A' },
  { name: 'Mobile', id: 2, category: 'B' },
]
