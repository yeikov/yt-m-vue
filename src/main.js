import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import * as firebase from 'firebase'

import App from './App'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import { secret } from '../ignoreFileSession'
import AlertComp from './components/Shared/Alert'

/* ignoreFileSession.js inscrito en gitignore. contiene:
export const secret = {apiKey: '****',
  authDomain: '****',
  databaseURL: '****',
  projectId: '****',
  storageBucket: '****'}
*/

console.log(secret)
// Vue.use(Vuetify)
Vue.use(Vuetify, {
  theme: {
    /*
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
    */
  }
})
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertComp)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp(secret)
  }
})
