import Vue from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import firebaseui from 'firebaseui'
import * as firebase from 'firebase'

import {
  firebaseConfig
} from './firebase'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false
  
new Vue({
  vuetify,
  router,   
  created() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.$router.push('/dashboard')
        } else {
          this.$router.push('/login')

        }
      }

    );
  },
  el: '#app',
  render: h => h(App)
});