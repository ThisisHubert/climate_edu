import Vue from 'vue'
import Router from 'vue-router'
import { auth } from '../firebase'



Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes : [
        {
            path: '/',
            name: 'home',
            component: ()=> import('../components/HelloWorld'),
        },
        {
            path: '/home',
            name: 'home',
            component: ()=> import('../components/HelloWorld'),
        },
        {
            path: '/freepost',
            name: 'freepost',
            component: ()=> import('../components/FreePost'),
            meta:{
                requiresAuth: true  
            }
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
            path: '/collabhome',
            name: 'collabhome',
            component:  ()=> import('../components/CollabHome'),
            meta:{
               requiresAuth: true
            }
            
        },
        
        
        {
            path: '/collabs',
            name: 'collabs',
            component:  ()=> import('../components/Collabs'),
            meta:{
               requiresAuth: true
            }
            
        },
        {
            path: '/collabs/:id',
            name: 'collab',
            props:true,
            component:  ()=> import('../components/Collab'),
            meta:{
               requiresAuth: true
            }
            
        },
        {
            path: '/collab/new',
            name: 'createcollab',
            component:  ()=> import('../components/CreateCollab'),
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
        
        
       
        


    ],



})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  
    if (requiresAuth && !auth.currentUser) {
      next('/home')   // will be directed to home if not sign in 
    } else {
      next()
    }
  })


export default router
  
