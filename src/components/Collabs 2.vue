<template>
  <v-container>
    <v-responsive
      class="mx-auto mb-12"
            min-width="400"
          >
    <ForumNav></ForumNav>
    
    <v-text-field rounded filled type="text" v-model="search" placeholder="search meetups"></v-text-field>
    <v-layout row wrap v-for="meetup in filteredMeetUps" :key="meetup.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5 class="white--text mb-0">{{ meetup.title }}</h5>
                    <div>{{ meetup.date | date }}</div>
                  </div>
                </v-card-title>
                <v-card-actions class="view-button">
                  <v-btn  flat :to="'/collabs/' + meetup.id">
                  <i class="fas fa-eye"></i>
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
               <v-flex xs5 sm4 md3>
                <v-img
                class="meetuppic hidden-sm-and-down"
                  :src="meetup.imageUrl"
                  height="130px"
                ></v-img>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    </v-responsive>
  </v-container>
</template>

<script>
  export default {
    data(){
      return{
        search:""
      }
    },
    created() {
    document.title = "Meetups"; // to set title
  },
    computed: {
      meetups () {
        return this.$store.getters.loadedMeetups
      },
      filteredMeetUps: function(){
        return this.meetups.filter((meetups) =>{
            return meetups.title.match(this.search);
            
        })
      }
    }
  }
</script>

<style scoped>

.meetuppic{
  padding-left: 60px;
  width: 180px;
  border-radius: 5%;
}

.view-button{
  padding-left: 20px;
}

</style>