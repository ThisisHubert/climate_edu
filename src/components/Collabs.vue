<template>
  <v-container>
    <v-responsive
      class="mx-auto mb-12"
            min-width="400"
          >
    <ForumNav></ForumNav>
    
    <v-text-field rounded filled type="text" v-model="search" placeholder="Search Meetups..."></v-text-field>
    <v-layout row wrap v-for="meetup in filteredMeetUps" :key="meetup.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="cards" elevation="0" outlined>
          <v-container>
            <v-layout row>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5>{{ meetup.title }}</h5>
                    <div>{{ meetup.date | date }}</div>
                  </div>
                </v-card-title>
                <v-chip class="chippast" color="red" v-if="meetup.date < currentDate">
                  Past Event
                </v-chip>
                <v-card-actions class="view-button">
                  <v-btn class="white--text" color="#28cd3d" rounded flat :to="'/collabs/' + meetup.id">
                  <i class="fas fa-eye"></i>
                    <b>View Meetup</b>
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
        search:"",
        currentDate: new Date().toISOString(),
      }
    },
    created() {
    document.title = "Meetups"; // to set title
  },
    computed: {
      
      meetups () {
        let get = this.$store.getters.loadedMeetups
        return get
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
@import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');

*{
  font-family: 'Nunito', sans-serif;

}

.chippast{
  color: white;
  margin-left: 20px;
}

.cards{
  margin-top: 20px;
}

.meetuppic{
  margin-top: 8px;
  padding-left: 60px;
  width: 180px;
  border-radius: 5%;
}

.white--text{
  text-decoration: none;
}

.view-button{
  padding-left: 20px;
}

</style>