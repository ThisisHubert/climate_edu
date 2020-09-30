<template>
  <div class="overview">

      <h2> Welcome ! {{email}}</h2>
      <hr>

       <v-img
                        contain
                        height="250px"
                        src="../assets/logo (1).png"
                    ></v-img>
  </div>
  
</template>

<script>
import firebase from 'firebase'
export default {
    name: "Overview",
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

}; 
</script>

<style scoped lang="scss">
h2{
    margin-top: 20px;
    margin-left: 100px;
}

hr{
    margin-top: 20px;
    width: 1400px;
    margin-left: 100px;
}

</style>