export type MockItem = {
  data: string
}

export default {
  get: (): Promise<MockItem> => Promise.resolve({ data: 'Return From Promise' }),
}
