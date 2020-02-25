import Vue from 'vue' //importa la libreria que se descargo y es una depencdencia de npm
import App from './App.vue'
import '@/assets/css/tailwind.css'
import router from '@/router'
import { dollarFilter } from '@/filters'
import { percentFilter } from '@/filters'
import Chart from 'chart.js'
import Chartkick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'


Vue.use(VueSpinners)
Vue.use(Chartkick.use(Chart))

Vue.filter('percent', percentFilter)
Vue.filter('dollar', dollarFilter)


Vue.config.productionTip = false
    /**
     * instancia de vue sustitulle el : esto equivale al elemento incial
     *
     */
new Vue({
    router: router,
    render: h => h(App),
}).$mount('#app')