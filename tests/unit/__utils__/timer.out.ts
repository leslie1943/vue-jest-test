export const timeout = (sec: number, callback: any) => {
  setTimeout(() => {
    callback()
  }, sec)
}
