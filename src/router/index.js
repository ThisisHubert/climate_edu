import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Forum from '@/components/Forum' 
// import Dashboard from '@/components/Dashboard'
// import Signup from '@/components/Signup'
// import Overview from '@/components/Overview.vue'
// import Settings from '@/components/Settings.vue'
// import ClimateApi from '@/components/ClimateApi.vue'
// import ClimateDash from '@/components/ClimateDash.vue'
import { auth } from '../firebase'



Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes : [
        {
            path: '/home',
            name: 'home',
            component: ()=> import('../components/HelloWorld'),
        },
        {
            path: '/forum',
            name: 'forum',
            component:  ()=> import('../components/Forum'),
            meta:{
               requiresAuth: true
            }
            
        },
        
        {
            path: '/dashboard',
            name: 'dashboard',
            component:  ()=> import('../components/Dashboard'),
            children: [
                {
                    path:  'overview',
                    name: 'overview',
                    component: ()=> import('../components/Overview'),
                },
                {
                    path:  'climateapi',
                    name: 'climateapi',
                    component: ()=> import('../components/ClimateApi'),
                },
                {
                    path:  'settings',
                    name: 'settings',
                    component: ()=> import('../components/Settings'),
                },
                
                
            ],
            meta:{
                requiresAuth:true
            }
        },
        {
            path: '/signup',
            name: 'signup',
            component: ()=> import('../components/Signup'),   
        },
        
        {
            path:  '/climatedash',
            name: 'climatedash',
            component: ()=> import('../components/ClimateDash'),
            meta:{
                requiresAuth:true
            }
        },
       
        


    ],



})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  
    if (requiresAuth && !auth.currentUser) {
      next('/home')
    } else {
      next()
    }
  })


export default router
  
