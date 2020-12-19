<template>
  <section>
   <Navbar></Navbar>
   <router-view/>

       <div class="hero">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  Fight <br>Climate Change, <br> Together
                </h1>
                
                <div class="hero-btn mt-5">
                    <v-dialog v-model="dialog" persistent max-width="600px">
                   <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        x-large
                        class="ma-2"
                        color="green"
                        outlined
                        v-bind="attrs"
                        v-on="on"
                      ><v-img
            contain
            height="1%" style="height:30px; width:30px;"
            src="../assets/logo (1).png"
          ></v-img>
                        Let's Talk!
                      </v-btn>
                  </template>
                    <!-- login -->

                        <v-card>
                          <v-card-title>
                            <span class="headline" style="color:green;">Login</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-row>

                                <form @submit.prevent>  
                                <div class="loginform"> 
                                  <v-layout row>
                                    <v-flex xs12>
                                      <v-text-field
                                        v-model.trim="email"
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
                                        v-model.trim="password"
                                        name="password"
                                        label="Password"
                                        id="password"
                                        v-model="password"
                                        type="password"
                                        required></v-text-field>
                                    </v-flex>
                                  </v-layout>
                                </div>
                                <small>*indicates required field</small>
                                  <v-layout row>
                                    <v-card-actions>
                                      <v-spacer></v-spacer>
                                      <v-btn @click="onSignin()" class="ma-2" color="green" dark type="submit">Sign in</v-btn>
                                      <v-btn class="ma-2" color="green" dark @click="socialLogin()" type="submit"><v-icon left>mdi-email</v-icon>Sign in with Google</v-btn>
                                    </v-card-actions>
                                  </v-layout>
                                </form>

                              </v-row>
                            </v-container>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn href="/signup" color="green darken-1" text dark>Sign up</v-btn>
                            <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
                          </v-card-actions>
                        </v-card>
                      <!-- login -->
                  </v-dialog>  
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <img src="../assets/hang_out.svg" style="width:600px; height:600px; padding-right:3px; margin-left:50px;" alt="">
                </div>
            </div>
          </div>
        </div>
    </div>
  
      

      <section
        id="whatwedo"
        style="background-image: linear-gradient(75deg, #d4f0c4 14%, #8de15d 75%);"
      >
        <div class="py-12"></div>
        <!-- <v-responsive
            class="mx-auto mb-12" 
            width="1500"
          > -->
        <v-container class="text-center">
          <h2 class="whatwedo display-2 font-weight-bold mb-3">What we do?</h2>

           <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            
          </v-responsive>
          
          <v-row class="wedotext">
            We provide a place for you to join the fight against climate <br>
            change with other people around the world through the power of <br>
            discussion, collaboration, and donation! 
          </v-row>
           
        </v-container>
        <!-- </v-responsive> -->


        <div class="py-12"></div>
      </section>


       <section
        id="features"
      >
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3" style="  color: #28cd3d; font-weight: bold;">Our Services</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({icon,title, text }, i) in features"
              :key="i"
              cols="12"
              md="4"
            >
              <v-card
                class="py-12 px-4"
                color="grey lighten-5"
  
                flat
              >
                <v-theme-provider dark>
                  <div>
                    <v-avatar
                      color="green"
                      size="88"
                    >
                      <v-icon
                        large
                        v-text="icon"
                      ></v-icon>
                    </v-avatar>
                  </div>
                </v-theme-provider>

                <v-card-title
                  class="justify-center font-weight-black text-uppercase"
                  v-text="title"
                ></v-card-title>

                <v-card-text
                  class="subtitle-1 servicetext"
                  style="font-color:green; font-size:15px"
                  v-text="text"
                >
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>




      <section id="about-me">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3" style="  color: #28cd3d;">About us</h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
           
          </v-responsive>

           <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img src="../assets/bigsan.png"></v-img>
          </v-avatar>

          <v-responsive
            class="mx-auto title font-weight-light mb-8"
            max-width="720"
          >
          <h3><b>Kittiphot Piriyathananukul</b></h3>
          <div style="  color: #28cd3d;">Manager</div>
          I wish to make the world a better place with everyone, for us and for future generations.
          </v-responsive>

         

          <div></div>


          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            
          </v-responsive>

           <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img src="../assets/hubert.png"></v-img>
          </v-avatar>

          <v-responsive
            class="mx-auto title font-weight-light mb-8"
            max-width="720"
          >
          <h3><b>Hubertus Setiawan</b></h3>
          <div style="  color: #28cd3d;">Engineer</div>
          A 3rd year INIAD Student Engineering Major, responsible for full stack development of the website
          Front-end, Back-end, Database, etc. Wishing the world to be a better place to live through the swift growth of deep technology.
          </v-responsive>

         

          <div></div>


          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
           
          </v-responsive>

           <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img src="../assets/vivivit.png"></v-img>
          </v-avatar>

          <v-responsive
            class="mx-auto title font-weight-light mb-8"
            max-width="720"
          >
          <h3><b>Ryosuke Hayashi</b></h3>
          <div style="  color: #28cd3d;">Designer</div>
          ここでの体験を通して、皆さんの気候変動に対する意識を高めてみてください。
          </v-responsive>

         

          <div></div>

          
           
        </v-container>

        <div class="py-12"></div>
      </section>

      <v-footer style="height: 150px" id="foot" padless>
      <v-row id="foot" justify="center" no-gutters>
        <v-btn
         text 
         rounded
         class="my-2"
        >
          <v-icon size="24px">
            mdi-facebook
          </v-icon>
        </v-btn>
         <v-btn
         text 
         rounded
         class="my-2"
        >
          <v-icon size="24px">
            mdi-twitter
          </v-icon>
        </v-btn>

        <v-col class="py-4 text-center black--text" cols="12">
          <strong style="font-size:20px" class="font-weight-black">
            ©{{ new Date().getFullYear() }} ClimateTalk</strong
          >
        </v-col>
      </v-row>
    </v-footer>

      
      

     
      
