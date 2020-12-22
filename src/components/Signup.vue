<template>
  <v-container class="signup-card">
    <Signupbar></Signupbar>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card elevation="4">
          <v-card-title style="color: #28cd3d; font-size:30px">
            Sign up Here!
          </v-card-title>
          <v-card-text>
            <v-container>

              <form @submit.prevent>  
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      color="#28cd3d"
                      rounded
                      filled
                      name="name" 
                      v-model.trim="name"
                      label="Name"
                      id="name"
                      v-model="name"
                      type="name"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                    color="#28cd3d"
                      rounded
                      filled
                      name="email" 
                      v-model.trim="email"
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
                    color="#28cd3d"
                      rounded
                      filled
                      name="password"
                      v-model.trim="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                    color="#28cd3d"
                      rounded
                      filled
                      name="confirmPassword"
                      v-model.trim="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                      :rules="[comparePasswords]"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn color="#28cd3d" style="color:white" @click="signup()" type="submit">Sign up</v-btn>
                    <v-btn class="BackHome" color="#28cd3d" style="color:white" href="/home" type="submit"><i class="fas fa-chevron-left"></i>Home</v-btn>
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
  export default {
    data () {
      return {
        name: '',
        email: '',
        password: '',  
        confirmPassword: ''
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
      },
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/dashboard/overview')
        }
      }
    },
    methods: {
      signup () {
        this.$store.dispatch('signup', {name: this.name, email: this.email, password: this.password})
      },
      
    }
  }
</script>



<style scoped>
.signup-card{
    text-align: justify;
    padding-top: 140px;
    width: 1100px;
    font-family: 'Nunito', sans-serif;


}

.BackHome{
  margin-left: 320px;
}

.headline{
  color:  #28cd3d;

}
</style>