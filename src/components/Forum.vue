<template>
  <div>
      <h2>This is Forum page</h2>
      <v-btn @click="logOut()">Log out</v-btn>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: "Forum",
    components:{

    },
    created(){
      this.user = firebase.auth().currentUser;
        if(this.user != null){
            this.name = this.user.name;  
            this.email = this.user.email;
            this.photo = this.user.photoURL;
    }
    },
    methods:{
      logOut(){
            firebase.auth().signOut();
           
    }
    }
}
</script>

<style>

</style>