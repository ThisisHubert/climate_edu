<template>
  <div class="overview">
    <div class="container h-100">
      <div class="intro h-100">
        <!-- heading -->
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h2><b>Welcome to Climate Talk! </b></h2>
            <p>
              Your primary resource for searching the right information about
              Climate Change
            </p>
            <hr />   
            <h4>What's happening?</h4>
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
        <!-- heading -->
        
      </div>
        <div class="row h-100 justify-content-center align-items-center">

      <div class="postedmeetup col-md-10">
      <div class="recent-post">Recently Posted Meetup</div>
      <v-flex xs12 sm10 md10>
        <v-card outlined elevation="0">
          <v-container>
            <v-layout row>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5>{{ meetups[meetups.length-1].title }}</h5>
                  </div>
                </v-card-title>
                <v-card-text>
                    <div>{{ meetups[meetups.length-1].date | date }}</div>
                </v-card-text>
                <v-card-actions class="view-button">
                  <v-btn class="buttons" color="#28cd3d" rounded  flat :to="'/collabs/' + meetups[meetups.length-1].id">
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      </div>

      <div class="postedmeetup col-md-10">
      <div class="recent-post">Recently Posted Forum</div>
      <v-flex xs12 sm10 md10>
        <v-card outlined elevation="0">
          <v-container>
            <v-layout row>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h5>{{ posts[0].title }}</h5>
                  </div>
                </v-card-title>
                <v-card-text>
                    <div>{{ posts[0].content }}</div>
                </v-card-text>
                <v-card-actions class="view-button">
                  <v-btn class="buttons" color="#28cd3d" rounded  flat :to="'/forum'">
                    View Forum
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
      </div>
    </div>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// import firebase from "firebase";
export default {
  name: "Overview",

  data: () => {
    return {
      date: new Date()
    };
  },
  

  computed: {
    ...mapState(["userProfile","posts"]),
    meetups(){
      return this.$store.getters.loadedMeetups
    },
  }
  
};
</script>
@import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');

<style scoped lang="scss">
.search-box {
  width: 80%;
  margin-bottom: 30px;
  margin-left: 100px;
}

.buttons{
  text-decoration: none;
  color:white;
  font-weight: bold;
}

.postedmeetup{
  margin-top:60px;
  margin-bottom: 20px;
}


.recent-post{
  font-size: 20px;
  font-weight: bold;
  color: #28cd3d;
}
.col-md-6{
  margin-top: -20px;
}
h5{
  font-weight: bold;
}

.search-box .search-bar {
  display: block;
  width: 50%;
  padding: 15px;

  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
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
  color: black;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}
.location-box .date {
  color: black;
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
  color: greenyellow;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: black;
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
.weather-box .weather {
  color: black;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.container {
    position: relative;


    .searchbar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 60px;
      font-size: 1.6rem;
      input {
        padding: 0 100px 0 20px;
        margin: 0;
        width: calc(100% - 120px);
        height: 60px;
        border: none;
        font-size: 2rem;
        color: #fff;
        background-color: #222;
        &:focus {
          outline: none;
        }
      }
      .search-icons {
        position: absolute;
        right: 20px;
        top: 20px;
        color: #fff;
        i {
          margin-left: 15px;
          cursor: pointer;
        }
      }
    }
    .result-list {
      padding-top: 60px;
    }
    article {
      display: grid;
      grid-template-columns: 200px auto 40px;
      grid-template-rows: 100px;
      border-bottom: 1px solid #ccc;
      overflow: hidden;
      cursor: pointer;
      header {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        img {
          max-width: 100%;
          height: auto;
        }
        i {
          font-size: 2rem;
        }
      }
      section {
        margin: 0;
        padding: 10px;
        height: 100px;
      }
      footer {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        color: #888;
      }
    }
    #scroll-trigger {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100px;
      font-size: 1.6rem;
    }
  }






</style>
