<template>

  <v-app-bar app elevate-on-scroll color="white" height="80">
    <router-link to="/dashboard/overview">
    <v-avatar class="mr-3" color="grey lighten-5" size="70">
      <v-img contain max-height="100%" src="../assets/logo (1).png"></v-img>
    </v-avatar>
    </router-link>
    <v-toolbar-title class="font-weight-black">
      ClimateTalk
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-row align="right" justify="space-around">
      <v-btn text to="/dashboard/overview" class="font-weight-child">
        Dashboard
      </v-btn>
      <v-btn text href="/forum" class="font-weight-child">   
        Forum
      </v-btn>
      <v-btn text href="/collabhome"  class="font-weight-child">   
        Meetup
      </v-btn>
       <v-btn text href="/donation"  class="font-weight-child">
        Donation
      </v-btn>
       
      <v-btn class="ma-2"
      depressed
      color="error" @click="logOut()">
       <b> Log out</b>
      </v-btn>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "ForumNav",
  components: {},
  
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


.font-weight-child{
  font-family: Comfortaa, cursive;
  color:#28cd3d;
  font-weight: bold;
  margin-top: 9px;
  text-decoration: none;


}



/* * {
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  transition: 0.15s;

  &:focus {
    outline: none;
  }
} */


</style>
