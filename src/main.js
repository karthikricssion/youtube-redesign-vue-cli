import Vue from 'vue'
import VueRouter from 'vue-router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueMaterialIcon from 'vue-material-icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from './routers'
import App from './App.vue'

library.add(faUserSecret, faYoutube)

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.component(VueMaterialIcon.name, VueMaterialIcon)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
