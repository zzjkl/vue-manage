import Vue from "vue"
import Vuex from "vuex"
import tab from './tab'
//控制侧边栏收缩  15
import user from './user'
Vue.use(Vuex)
export default new Vuex.Store({
    modules : {
        tab,
        user
    }
})