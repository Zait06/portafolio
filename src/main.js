import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import VueParticles from 'vue-particles'

import 'animate.css/animate.css'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueParticles)

new Vue({
  created () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
