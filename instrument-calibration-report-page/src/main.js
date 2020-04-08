import Vue from 'vue'
import App from './App.vue'

import bulmaTooltip from 'bulma-tooltip'

import vuex from 'vuex'
import store from './store'

Vue.use(bulmaTooltip)
Vue.use(vuex)


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store
}).$mount('#app')
