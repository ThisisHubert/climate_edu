<template>

  <v-app-bar app elevate-on-scroll color="white" height="80">
    <v-avatar class="mr-3" color="grey lighten-5" size="70">
      <v-img contain max-height="100%" src="../assets/logo (1).png"></v-img>
    </v-avatar>
    <v-toolbar-title class="font-weight-black">
      ClimateTalk
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-row align="right" justify="space-around">
      <v-btn text to="/dashboard/overview">
        Dashboard
      </v-btn>
      <v-btn text to="/forum">   
        Forum
      </v-btn>
      <v-btn text to="/collabhome">   
        Meetups
      </v-btn>
       <v-btn text to="/donation">
        Donation
      </v-btn>
       
      <v-btn class="ma-2"
      outlined
      color="green" @click="logOut()">
        Log out
      </v-btn>
    </v-row>
  </v-app-bar>
</template>

<script>
import firebase from "firebase";
export default {
  name: "ForumNav",
  components: {},
  created() {
    this.user = firebase.auth().currentUser;
    if (this.user != null) {
      this.name = this.user.name;
      this.email = this.user.email;
      this.photo = this.user.photoURL;
    }
  },
  methods: {
     logOut(){
            this.$store.dispatch('logout')           
    },
  },
};
</script>

<style scoped lang="css">
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

.font-weight-black{
  font-family: Comfortaa, cursive;
  color:#28cd3d;
  padding-top: 18px;
  font-size: 1.8em;
}


* {
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  transition: 0.15s;

  &:focus {
    outline: none;
  }
}


</style>
