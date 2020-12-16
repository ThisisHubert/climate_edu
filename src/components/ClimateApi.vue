<template>
    <div>
      <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6 groupapi">
            <h2>Climate Open Data </h2>
            <p>
              All necessary data related to climate change can be found here
            </p>
            <hr />
            <h4>Here are your recent activities!</h4>
          </div>
          <div class="col-md-6">
            <img
              src="../assets/dashboard.svg"
              alt=""
              class="img-fluid"
              width="500"
            />
          </div>
        </div>




      News API
      
      <!-- insert here for test API  -->
    <div class="search-box">
        <input 
          type="text" 
          class="search-bar" 
          placeholder="Input any City..."
          v-model="query"
          @keypress="fetchWeather"
        />
    </div>
      
  
    <div class="weather-wrap" v-if="typeof weather.list != 'undefined'">
        
    
    <!-- Current day card -->
    <v-row align="center">
        <v-col
         
        >
    <div class="card">

        <h2><i class="fas fa-map-marker-alt"></i>  {{weather.city.name}}, {{weather.city.country}}</h2>
        <h3><b>lat: </b>{{weather.city.coord.lat}} <b>lon: </b>{{weather.city.coord.lon}}</h3>
        <h3><i class="far fa-calendar"></i>  {{ dateBuilder() }}</h3>
        <h3><b>{{ weather.list[1].weather[0].main }}</b><span>Wind {{ Math.round(weather.list[1].wind.speed) }}m/s <span class="dot">•</span> Humidity {{ Math.round(weather.list[1].main.humidity) }}%</span></h3>
        <h1>{{ Math.round(weather.list[1].main.temp) }}°</h1>
        <h3><i class="fas fa-temperature-high"></i> {{ Math.round(weather.list[1].main.temp_max) }}°c</h3>
        <h3><i class="fas fa-temperature-low"></i> {{ Math.round(weather.list[1].main.temp_min) }}°c</h3>
        <h3><b>Precipitation:</b> {{weather.list[1].pop*100}}%</h3>
        <h3><b>Last Update:</b> {{weather.list[1].dt_txt.slice(-8,-3)}}</h3>
        <h3><b>Feels like:</b> {{Math.round(weather.list[1].main.feels_like)}}°</h3>
        <div class="sky">
            <div class="sun"></div>
            <div class="cloud">
                <div class="circle-small"></div>
                <div class="circle-tall"></div>
                <div class="circle-medium"></div>
            </div>
        </div>
        <table>
            <tr>
                <td><b>{{weather.list[5].dt_txt.slice(5,10).replace(/-/g, '/')}}</b></td>
                <td><b>{{weather.list[12].dt_txt.slice(5,10).replace(/-/g, '/')}}</b></td>
                <td><b>{{weather.list[20].dt_txt.slice(5,10).replace(/-/g, '/')}}</b></td>
                <td><b>{{weather.list[28].dt_txt.slice(5,10).replace(/-/g, '/')}}</b></td>
                <td><b>{{weather.list[36].dt_txt.slice(5,10).replace(/-/g, '/')}}</b></td>
            </tr>
            <tr>
                <td>{{ Math.round(weather.list[5].main.temp_max) }}°</td>
                <td>{{ Math.round(weather.list[12].main.temp_max) }}°</td>
                <td>{{ Math.round(weather.list[20].main.temp_max) }}°</td>
                <td>{{ Math.round(weather.list[28].main.temp_max) }}°</td>
                <td>{{ Math.round(weather.list[36].main.temp_max) }}°</td>
            </tr>
        </table>
        <trend
        :data="[ Math.round(weather.list[5].main.temp_max) , Math.round(weather.list[12].main.temp_max), Math.round(weather.list[20].main.temp_max), Math.round(weather.list[28].main.temp_max), Math.round(weather.list[36].main.temp_max)]"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        auto-draw
        smooth
              >
      </trend>
    </div>
  </v-col>
  <v-col>
    <div class="card_pop">
       <v-list-item>
      <v-list-item-content>
        <i class="fas fa-users fa-2x"></i>
        <v-list-item-title>Population</v-list-item-title>
       <v-list-item-subtitle>{{weather.city.population.toLocaleString()}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    
    <v-divider inset></v-divider>

    <v-list-item two-line>
      <v-list-item-content>  
        <i class="fas fa-eye fa-2x"></i>    
        <v-list-item-title>Air Visibility</v-list-item-title>
        <v-list-item-subtitle>{{weather.list[1].visibility}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider inset></v-divider>

    <v-list-item three-line>
      <v-list-item-content>
        <i class="fas fa-water fa-2x"></i>
        <v-list-item-title>Atmospheric Pressure at sea level</v-list-item-title>
        <v-list-item-subtitle>
          {{weather.list[1].main.sea_level}} hPa
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider inset></v-divider>

    <v-list-item three-line>
      <v-list-item-content>
        <i class="fas fa-leaf fa-2x"></i>
        <v-list-item-title>Atmospheric Pressure at ground level</v-list-item-title>
        <v-list-item-subtitle>
          {{weather.list[1].main.grnd_level}} hPa
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider inset></v-divider>

    <v-list-item three-line>
      <v-list-item-content>
        <i class="fas fa-cloud fa-2x"></i>
        <v-list-item-title>Cloudiness</v-list-item-title>
        <v-list-item-subtitle>
          {{weather.list[1].clouds.all}} %
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider inset></v-divider>

    <v-list-item three-line>
      <v-list-item-content>
        <i class="fas fa-cloud-moon fa-2x"></i>
        <v-list-item-title>Part of the day (n - night, d - day)</v-list-item-title>
        <v-list-item-subtitle>
          {{weather.list[1].sys.pod}}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>


    </div>
  </v-col>
</v-row>

    </div>
      <!-- </v-card>  -->
      <!-- </div> -->

      
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
      weather: '',
      completeWeatherApi:'',
      quality: {},
      location: {},
      quality2: {},
      labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
        time: 0,
        forecast: [
          { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
          { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
          { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
        ],

      
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
      this.stormGlass();
    },
     methods: {
    fetchWeather (e) {
      if (e.key == "Enter") {
        fetch(`${this.url_base}forecast?q=${this.query}&units=metric&APPID=${this.api_key}`)
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
       fetch(`https://air-quality.p.rapidapi.com/current/airquality?lon=139&lat=34`, {
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
    },

   stormGlass(){
       fetch('https://api.stormglass.io/v2/solar/point?lat=34&lng=139&params=uvIndex', {
      headers: {
        'Authorization': 'bb611236-1075-11eb-b19c-0242ac130002-bb6112ea-1075-11eb-b19c-0242ac130002'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.quality2 = data;
      });
    },


    
    // storm glass API:bb611236-1075-11eb-b19c-0242ac130002-bb6112ea-1075-11eb-b19c-0242ac130002

  },
    
}
</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300);



hr{
    margin-top: 20px;
    width: 1400px;
    margin-left: 100px;
}



.search-box {
  width: 80%;
  margin-bottom: 30px;
  margin-left: 70px;
}
body {
  font-family: 'montserrat', sans-serif;
}
main {
  min-height: 100vh;
  padding: 25px;
  // background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}



.search-box .search-bar {
  display: block;
  width: 50%;
  padding: 15px;
  
  color: #313131;
  margin-left: 8px;
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


hr{
  width: 350px;
  padding-left: 10px;
}
.groupapi{
  padding-left: 40px;
}

#max-detail,
#min-detail {
   color: #ffffff;
   font-size: 2.0rem;
   font-weight: 500;
   line-height: 24px;
}

.weather-box .temp {
  display: inline-block;
  padding: 15px 20px;
  color:greenyellow;
  font-size: 90px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color:black;
  border-radius: 16px;
  margin: 20px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  height: 150px;
}
.weather-box .weather {
  color:black;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
html,
body {
    background-color: #F3F3F3;
    font-family: 'Roboto', sans-serif;
}

.card {
    margin: 0 auto;
    margin-top: 5%;
    margin-left: 10%;
    margin-bottom: 10%;
    padding: 5px 30px 20px;
    width: 690px;
    height: 1070px;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, .2);
    -webkit-animation: open 2s cubic-bezier(.39, 0, .38, 1);
}

.card_pop {
    margin: 0 auto;
    margin-top: 1%;
    margin-right: 7%;
    margin-bottom: 5%;
    padding: 5px 30px 20px;
    width: 690px;
    height: 1070px;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, .2);
    -webkit-animation: open 2s cubic-bezier(.39, 0, .38, 1);
}

.card_vis {
    margin: 0 auto;
    margin-top: 1%;
    margin-right: 7%;
    margin-bottom: 50%;
    padding: 5px 30px 20px;
    width: 690px;
    height: 300px;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, .2);
    -webkit-animation: open 2s cubic-bezier(.39, 0, .38, 1);
}


@-webkit-keyframes open {
    from {
        padding: 0 30px;
        height: 0;
    }
    to {
        height: 470px;
    }
}

h2,
h3
{
    position: relative;
    padding-top: 20px;
}

h3.minmax{
  float: right;
    color: #666;
    font-weight: 300;
    padding-left: 450px;
    font-size: 2.59375em;
    line-height: .2em;
    position: relative;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .2s;
}



h1 {
    float: right;
    color: #666;
    font-weight: 300;
    padding-left: 450px;
    font-size: 6.59375em;
    line-height: .2em;
    position: relative;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .2s;
}

h2 {
    font-weight: bold;
    font-size: 2.25em;
    // -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1);
}

h3 {
    float: left;
    margin-right: 33px;
    color: #777;
    font-weight: 400;
    font-size: 1.3em;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .1s;
}

span {
    margin-left: 24px;
    color: #999;
    font-weight: 300;
}

span span {
    margin-left: 0;
}

.dot {
    font-size: .9em;
}

.sky {
    position: relative;
    margin-top: 108px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #03A9F4;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .2s;
}

.sun {
    position: relative;
    top: -3px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #FFEB3B;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .5s;
}

.cloud {
    position: absolute;
    top: 60px;
    left: 30px;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .7s;
}

.cloud:before,
.cloud:after {
    position: absolute;
    display: block;
    content: "";
}

.cloud:before {
    margin-left: -10px;
    width: 51px;
    height: 18px;
    background: #fff;
}

.cloud:after {
    position: absolute;
    top: -10px;
    left: -22px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 50px -6px 0 6px #fff, 25px -19px 0 10px #fff;
}

table {
    position: relative;
    top: 10px;
    width: 100%;
    text-align: center;
}

tr:nth-child(1) td:nth-child(1),
tr:nth-child(1) td:nth-child(2),
tr:nth-child(1) td:nth-child(3),
tr:nth-child(1) td:nth-child(4),
tr:nth-child(1) td:nth-child(5) {
    padding-bottom: 32px;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .7s;
}

tr:nth-child(2) td:nth-child(1),
tr:nth-child(2) td:nth-child(2),
tr:nth-child(2) td:nth-child(3),
tr:nth-child(2) td:nth-child(4),
tr:nth-child(2) td:nth-child(5) {
    padding-bottom: 7px;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .9s;
}

tr:nth-child(3) td:nth-child(1),
tr:nth-child(3) td:nth-child(2),
tr:nth-child(3) td:nth-child(3),
tr:nth-child(3) td:nth-child(4),
tr:nth-child(3) td:nth-child(5) {
    padding-bottom: 7px;
    -webkit-animation: up 2s cubic-bezier(.39, 0, .38, 1) .9s;
}

tr:nth-child(2),
tr:nth-child(3) {
    font-size: .9em;
}

tr:nth-child(3) {
    color: #999;
}

@-webkit-keyframes up {
    0% {
        opacity: 0;
        -webkit-transform: translateY(15px);
    }
    50% {
        opacity: 0;
        -webkit-transform: translateY(15px);
    }
    99% {
        -webkit-animation-play-state: paused;
    }
    100% {
        opacity: 1;
    }
}
</style>