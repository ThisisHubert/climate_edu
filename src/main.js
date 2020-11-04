import Vue from 'vue';
import router from './router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify';
import {store} from './store';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import VueFusionCharts from 'vue-fusioncharts';
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import { auth } from './firebase'
import Trend from 'vuetrend'

Vue.use(Trend)
// import VueKinesis from 'vue-kinesis'
// Vue.use(VueKinesis)
Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)

Vue.use(VueFusionCharts, FusionCharts);

// Resolve the dependencies
Charts(FusionCharts);
PowerCharts(FusionCharts);
Widgets(FusionCharts);
FusionTheme(FusionCharts);

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';
// import firebaseui from 'firebaseui'
// import * as firebase from 'firebase/app';
import 'bootstrap';

import './assets/app.scss';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.use(Vuetify);

Vue.component('Navbar', require('./components/Navbar.vue').default)
Vue.component('ForumNav', require('./components/ForumNav.vue').default)



Vue.config.productionTip = false;

let app
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      vuetify,
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
  if (user) {
    store.dispatch('fetchUserProfile', user)
  }

  



})
  // created() {
  //   firebase.initializeApp(
  //     {
  //       apiKey: "AIzaSyBr1fR936Jb0RfY0vy4G8eAyX3pYKFPspU",
  //       authDomain: "climate-edu.firebaseapp.com",
  //       databaseURL: "https://climate-edu.firebaseio.com",
  //       projectId: "climate-edu",
  //       storageBucket: "climate-edu.appspot.com",
  //       messagingSenderId: '',
  //       appId: '',
  //     }
  //   ),
    
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.$router.push('/dashboard/overview');
        
  //       // user.sendEmailVerification().then(function() {
  //       //   console.log('send Verification');
  //       //   document.getElementById("verifMessage").innerHTML = "Check your inbox for verification email!";
      
  //     }
  //     else {
  //       this.$router.push('/home')

  //     }
      

  //   }

  // );
    
  // }


