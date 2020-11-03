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
                  Fight Climate Change, Together.
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
                            <span class="headline">Login</span>
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
                    <img src="../assets/climate_home.jpg" style="width:600px; height:600px; padding-right:3px; margin-left:50px;" alt="">
                </div>
            </div>
          </div>
        </div>
    </div>

      

      <section
        id="features"
        class="grey lighten-3"
      >
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">What you can do?</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({ icon, title, text }, i) in features"
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
                      color="primary"
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
                  class="subtitle-1"
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
          <h2 class="display-2 font-weight-bold mb-3">ABOUT US</h2>

          <v-responsive
            class="mx-auto mb-8"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8"
            max-width="720"
          >
            Vuetify is the #1 component library for Vue.js and has been in active development since 2016. The goal of the project is to provide users with everything that is needed to build rich and engaging web applications using the Material Design specification. It accomplishes that with a consistent update cycle, Long-term Support (LTS) for previous versions, responsive community engagement, a vast ecosystem of resources and a dedication to quality components.
          </v-responsive>

          <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-avatar>

          <div></div>

          <v-btn   
            color="grey"
            href="https://vuetifyjs.com"
            outlined
            large
          >
            <span class="grey--text text--darken-1 font-weight-bold">
              Want to know more about us?
            </span>
          </v-btn>
        </v-container>

        <div class="py-12"></div>
      </section>

      <section id="stats">
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
          src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        >
          <v-container fill-height>
            <v-row class="mx-auto">
              <v-col
                v-for="[value, title] of stats"
                :key="title"
                cols="12"
                md="3"
              >
                <div class="text-center">
                  <div
                    class="display-3 font-weight-black mb-4"
                    v-text="value"
                  ></div>

                  <div
                    class="title font-weight-regular text-uppercase"
                    v-text="title"
                  ></div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>

      <section id="blog">
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Blog</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({ src, text, title }, i) in articles"
              :key="i"
              cols="12"
              md="4"
            >
              <v-img
                :src="src"
                class="mb-4"
                height="275"
                max-width="100%"
              ></v-img>

              <h3
                class="font-weight-black mb-4 text-uppercase"
                v-text="title"
              ></h3>

              <div
                class="title font-weight-light mb-5"
                v-text="text"
              ></div>

              <v-btn
                class="ml-n4 font-weight-black"
                text
              >
                Continue Reading
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>

      <v-sheet
        id="contact"
        color="#333333"
        dark
        tag="section"
        tile
      >
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contact Me</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-theme-provider light>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  flat
                  label="Name*"
                  solo
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  flat
                  label="Email*"
                  solo
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  flat
                  label="Subject*"
                  solo
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  flat
                  label="Message*"
                  solo
                ></v-textarea>
              </v-col>

              <v-col
                class="mx-auto"
                cols="auto"
              >
                <v-btn
                  color="accent"
                  x-large
                >
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-theme-provider>
        </v-container>

        <div class="py-12"></div>
      </v-sheet>

    <v-footer
      class="justify-center"
      color="#292929"
      height="100"
    >
      <div class="title font-weight-light grey--text text--lighten-1 text-center">
        &copy; {{ (new Date()).getFullYear() }} — Made by Climate_edu
      </div>
    </v-footer>
  
      
</section>

    
</template>



<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.globe.min.js"></script>

<script>
import * as firebase from 'firebase'
import GLOBES from 'vanta/src/vanta.globe'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        // name: '',
        email: '',
        password: '',
        
        
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
          this.$router.replace('./dashboard');   
          console.log(result);   
        }).catch((err) => {
          alert('Oops. ' +  err.message)
        }));
      }
      
      

    },
   
     beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  },
    data: () => ({
      dialog : false,
      articles: [
          {
            src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            title: 'Mobile first & Responsive',
            text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
          },
          {
            src: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            title: 'Think outside the box',
            text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
          },
          {
            src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
            title: 'Small changes, big difference',
            text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
          },
        ],
      features: [
          {
            icon: 'mdi-account-group-outline',
            title: 'Vibrant Community',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
          },
          {
            icon: 'mdi-update',
            title: 'Frequent Updates',
            text: 'Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.',
          },
          {
            icon: 'mdi-shield-outline',
            title: 'Long-term Support',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');

.loginform{
  padding-left: 20px;
}

/* .hero{
  background-color: #efefed;
} */



template, div, section{
  
  font-family: 'Nunito', sans-serif;

}

span.font-weight-black{
  font-family: Comfortaa;
}


</style>

