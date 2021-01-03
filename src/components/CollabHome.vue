<template>
<div>
  <v-container>
      <ForumNav></ForumNav>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn rounded color="#28cd3d" large router to="/collabs" class="collab1">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn rounded color="#28cd3d" large router to="/collab/new" class="collab2">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
     <v-layout>
      <v-flex xs12 class="text-center">
        <v-progress-circular
          indeterminate
          color="green"
          :size="50"
          v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2" v-if="!loading">
      <v-flex xs12>
        <v-carousel style="cursor: pointer; margin-bottom: 120px">
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            @click="onLoadMeetup(meetup.id)">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    
  </v-container>
  <Footer></Footer>
</div>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    data: () => ({
    icons: ["mdi-facebook", "mdi-twitter"],

    }),
   computed: {
     ...mapState(['userProfile']),
      meetups () {
        return this.$store.getters.featuredMeetups
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    created() {
    document.title = "Meetup"; // to set title
  },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/collabs/' + id);
      }
    }
  }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
  * {
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  transition: 0.15s;

  
}

.collab1{
  color: white;
  font-size: 20px;
  margin: 30px 121px 57.4px 0px;
  text-decoration:none;
}

.collab2{
  color: white;
  font-size: 20px;
  margin: 30px 0px 57.4px 121px;
  text-decoration:none;

}



.v-progress-circular {
  margin: 1rem;
}
</style>