import * as firebase from 'firebase/app'



const firebaseConfig = {
    apiKey: "AIzaSyDv8I4nGtBckADC-QmhTrFyzJjlrkIE2nk",
    authDomain: "climate-edu.firebaseapp.com",
    databaseURL: "https://climate-edu.firebaseio.com",
    projectId: "climate-edu",
    storageBucket: "climate-edu.appspot.com",
    messagingSenderId: "897609061549",
    appId: "1:897609061549:web:d843afeb53a455ad9e2224",
    measurementId: "G-6S34BB4SLD"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();