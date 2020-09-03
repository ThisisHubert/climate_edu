import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Forum from '@/components/Forum' 
import Learn from '@/components/Learn'
import Dashboard from '@/components/Dashboard'
import Signup from '@/components/Signup'


Vue.use(Router)

export default new Router({
    
    routes : [
        {
            path: '/home',
            name: 'home',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/Forum',
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
            component: Dashboard
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        }



    ]



})