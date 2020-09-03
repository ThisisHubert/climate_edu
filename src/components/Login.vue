<template>
  <div class="sign-in">
    <section id='firebaseui-auth-container'></section>
  </div>
</template>

<script>
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
// import {firebaseConfig} from '../firebase';
export default {
  name: 'auth',
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
      if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
      }    
    var uiConfig = {    
      signInSuccessUrl: '/#/dashboard',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      };    
    ui.start('#firebaseui-auth-container', uiConfig);
    },
}
</script>




<style scoped>

.sign-in{
  text-align: center;
}


</style>

