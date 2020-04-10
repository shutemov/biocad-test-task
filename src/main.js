import Vue from 'vue'
import App from './App.vue'


import vuex from 'vuex'
import store from './store'

Vue.use(vuex)


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store
}).$mount('#app')
