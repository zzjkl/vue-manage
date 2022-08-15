import Cookie from "js-cookie";

export default{ //让侧边栏收缩
    state:{
        isCollapse : false,
        tabsList:[ //记录面包屑
            {
                path:'/home',
                name:'home',
                label:'首页',
                icon:'home'
            }
        ],
        currentMenu :null,  //当前页面
        menu:[]
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state,val){
            if(val.name!== 'home'){
                state.currentMenu = val;
                const result = state.tabsList.findIndex(item=>item.name === val.name);
                if(result === -1){
                    state.tabsList.push(val);
                }
            }else{
                state.currentMenu = null;
            }
        },
        closeTag(state,val){
            const result = state.tabsList.findIndex(item=> item.name === val.name)
            state.tabsList.splice(result,1)
        },
        setMenu(state,val){
            state.menu = val
            Cookie.set('menu',JSON.stringify(val))
        },
        clearMenu(state){
            state.menu = []
            Cookie.remove('menu')
        },
        addMenu(state,router){
            if(!Cookie.get('menu')){
                return
            }
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            const menuArray = []
            menu.forEach(item => {         //menu.array.forEach?
                if(item.children){
                    item.children = item.children.map(item=>{
                        item.component = ()=> import(`../view/${item.url}`)
                        return item
                    })
                    menuArray.push( ...item.children)
                }else{
                    item.component = ()=>import(`../view/${item.url}`)
                    menuArray.push( item)
                }
            });
            //路由的动态添加
            menuArray.forEach(item=>{
                router.addRoute('Main',item)
            })
        }
    }
}