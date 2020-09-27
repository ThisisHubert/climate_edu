<template>

<div>
    <button @click="closeSidebar = false" class="btn btn-outline-primary m-4">
            <i class="fas fa-bars"></i>
    </button>
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
                    <div id="close-sidebar" @click="closeSidebar = true" >
                        <i class="fas fa-times text-secondary"></i>  
                    </div>    
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                    <div class="user-pic">
                        <img class="img-responsive img-rounded" src="../assets/user1.png" alt="User picture">
                    </div>
                    <div class="user-info">
                        <span class="user-name">
                            {{email}}
                        </span>
                        <span class="user-role">Administrator</span>
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
                                <span class="menu-text" >Overview</span>
                            </router-link>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-handshake"></i>
                                <span class="menu-text">Meetups</span>
                            </a>
                        </li>
                        
                        <li>
                            <a href="#">
                                <i class="fa fa-forumbee"></i>
                                <span class="menu-text">Forum</span>
                            </a>
                            
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa fa-cogs"></i>
                                <span class="menu-text">Settings</span>
                            </a>
                           
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
    </div>
    <!-- page-wrapper -->
        

    </div>

    
    <!-- <img :src="photo"> -->
</div>

</template>




<script>     
import firebase from 'firebase'   
import * as chartConfigs from './Charts/config';
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
   
    data() {
        return {
            
            name:{},
            email:{},
            user: {},
            closeSidebar: false,
            bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [],
            labels: [],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          }
        }
        };
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