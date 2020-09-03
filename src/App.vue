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

export default {
  name: 'App',

};
</script>
