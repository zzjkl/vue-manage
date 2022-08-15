import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from'../view/Main.vue'
Vue.use(VueRouter)

const routes =[
    {
    path: '/',
    name: 'Main',
    component : ()=> import('../view/Main.vue'),
    redirect: '/home',
    children : [
        // {
        //     path:'/home',
        //     name: 'home',
        //     component : ()=> import('../view/home')
        // },
        // {
        //     path:'/user',
        //     name: 'user',
        //     component : ()=> import('../view/user')
        // },
        // {
        //     path:'/mall',
        //     name: 'mall',
        //     component : ()=> import('../view/mall')
        // },
        // {
        //     path:'/page1',
        //     name: 'page1',
        //     component : ()=> import('../view/other/pageOne.vue')
        // },
        // {
        //     path:'/page2',
        //     name: 'page2',
        //     component : ()=> import('../view/other/pageTwo.vue')
        // },
        
    ]
    },
    {
        path:'/login',
        name: 'login',
        component:()=> import('../view/login/login.vue')
    }


]

const router=new VueRouter({
    mode: 'history',
    routes
})
export default router