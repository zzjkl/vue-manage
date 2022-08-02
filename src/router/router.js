import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from'../view/Main.vue'
Vue.use(VueRouter)

const routes =[
    {
    path: '/',
    name: 'Main',
    component : ()=> import('../view/Main.vue'),
    children : [
        {
            path:'/home',
            name: 'home',
            component : ()=> import('../view/home')
        },
        {
            path:'/user',
            name: 'user',
            component : ()=> import('../view/User')
        }
        
    ]
    },



]

const router=new VueRouter({
    mode: 'history',
    routes
})
export default router