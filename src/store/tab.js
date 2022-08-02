export default{ //让侧边栏收缩
    state:{
        isCollapse : false
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        }
    }
}