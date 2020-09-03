<template>
  <section>
    <div id='firebaseui-auth-container'></div>
  </section>
</template>

<script>
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui'
// import {firebaseConfig} from '../firebase';
export default {
  name: 'auth',
  mounted() {
    var uiConfig = {    
      signInSuccessUrl: '/#/dashboard',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
    },
}
</script>

<style lang="css">
</style>