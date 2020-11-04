<template>
  <v-app-bar app color="white" height="100">
    <v-avatar class="mr-3" color="grey lighten-5" size="70">
      <v-img contain max-height="100%" src="../assets/logo (1).png"></v-img>
    </v-avatar>
    <v-toolbar-title class="font-weight-black headline">
      CLIMATE Forum
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-row align="right" justify="space-around">
      <v-btn text to="/dashboard/overview">
        Dashboard
      </v-btn>
      <v-btn text to="/forum">   
        Forum
      </v-btn>
      <v-btn text>   
        Collaborate
      </v-btn>
       <v-btn text>
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

<style></style>
