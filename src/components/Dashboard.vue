<template>
<div>
    <h1>Success</h1>
    <v-btn v-on:click="logOut">Logout</v-btn>
    <p> Hi, {{email}}</p>
    
    <!-- <img :src="photo"> -->
</div>


</template>




<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            
            name:null,
            email:null,
            user: {}
        }
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
};
</script>