<template>
  <div>
    <ForumNav></ForumNav>
    <v-row>
      <div class="testbed"></div>
      <div class="Donation">
        Donation
      </div>
      <div class="testbed"></div>
      <v-container :key="right" class="grey lighten-5 mb-6">
      <v-row :align="left" no-gutters style="height: 1050px">

         <v-col :cols="6" class="mx-auto1" align-self="left">
          <v-card style="height: 550px" max-width="550">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="413px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
                </div>
            </v-card-subtitle>
             <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
            
          </v-card>
        </v-col>

         <v-col :cols="6" class="mx-auto1" align-self="left">
          <v-card style="height: 550px" max-width="550">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="413px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
                </div>
            </v-card-subtitle>
             <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
            
          </v-card>
        </v-col>

         <v-col :cols="3">
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>


         <v-col cols="3">
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>

         <v-col :cols="3">
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>

        <v-col :cols="3">
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>

      </v-row>
      </v-container>
    </v-row>
    <div class="Recommendation">
      Recommendation
    </div>
    <!-- Recommendation -->
    <v-container :key="center" class="grey lighten-5 mb-6">
      <v-row :align="center" no-gutters style="height: 350px;">
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>

       <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
       <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container :key="center" class="grey lighten-5 mb-6">
      <v-row :align="center" no-gutters style="height: 350px;">
       <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
       <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
       <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- Recommendation -->

    <div class="New-Arrival">
      New Arrival
    </div>
    <!-- New arrival -->
    <v-container :key="center" class="grey lighten-5 mb-6">
      <v-row :align="center" no-gutters style="height: 350px;">
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container :key="center" class="grey lighten-5 mb-6">
      <v-row :align="center" no-gutters style="height: 350px;">
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
       <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
       <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- New arrival -->
    <v-footer id="foot" padless>
      <v-row id="foot" justify="center" no-gutters>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          color="black"
          text
          rounded
          class="my-2"
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>

        <v-col class="py-4 text-center black--text" cols="12">
          <strong class="font-weight-black">
            ©{{ new Date().getFullYear() }} ClimateTalk</strong
          >
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    skill: 20,
    show: false,
    alignments: ["center", "center"],
    alignments_second: ["center", "center"],
    icons: ["mdi-facebook", "mdi-twitter"],
  }),
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

* {
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  transition: 0.15s;

  &:focus {
    outline: none;
  }
}

.subs {
  padding-left: 30px;
}

.goal {
  width: 37px;
  height: 13px;
  margin: 1px 1px 17px;
  font-size: 15px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #28cd3d;
}

.testbed {
  width: 495px;
  height: 10px;
  padding-left: 250px;
  margin: 117px 112px 91px 192px;
  background-color: #28cd3d;
}

.Donation {
  width: 214.5px;
  height: 17px;
  margin: 0 7.5px 3.5px 0;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-family: "Open Sans", sans-serif;
  font-size: 70px;
  padding-top: 60px;
  text-align: center;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: #28cd3d;
}

.font-weight-black {
  font-family: Comfortaa, cursive;
  color: #28cd3d;
  padding-top: 18px;
  font-size: 1.3em;
}

.special-card{
  padding-left: 260px ;
  padding-top: -140px;
}

.Recommendation {
  width: 582px;
  height: 98px;
  margin: 116px 87px 64px 130px;
  font-family: "Open Sans", sans-serif;
  font-size: 70px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #28cd3d;
}

.New-Arrival {
  width: 426px;
  height: 101px;
  margin: 93px 46px 62px 136px;
  font-family: "Open Sans", sans-serif;
  font-size: 70px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #28cd3d;
}

.mx-auto {
  height: 600px;
}

.mx-auto1 {
  padding-top:20px;
}

.subline {
  white-space: nowrap;
}

.nobreak {
  white-space: nowrap;
}

.price {
  font-size: 30px;
}

#foot {
  background-color: #e4e4dd;
}

.bigbox {
  // padding-right: 600px;

  // margin: 0 60px 0 0;
  // padding: 0 0 8.7px;
  // box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
}
</style>
