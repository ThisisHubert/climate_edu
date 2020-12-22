 <template>
 <v-app-bar
        app
        elevate-on-scroll
        color="white"
        height="90"
      >
        <v-avatar
          class="mr-3"
          color="grey lighten-5"
          size="70"
        >
          <v-img
            contain
            max-height="100%"
            src="../assets/logo (1).png"
          ></v-img>
        </v-avatar>
        <v-toolbar-title class="font-weight-black">
          ClimateTalk
        </v-toolbar-title>
        <v-spacer></v-spacer>
    <v-row align="right" justify="space-around">
      
    </v-row>      
  </v-app-bar> 
</template>

<script>
export default {
    name: "Navbar",
    props: {
        msg:String
    }
};
</script>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap');

.font-weight-black{
  font-family: Comfortaa, cursive;
  color:#28cd3d;
  padding-top: 18px;
  font-size: 1.8em;
}

.font-weight-child{
  font-family: Comfortaa, cursive;
  color:#28cd3d;
  font-weight: bold;
  padding-top: 18px;


}




</style>