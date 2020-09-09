<template>
  <v-container class="logincard">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignin">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"     
                      v-model="email"
                      type="email"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit">Sign in</v-btn>
                    <v-btn color="red" @click="socialLogin()" type="submit">Sign in with Google</v-btn>
                    <v-btn href="/#/signup" color="success" dark>Sign up</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import * as firebase from 'firebase'
  export default {
    data () {
      return {
        name: '',
        email: '',
        password: ''  
      }
    },
    computed: {
      user () {
        return this.$store.getters.user  
      }
    },
    watch: {     
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/dashboard')
        }
      }
    },
    methods: {
      onSignin () {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      },
      socialLogin(){
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then((result) => {
          this.$router.replace('./dashboard');
          console.log(result);   
        }).catch((err) => {
          alert('Oops. ' +  err.message)
        });
      }
      
      

    }
  };
</script>

<style scoped>
.logincard{
    padding-top: 240px;
    width: 1100px;
    max-height: 1000px;
    text-align: justify;
}
</style>