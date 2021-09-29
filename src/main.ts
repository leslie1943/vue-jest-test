import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueBus from 'vue-bus'
import vuetify from './plugins/vuetify'
import * as ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Log from './global/log'
import { initialize } from '@/idb'
initialize()
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueBus)
Vue.use(Log)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
