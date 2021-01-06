<template>
  <v-dialog width="800px" persistent v-model="editDialog">
    <template v-slot:activator="{on,attrs}">
    <v-btn 
    v-bind="attrs"
    v-on="on"
  color="#28cd3d"
    fab accent slot="activator">
        <v-icon color="white">mdi-pencil</v-icon>
    </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Edit Meetup</v-card-title>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
              filled
              rounded
              color="#28cd3d"
                name="title"
                label="Title"
                id="title"
                v-model="editedTitle"
                required></v-text-field>
                 <v-text-field
              filled
              rounded
              color="#28cd3d"
                name="location"
                label="Location"
                id="location"
                v-model="editedLocation"
                required></v-text-field>
              <v-textarea
                filled
                rounded
              color="#28cd3d"
                name="description"
                label="Description"
                id="description"
                multi-line
                v-model="editedDescription"
                required></v-textarea>
            </v-card-text>
             <v-date-picker color="#28cd3d" width="400px" v-model="editableDate" style="width: 80%; margin-left:80px" actions> 
            </v-date-picker>  
            <v-time-picker color="#28cd3d" v-model="editableTime" style="width: 80%; margin-left:80px" actions format="24hr">
            </v-time-picker>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn
                text
                color="#28cd3d"
                @click="editDialog = false">Close</v-btn>
              <v-btn text flat color="#28cd3d"  @click="onSaveChanges">Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['meetup'],
    data () {
      return {
        editDialog: false,
        editedTitle: this.meetup.title,
        editedDescription: this.meetup.description,
        editedLocation: this.meetup.location,
        editableDate: null,
        editableTime: null,

      }
    },
    methods: {
      onSaveChanges () {
        if (this.editedTitle.trim() === '' || this.editedDescription.trim() === '') {
          return
        }
        // date
        const newDate = new Date(this.meetup.date)
        const newDay = new Date(this.editableDate).getUTCDate()
        const newMonth = new Date(this.editableDate).getUTCMonth()
        const newYear = new Date(this.editableDate).getUTCFullYear()
        const hours = this.editableTime.match(/^(\d+)/)[1]
        const minutes = this.editableTime.match(/:(\d+)/)[1]
        newDate.setHours(hours)
        newDate.setMinutes(minutes)
        newDate.setDate(newDay)
        newDate.setMonth(newMonth)
        newDate.setFullYear(newYear)
        // date
        this.editDialog = false
        this.$store.dispatch('updateMeetupData', {  // send to update MeetupData 
          id: this.meetup.id,  
          location: this.editedLocation,
          title: this.editedTitle,
          date: newDate,
          description: this.editedDescription
        })
      }
    },
    created(){ // create date
      let date = new Date(this.meetup.date)
      let day = date.getUTCDate()
      let month = date.getUTCMonth()
      let year = date.getUTCFullYear()
      let hours = date.getHours();
      let minutes = date.getMinutes();
      this.editableTime = hours+":"+minutes;
      this.editDate = year+"-"+month+"-"+day   
    }
  }
</script>