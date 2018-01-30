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
// import AlertCmp from './components/Shared/Alert.vue' ??
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'
import EditMeetupDateDialog from './components/Meetup/Edit/EditMeetupDateDialog.vue'
import EditMeetupTimeDialog from './components/Meetup/Edit/EditMeetupTimeDialog.vue'
import RegisterDialog from './components/Meetup/Registration/RegisterDialog.vue'

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
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)
Vue.component('app-register-meetup-dialog', RegisterDialog)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp(secret)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
