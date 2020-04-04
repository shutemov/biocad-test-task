import Vue from 'vue'
import App from './App.vue'
import bulma from 'bulma'
import bulmaCheckradio from 'bulma-checkradio'
import vuex from 'vuex'
import 'bulma/css/bulma.css'

Vue.use(bulma)
Vue.use(bulmaCheckradio)
Vue.use(vuex)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
