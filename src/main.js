import Vue from 'vue';
import router from './router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify';
import {store} from './store';
import FusionCharts from 'fusioncharts';
// import Charts from 'fusioncharts/fusioncharts.charts';
// import Widgets from 'fusioncharts/fusioncharts.widgets';
// import PowerCharts from 'fusioncharts/fusioncharts.powercharts';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import VueFusionCharts from 'vue-fusioncharts';
import { auth } from './firebase'
import Trend from 'vuetrend'
import DateFilter from '@/filter/date'
import { Tweet, Moment, Timeline } from 'vue-tweet-embed'
import CommentGrid from 'vue-comment-grid'

Vue.use(CommentGrid)
Vue.filter('date', DateFilter)
Vue.use(Trend)
Vue.component('Tweet', Tweet)
Vue.component('Moment', Moment)
Vue.component('Timeline', Timeline)


Vue.use(VueFusionCharts, FusionCharts);

// Resolve the dependencies
// Charts(FusionCharts);
// PowerCharts(FusionCharts);
// Widgets(FusionCharts);
// FusionTheme(FusionCharts);

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
Vue.component('app-edit-meetup-details-dialog', require('./components/EditMeetupDetailsDialog.vue').default)
Vue.component('Signupbar', require('./components/SignUpNav.vue').default)
Vue.component('Footer', require('./components/Footer.vue').default)
Vue.component('app-meetup-register-dialog', require('./components/RegisterDialog.vue').default)



Vue.config.productionTip = false;

let app
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      vuetify,
      router,
      store,
      render: h => h(App),
      created (){
        this.$store.dispatch('loadMeetups')
        if (user) {
          store.dispatch('fetchUserProfile', user)
        }
      }
    }).$mount('#app')
  }
 

  



})
  