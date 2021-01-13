<template>
  <v-dialog v-model="registerDialog">
    <template v-slot:activator="{on,attrs}">
    <v-btn style="color:white"   v-bind="attrs"
    v-on="on"
  color="#28cd3d" slot="activator">
      {{ userIsRegistered ? 'Unregister' : 'Register' }}
    </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12 sm7>
            <v-card-title v-if="userIsRegistered">Unregister from Meetup?</v-card-title>
            <v-card-title v-else>Register for Meetup?</v-card-title>
          </v-flex>
        </v-layout>
        <v-layout row wrap> 
          <v-flex xs12 sm7>
            <v-card-text>You can always change your decision later on.</v-card-text>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn
                color="#28cd3d"
                style="color:white"
                flat
                @click="registerDialog = false">Cancel</v-btn>
              <v-btn
              color="#28cd3d"
              style="color:white"
                flat
                @click="onAgree">Confirm</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        registerDialog: false
      }
    },
    computed: {

      
    },
    methods: {
      onAgree () {
        
        alert("You are registered");
        this.registerDialog = false; 
        // this.$store.dispatch("registeredPeople",{id, registeredCount});

      }
    }
  }
</script>