<template>
  <div class="overview">
      <h3>This is Settings</h3>  
      <h4>this is my email: {{email}}</h4>


        <v-btn class="ma-2" color="green" dark type="submit" @click="logOut()">Sign out</v-btn>
 
  </div>


</template>

<script>
import firebase from 'firebase'   

export default {
    name: "Settings",    
    props: {
        msg: String
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
           
    },

    }

}; 
</script>

<style scoped lang="scss">

</style>