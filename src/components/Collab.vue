<template>
  <v-container>
    <ForumNav></ForumNav>
     <v-layout row wrap v-if="loading">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h6 class="primary--text">{{ meetup.title }}</h6>
            <template v-if="userIsCreator">
              <v-spacer></v-spacer>
            <app-edit-meetup-details-dialog :meetup="meetup"></app-edit-meetup-details-dialog>
            </template>
          </v-card-title>
          <v-img
            :src="meetup.imageUrl"
            height="400px"
          ></v-img>      
          <v-card-text>
            <v-chip class="chippast" color="red" v-if="meetup.date < currentDate">
                  Past Event
            </v-chip>
            <div>Created By {{meetup.userName}}</div>
            <div>Email: {{meetup.email}}</div>
            <div class="info--text">{{ meetup.date | date }} - {{ meetup.location }}</div>

            <div>Description: {{ meetup.description }}</div>

          </v-card-text>
         
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn to="/collabs" class="black" color="red">Back</v-btn>

            <v-btn class="green">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as firebase from '@/firebase'  
import ForumNav from './ForumNav.vue'
  export default {
    data(){
      return{
      currentDate: new Date().toISOString()
      }
    },
  components: { ForumNav },
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      userIsCreator () {
        if (!this.userIsAuthenticated) {
          return false
        }
        return firebase.auth.currentUser.uid === this.meetup.creatorId
      },
    
       
    }
  }
</script>


<style scoped>
.black{
  color:white;
  text-decoration: none;
}

.green{
  color:white;
}

.chippast{
  color: white;
}


</style>