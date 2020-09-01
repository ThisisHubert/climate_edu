import Vue from 'vue'
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import firebaseui from 'firebaseui'
import firebase from 'firebase'

import {
  config
} from './router/index'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  create() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.$router.push('/dashboard')
        } else {
          this.$router.push('/login')

        }
      }

    );
  },
  render: h => h(App)
}).$mount('#app')