</section>

    
</template>



<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.globe.min.js"></script>

<script>
import * as firebase from 'firebase'
  export default {
    name: 'HelloWorld',
    icons: ["mdi-facebook", "mdi-twitter"],


    data () {
      
      return {
        // name: '',
        email: '',

        password: '',
       icons: ["mdi-facebook", "mdi-twitter"],

        
        
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
          this.$router.push('./dashboard/overview')
        }
      }
    },
    methods: {
      onSignin () {  // function for sign in
        this.$store.dispatch('onSignin', {email: this.email, password: this.password})
      },
      socialLogin(){     
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(
        firebase.auth().signInWithPopup(provider).then((result) => {
          this.$router.replace('./dashboard/overview');   
          console.log(result);   
        }).catch((err) => {
          alert('Oops. ' +  err.message)
        }));
      }
      
      

    },
   
    
    data: () => ({
      dialog : false,
      
      features: [
          {
            icon: 'fa-comment',
            title: 'Forum',
            text: 'Join in endless discussions and keep yourself up to date on any climate change topics of your choice!',
          },
          {
            icon: 'fa-lightbulb',
            title: 'Collaboration',
            text: 'Join events to fight climate change proactively! This is a good oppotunity to meet new people of similar interests and together help fight climate change!',

          },
          {
            icon: 'fa-dollar-sign',
            title: 'Donation',
            text: 'Join the fight by help funding various events, projects, organizations, etc. This is a good chance to spend your money to make projects to fight climate change possible!',
          },
        ],
      stats: [
          ['24k', 'Github Stars'],
          ['330+', 'Releases'],
          ['1m', 'Downloads/mo'],
          ['5m', 'Total Downloads'],
        ],
    }),
  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');

.loginform{
  padding-left: 20px;
}

/* .hero{
  background-color: #efefed;
} */

.whatwedo{
  width: 477px;
  height: 150px;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-family: Comfortaa;

  font-size: 100px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}

.wedotext{
  width: 1500px;
  height: 300px;
  font-family: YuGothic;
  font-size: 40px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}

h3, template, div, section{
  
  font-family: 'Nunito', sans-serif;

}
.font-weight-black{
    color: #28cd3d;

}

v-card-text.servicetext{
    color: #28cd3d;

}

.subtitle-1{
  color: #28cd3d;
}

span.font-weight-black{
  font-family: Comfortaa;
}

#foot {
  background-color: #e4e4dd;
}

.hero-title{
    color: #28cd3d;
    font-size: 60px;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;

}


</style>

