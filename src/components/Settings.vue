<template>
  <div class="overview">
      <div class="container h-100">
          <div class="intro h-100">
            <div class="row h-100 justify-content-center align-items-center">
              <div class="col-md-6">
                 <h2><b>Profile Settings </b></h2>
                 <p>
                   Change Your Profile Settings Here 
                 </p>
                 <hr>
              </div>
              <div class="col-md-6">
                  <img src="../assets/settings.svg" alt="" class="img-fluid" width="500">
              </div>
            </div>
          </div>
     
      </div>
    
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: "Overview",
    
    
    created(){
        this.user = firebase.auth().currentUser;
        if(this.user != null){
            this.name = this.user.name;  
            this.email = this.user.email;
            this.photo = this.user.photoURL;
        }
    
     
  }

    

}; 
</script>

<style scoped lang="scss">




.search-box {
  width: 80%;
  margin-bottom: 30px;
  margin-left: 100px;
}
body {
  font-family: 'montserrat', sans-serif;
}
main {
  min-height: 100vh;
  padding: 25px;
//   background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}



.search-box .search-bar {
  display: block;
  width: 50%;
  padding: 15px;
  
  color: #313131;
  font-size: 20px;
  appearance: none;
  border:none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}
.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}
.location-box .location {
  color:black;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.location-box .date {
  color:black;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}
.weather-box {
  text-align: center;
}
.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color:greenyellow;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color:black;
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather-box .weather {
  color:black;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>