import Vue from 'vue'
import App from './App.vue'
import ElementUI, { Message, MessageBox } from 'element-ui';
//import { Button ,Radio}from'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'

import router from './router/router.js'
import store from './store'
import http from 'axios'
import '../api/mock.js'

Vue.config.productionTip = false
Vue.use(ElementUI);
//Vue.use(Button)
Vue.prototype.$http = http
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

router.beforeEach((to, from, next) => {
  store.commit('getToken')
  const token = store.state.user.token
  if(!token && to.name !== 'login'){
    next({name : 'login'})
  }else if(token && to.name === 'login'){
    next({name : 'home'})
  }else{
    next()
  }  
})

new Vue({
  store,
  router,
  render: h => h(App),
  created(){
    this.$store.commit('addMenu',router)
  }
}).$mount('#app')
