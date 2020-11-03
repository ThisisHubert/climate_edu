<template>
<div>

     <div class="dashboard">

        <div class="page-wrapper default-theme sidebar-bg bg1" :class="{'toggled':!closeSidebar}">
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                    <v-img
                        contain
                        max-height="200%"
                        src="../assets/logo (1).png"
                    ></v-img>
                      
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                    <div class="user-pic">
                        <img class="img-responsive img-rounded" src="../assets/user1.png" alt="User picture">
                    </div>
                    <div class="user-info">
                        <span class="user-name">
                            {{userProfile.name}}
                        </span>
                        <span class="user-role">{{userProfile.email}}</span>
                        <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                    </div>
                </div>
                <!-- sidebar-search  -->
                <div class="sidebar-item sidebar-search">
                    <div>
                        <div class="input-group">
                            <input type="text" class="form-control search-menu" placeholder="Search...">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- sidebar-menu  -->
                <div class=" sidebar-item sidebar-menu">
                    <ul>
                        <li class="header-menu">
                            <span>General</span>
                        </li>
                        <li>
                            <router-link to="/dashboard/overview">
                                <i class="fa fa-globe"></i>
                                <span class="menu-text" >Activities</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/dashboard/climateapi">
                                <i class="fa fa-cloud"></i>
                                <span class="menu-text">Climate Open Data</span>
                            </router-link>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-handshake"></i>
                                <span class="menu-text">Meetups</span>
                            </a>
                        </li>
                        
                        <li>
                            <a href="/forum">
                                <i class="fa fa-comments"></i>
                                <span class="menu-text">Forum</span>
                            </a>
                            
                        </li>
                        <li>
                            <router-link to="/dashboard/settings">
                                <i class="fa fa-cogs"></i>
                                <span class="menu-text">Settings</span>
                            </router-link>
                           
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-power-off"></i>
                                <span class="menu-text" @click="logOut()">Logout</span>
                            </a>
                            <div class="sidebar-submenu">
                               
                            </div>
                        </li>
                        
                        
                        
                        
                    </ul>
                </div>
                <!-- sidebar-menu  -->
            </div>
            <!-- sidebar-footer  -->
            
            
        </nav>
        <!-- page-content  -->
        <main class="page-content pt-2">
            <router-view/>
        </main>
        <!-- page-content" -->
    </div> -->
    <!-- page-wrapper -->
        

    </div>

    
    <!-- <img :src="photo"> -->

</div>

</template>




<script>     
// import firebase from 'firebase'   
import { mapState } from 'vuex'
// import LineChart from './Charts/LineChart';
// import BarChart from './Charts/BarChart';
// import SocialTrafficTable from './Dashboard/SocialTrafficTable';
// import PageVisitsTable from './Dashboard/PageVisitsTable';

export default {
    name: "dashboard",
    components:{
        // LineChart,
        // BarChart,
        // SocialTrafficTable,
        // PageVisitsTable
    },

     computed: {
    ...mapState(['userProfile'])
  },
   
   
    // created(){
    //     this.user = firebase.auth().currentUser;
    //     if(this.user != null){
    //         this.name = this.user.name;  
    //         this.email = this.user.email;
    //         this.photo = this.user.photoURL;
    //     }
    // },
    methods:{
        logOut(){
            this.$store.dispatch('logout')           
    },
    initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    
}
};
</script>

<style scoped>

div, template {
  font-family: 'Nunito', sans-serif;
}

#app {
  font-family: 'Nunito', sans-serif;
}


</style>