<template>
  <v-footer style="height: 150px" id="foot" padless>
      <v-row id="foot" justify="center" no-gutters>
        
        <v-btn
         text 
         rounded
         class="my-2"
         href="https://www.facebook.com/G2T2ClimateTalk"
        >
          <v-icon size="24px">
            mdi-facebook
          </v-icon>
        </v-btn>

         <v-btn
         text 
         rounded
         class="my-2"
         href="https://twitter.com/G2T2ClimateTalk"
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
</template>

<script>
export default {
    name: "Footer",
    data(){
        return{
            icons: ["mdi-facebook", "mdi-twitter"],

        }
    }

}
</script>

<style scoped lang="css">

#foot {
  background-color: #e4e4dd;
}

.font-weight-black{
    color: #28cd3d;

}

.my-2{
    text-decoration: none;
}
</style>