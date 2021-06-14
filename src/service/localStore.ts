/**
 * 存储localStorage
 */

const localUtil = window.localStorage

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const setStore = (name: string, content: any): void => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  localUtil.setItem(name, content)
}

/**
 * 获取localStorage
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStore = (name: string) => {
  if (!name) return
  let value = localUtil.getItem(name)
  if (value !== null) {
    try {
      value = JSON.parse(value)
    } catch (e) {
      // eslint-disable-next-line no-self-assign
      value = value
    }
  }
  return value
}

/**
 * 清除localStorage
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const removeStore = (name: string) => {
  if (!name) return
  localUtil.removeItem(name)
}
