import Vue from 'vue';
import router from './router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify';
import {store} from './store';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';
// import firebaseui from 'firebaseui'
import * as firebase from 'firebase';
import 'bootstrap';

import './assets/app.scss';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.use(Vuetify);

Vue.component('Navbar', require('./components/Navbar.vue').default)
Vue.component('card', require('./components/Card.vue').default)
Vue.component('stats-card', require('./components/StatsCard.vue').default)
Vue.component('base-header', require('./components/BaseHeader.vue').default)
Vue.component('dashboard-navbar', require('./layout/DashboardNavbar.vue').default)
Vue.component('social-traffic-table', require('./components/Dashboard/SocialTrafficTable.vue').default)
Vue.component('base-table', require('./components/BaseTable.vue').default)




Vue.config.productionTip = false;
  
new Vue({
  el: '#app',
  vuetify,
  router,   
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyDv8I4nGtBckADC-QmhTrFyzJjlrkIE2nk",
        authDomain: "climate-edu.firebaseapp.com",
        databaseURL: "https://climate-edu.firebaseio.com",
        projectId: "climate-edu",
        storageBucket: "climate-edu.appspot.com",
      }
    ),
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/dashboard');
        
        // user.sendEmailVerification().then(function() {
        //   console.log('send Verification');
        //   document.getElementById("verifMessage").innerHTML = "Check your inbox for verification email!";
      
      } else {
        this.$router.push('/home')

      }
    }

  );
    
  }
});