<template>
<div>
        <div v-if="$vuetify.breakpoint.width < 768">
            <v-app-bar app color="black" dark elevation="0">
            <v-app-bar-nav-icon @click.stop="sidebarMenu = !sidebarMenu"></v-app-bar-nav-icon>
             <div>{{userProfile.name}}</div>
            <v-spacer></v-spacer>
           
            <v-btn class="ma"
      color="error" @click="logOut()">
       <b> Log out</b>
      </v-btn>
        </v-app-bar>
        <v-navigation-drawer 
            v-model="sidebarMenu" 
            app
            floating
            :permanent="sidebarMenu"
            :mini-variant.sync="mini"
            >
            <v-list dense color="black" dark>
                <v-list-item>
                    <v-list-item-action>
                        <v-icon @click.stop="sidebarMenu = !sidebarMenu">mdi-chevron-left</v-icon>
                    </v-list-item-action>
                    
                </v-list-item>
            </v-list>
            <v-list-item class="px-2" @click="toggleMini = !toggleMini">
                <v-list-item-avatar>
                    <v-icon>mdi-account-outline</v-icon>
                </v-list-item-avatar>
                <v-list-item-content class="text-truncate">
                    {{userProfile.name}}
                </v-list-item-content>
                <v-btn icon small>
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>
            <v-divider></v-divider>
            <v-list>
                <v-list-item v-for="item in items" :key="item.title" link :to="item.href">
                    <v-list-item-icon>
                        <v-icon color="green">{{ item.icon }}</v-icon>

                    </v-list-item-icon>
                    
                    <v-list-item-content>
                        <v-list-item-title class="primary--text">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
         <main class="page-content pt-2">
            <router-view/>
        </main>
     </div>
     
     <div v-else class="dashboard">

        <div class="page-wrapper default-theme sidebar-bg bg1" :class="{'toggled':!closeSidebar}">
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                    <v-img
                        contain
                        max-height="150%"
                        src="../assets/logo (1).png"
                    ></v-img>
                      
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                   
                    <div class="user-info">
                        <span class="user-name">
                           <b>{{userProfile.name}}</b>
                        </span>
                        <span class="user-role">{{userProfile.email}}</span>
                       
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
                                <i class="fa fa-chart-area"></i>
                                <span class="menu-text">Climate Open Data</span>
                            </router-link>
                        </li>
                        <li>
                            <a href="/collabhome">
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
                            <a href="/freepost">
                                <i class="fab fa-rocketchat"></i>
                                <span class="menu-text">FreeTalk (New!)</span>
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
    </div> 
    <!-- page-wrapper -->
        

    </div>

    
    <!-- <img :src="photo"> -->

</div>

</template>




<script>     
// import firebase from 'firebase'   
import { mapState } from 'vuex'

export default {
    name: "dashboard",
    components:{
        
    },
    data(){
        return{
            sidebarMenu: true,
      toggleMini: false,
      items: [
        { title:"Activities", href:"/dashboard/overview", icon:"mdi-web" },
        { title:"opendata", href:"/dashboard/climateapi", icon:"mdi-chart-bar" },
        { title:"Collaborate", href:"/collabhome", icon:"mdi-account-multiple" },
        { title:"Forum", href:"/forum", icon:"mdi-tooltip-outline" },
        { title:"Freepost", href:"/freepost", icon:"mdi-weather-cloudy" },
        { title:"Settings", href:"/dashboard/settings", icon:"mdi-account-key" },

      ],
        }
    },

     computed: {
    ...mapState(['userProfile']),
    mini() {
        return (this.$vuetify.breakpoint.smAndDown) || this.toggleMini
    },
  },
  created(){
        document.title = "Dashboard"; // to set title 

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