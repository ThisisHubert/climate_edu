<template>

<div>
     <div class="dashboard">
        <button @click="closeSidebar = false" class="btn btn-outline-primary m-4">
            <i class="fas fa-bars"></i>
        </button>
        <div class="page-wrapper default-theme sidebar-bg bg1" :class="{'toggled':!closeSidebar}">
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                    <a href="#">CLIMATE Talk</a>
                    <div id="close-sidebar" @click="closeSidebar = true" >
                        <i class="fas fa-times text-secondary"></i>  
                    </div>
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                    <div class="user-pic">
                        <img class="img-responsive img-rounded" src="img/user.jpg" alt="User picture">
                    </div>
                    <div class="user-info">
                        <span class="user-name">Jhon
                            <strong>Smith</strong>
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
                        <li class="sidebar-dropdown">
                            <a href="#">
                                <i class="fa fa-tachometer-alt"></i>
                                <span class="menu-text">Dashboard</span>
                                <span class="badge badge-pill badge-warning">New</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">Dashboard 1
                                            <span class="badge badge-pill badge-success">Pro</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Dashboard 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Dashboard 3</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="sidebar-dropdown">
                            <a href="#">
                                <i class="fa fa-shopping-cart"></i>
                                <span class="menu-text">E-commerce</span>
                                <span class="badge badge-pill badge-danger">3</span>
                            </a>
                            <div class="sidebar-submenu">
                                <ul>
                                    <li>
                                        <a href="#">Products

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Orders</a>
                                    </li>
                                    <li>
                                        <a href="#">Credit cart</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="sidebar-dropdown">
                            <a href="#">
                                <i class="far fa-gem"></i>
                                <span class="menu-text">Components</span>
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
            <div id="overlay" class="overlay"></div>
            <div class="container-fluid p-5">
                <div class="row">
                    <div class="form-group col-md-12">
                        <h2>Welcome {{email}} !</h2>  
                        <p>This is a responsive sidebar template with dropdown menu based on bootstrap framework.</p>

                    </div>
                    
                       


                    
                
                </div>
            </div>
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