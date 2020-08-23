<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<!--<script src="https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js"></script> -->

<!-- TODO: Add SDKs for Firebase products that you want to use
      https://firebase.google.com/docs/web/setup#available-libraries -->
<!--<script src="https://www.gstatic.com/firebasejs/7.19.0/firebase-analytics.js"></script> -->

// <script>
//   var firebaseConfig = {
//     apiKey: "AIzaSyDv8I4nGtBckADC-QmhTrFyzJjlrkIE2nk",
//     authDomain: "climate-edu.firebaseapp.com",
//     databaseURL: "https://climate-edu.firebaseio.com",
//     projectId: "climate-edu",
//     storageBucket: "climate-edu.appspot.com",
//     messagingSenderId: "897609061549",
//     appId: "1:897609061549:web:d843afeb53a455ad9e2224",
//     measurementId: "G-6S34BB4SLD"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>



<script>
import Firebase from 'firebase'

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
