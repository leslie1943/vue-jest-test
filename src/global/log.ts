/* eslint-disable  */
const log = {
  install: (Vue: any) => {
    Vue.prototype.$log = console.log
    Vue.prototype.$info = console.info
  },
}

export default log
