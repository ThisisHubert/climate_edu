 <template>
 <v-app-bar
        app
        color="white"
        height="100"
      >
        <v-avatar
          class="mr-3"
          color="grey lighten-5"
          size="70"
        >
          <v-img
            contain
            max-height="70%"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          ></v-img>
        </v-avatar>
        <v-toolbar-title class="font-weight-black headline">
          CLIMATE Talk
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-col style="padding-top:35px;" cols="12" sm="6" md="3">
          <v-text-field
            label="Search"
            outlined
          ></v-text-field>
        </v-col>
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


<style scoped lang="scss">

</style>