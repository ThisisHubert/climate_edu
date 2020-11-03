<template>
  <v-app>
    <v-main>
      <Header/>
      <HelloWorld/>
        <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['userProfile']),
    

  

}
}
</script>
