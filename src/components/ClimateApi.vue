<template>
    <div>
      <!-- insert here for test API  -->
      {{quality.data}}
    <div class="search-box">
        <input 
          type="text" 
          class="search-bar" 
          placeholder="Check Current Weather..."
          v-model="query"
          @keypress="fetchWeather"
        />
      </div>
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>    
      </div>
</template>

<script>
import firebase from 'firebase'   
export default {
    name: "ClimateApi",
     data() {
    return {
      api_key: '60745ed25b2a6851f7d29725e82cabd9',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {},

      quality: {},
    }
  },
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
    mounted(){
      this.getAirQuality();
    },
     methods: {
    fetchWeather (e) {
      if (e.key == "Enter") {
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
      }
    },
    setResults (results) {
      this.weather = results;
    },
    dateBuilder () {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day} ${date} ${month} ${year}`;
    },
    // function to get air quality 
    getAirQuality(){
       fetch("https://air-quality.p.rapidapi.com/current/airquality?lon=-73.00597&lat=40.71427", {
      method: "GET",
      headers: {
        "x-rapidapi-host":  "air-quality.phhjfgh.rapidapi.com",
        "x-rapidapi-key": "f38a51a3d1msh85015cdac3fcb94p1e4ad0jsnaf0867eafea5"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.quality = data;
      });
    }

  }
    
}
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