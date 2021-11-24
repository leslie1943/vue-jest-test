export const printDateInfo = () => {
  const d = new Date()
  const localTime = d.getTime()
  console.info('localTime', localTime)
  const offset = d.getTimezoneOffset()
  console.info('offset', offset)
  const offsetMillisecs = offset * 60 * 1000
  console.info('offsetMillisecs', offsetMillisecs)

  const gmtTime = localTime + offsetMillisecs
  console.info('gmtTime', gmtTime)

  console.info('gmt time:', new Date(gmtTime))
}
