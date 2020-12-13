<template>
  <v-container>
    <title>Create Meetup</title>
    <ForumNav></ForumNav>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4>Create a new Meetup</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                filled
                rounded
                dense
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
          <div style="color:red" v-show="error">{{error}}</div>
            </v-flex>
          </v-layout>
          <!-- Map start from here -->
          <!-- <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="gmap"
                label="Check with Google Map"
                v-model="address"
                id="autocomplete"
                filled
                rounded
                dense
                required
              ></v-text-field>
            </v-flex>
          </v-layout> -->
          
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
             <vue-google-autocomplete
             filled
             rounded
             dense 
              id="autocomplete"
              ref="toAddress"
               name="gmap"
               v-model="address"
              classname="form-control"
              placeholder="Check with Google Map">
            </vue-google-autocomplete>
            </v-flex>
          </v-layout>


          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn rounded color="primary" dark outlined>
                Go
              </v-btn>

              <v-btn @click="locatorButtonPressed"  :loading="loading"
                :disabled="loading" class="ma-2" outlined small fab color="indigo">
                <v-icon>mdi-crosshairs-gps</v-icon>
              </v-btn>

              <div style="color: red">*Fill in the Full address in the text box below*</div>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                class="location"
                name="location"
                id="location"
                filled
                rounded
                dense
                label="Fill in your complete address"
                v-model="location"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <h5>Upload Image</h5>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <!-- <v-text-field
                name="imageUrl"
                label="Image URL"
                id="image-url"
                v-model="imageUrl"
                required></v-text-field> -->
              <v-btn raised class="primary" fab x-large dark @click="onPickFile"
                ><i class="fas fa-images fa-2x"></i
              ></v-btn>
              <input
                type="file"
                style="display: none"
                ref="fileInput"
                accept="image/*"
                @change="onFilePicked"
              />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="150" />
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-textarea
                name="description"
                label="Description"
                id="description"
                multi-line
                filled
                rounded
                v-model="description"
                required
              ></v-textarea>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <h4>Choose a Data & Time</h4>
            </v-flex>
          </v-layout>
          <v-layout row class="mb-2">
            <v-flex xs12 sm6 offset-sm3>
              <v-date-picker v-model="picker"></v-date-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-time-picker v-model="time" format="24hr"></v-time-picker>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn class="primary" :disabled="!formIsValid" type="submit"
                >Create Meetup</v-btn
              >
              {{ submittableDateTime }}
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import * as google from 'google'
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import axios from 'axios'
export default {
  components: { VueGoogleAutocomplete },
  data() {
    return {
      loading: false,
      title: "",
      error: "",
      location: "",
      address: "",
      imageUrl: "",
      description: "",
      image: null,
      date: new Date(),
      time: new Date(),
      picker: new Date().toISOString().substr(0, 10),
      searchResults: [],
      service: null,
    };
  },
  created() {
    document.title = "Create Meetup"; // to set title
  },

  computed: {
    formIsValid() {
      return (
        this.title !== "" && this.imageUrl !== "" && this.description !== ""
      );
    },
    submittableDateTime() {
      const date = new Date(this.picker);
      if (typeof this.time === "string") {
        let hours = this.time.match(/^(\d+)/)[1];
        const minutes = this.time.match(/:(\d+)/)[1];
        date.setHours(hours);
        date.setMinutes(minutes);
      } else {
        date.setHours(this.time.getHours());
        date.setMinutes(this.time.getMinutes());
      }
      return date;
    },
  },
  mounted(){ // this doesn't work lets change to vue google autocomplete 
    // new google.maps.places.Autocomplete(
    //   document.getElementById("autocomplete")
    // )
  },

  methods: {
    locatorButtonPressed(){
      this.loading = !this.loading // start loading 

      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
          this.getAddressFrom(position.coords.latitude, position.coords.longitude)
        },
        error => {
          this.error = error.message;
        }
        );
      }else{
        this.error = "Your browser does not support geolocation";
      }
      setTimeout(() => (this.loading = false), 3000); // end of loading

    },
    getAddressFrom(lat,long){
      axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyAs2-Y8hzL2FEb8VQ79o2cEw2cYXAc2IxY").then(response =>{
        if (response.data.error_message){
          this.error = response.data.error_message
          console.log(response.data.error_message);
        }else{
          this.address = response.data.results[0].formatted_address;
        }
      }).catch(error => {
        this.error = error.message; 
      })
    },
    onCreateMeetup() {
      if (!this.formIsValid) {
        return;
      }
      if (!this.image) {
        return;
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        image: this.image,
        description: this.description,
        date: this.submittableDateTime,
      };
      this.$store.dispatch("createMeetup", meetupData);
      this.$router.push("/collabs");
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a valid file!");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
  },
};
</script>
