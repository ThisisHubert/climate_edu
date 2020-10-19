import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Forum from '@/components/Forum' 
import Learn from '@/components/Learn'     
import Dashboard from '@/components/Dashboard'
import Signup from '@/components/Signup'
import Overview from '@/components/Overview.vue'
import Settings from '@/components/Settings.vue'
import ClimateApi from '@/components/ClimateApi.vue'
import ClimateDash from '@/components/ClimateDash.vue'



Vue.use(Router)

export default new Router({
    
    routes : [
        {
            path: '/home',
            name: 'home',
            component: HelloWorld
        },
        {
            path: '/forum',
            name: 'forum',
            component: Forum
        },
        {
            path: '/learn',
            name: 'learn',
            component: Learn
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            children: [
                {
                    path:  'overview',
                    name: 'overview',
                    component: Overview
                },
                {
                    path:  'climateapi',
                    name: 'climateapi',
                    component: ClimateApi
                },
                {
                    path:  'settings',
                    name: 'settings',
                    component: Settings
                },
                
                
            ]
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup     
        },
        
        {
            path:  '/climatedash',
            name: 'climatedash',
            component: ClimateDash
        },
       
        


    ]



})