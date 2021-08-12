const pause = (ms: number): Promise<any> =>
  new Promise((resolve) => setTimeout(resolve, ms))

export { pause }
