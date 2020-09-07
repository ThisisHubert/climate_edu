<template>
<div>
    <h1>Success</h1>
    <v-btn href="/#/home" v-on:click="logOut">Logout</v-btn>
    <p>{{name}}</p>

    <img :src="photo">
</div>
</template>




<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            
            name:'',
            photo:'',
            user: {}
        }
    },
    created(){
        this.user = firebase.auth().currentUser;
        if(this.user){
            this.name = this.user.displayName;
            this.photo = this.user.photoURL;
        }
    },
    methods:{
        logOut(){
            firebase.auth().logOut();
            // .then(() => {
            //     this.$router.replace('./home');
            // })
            // .catch((err) =>{
            //     console.log(err);
            // });
    }
    
}
};
</script>