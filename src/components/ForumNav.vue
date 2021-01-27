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
    <v-row v-if="$vuetify.breakpoint.width < 768" align="right" justify="space-around">
    <v-menu
    transition="slide-y-transition"
    bottom>
    <template v-slot:activator="{ on, attrs }">
     <v-btn
     v-bind="attrs"
      v-on="on"
      icon
     >
    <v-app-bar-nav-icon style="margin-right: -40px; margin-bottom:10px"></v-app-bar-nav-icon>
     </v-btn>
    </template>
      <v-list>
          <v-list-item
            v-for="(item, index) in items"
          :key="index"
          link :to="item.href"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
     <v-btn class="ma"
      color="error" @click="logOut()">
       <b> Log out</b>
      </v-btn>

    </v-row>
    <v-row v-else align="right" justify="space-around">
      <v-btn text to="/dashboard/overview" class="font-weight-child">
        Dashboard
      </v-btn>
      <v-btn text href="/forum" class="font-weight-child">   
        Forum
      </v-btn>
      <v-btn text href="/collabhome"  class="font-weight-child">   
        Meetup
      </v-btn>
       <v-btn text href="/freepost" class="font-weight-child">   
        FreeTalk (New)
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
  data() {
    return{
      items: [
        { title: 'Dashboard', href:"/dashboard/overview"},
        { title: 'Forum', href:"/forum"},
        { title: 'Meetup', href:"/collabhome" },
        { title: 'FreeTalk (New)', href:"/freepost"},

      ],
    }},
  
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
