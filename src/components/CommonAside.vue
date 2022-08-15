<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#545c71" text-color="#fff" 
  @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <h3 style="margin-top:25px">{{isCollapse ? '后台':'仿制后台管理项目'}}</h3>
   
   <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
    <i :class="'el-icon-'+ item.icon"></i>
    <span slot="title">{{item.label}}</span>
  </el-menu-item>
  <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path"><!--一级菜单-->
    <template slot="title">
      <i :class="'el-icon-'+ item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </template>
    <el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subItem.path"><!--二级菜单-->
 
      <el-menu-item @click="clickMenu(subItem)" :index="subIndex">{{subItem.label}}</el-menu-item>
     
    </el-menu-item-group>
   
  </el-submenu>
 
  
</el-menu>

</template>

<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 800px;
  }
  .el-menu{
    height:100% ;
    border:none;
    h3{
      color:rgb(180, 167, 167);
      text-align:center;
      
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        //isCollapse: true,  //侧边栏是否收缩
        menu:[
            // {
            //   path:'/',
            //   name:'home',
            //   label:'首页',
            //   icon:'s-home',
            //   url:'Home/Home'
            // },
            // {
            //   path:'/mall',
            //   name:'mall',
            //   label:'商品管理',
            //   icon:'video-play',
            //   url:'MallManage/MallManage'
            // },
            // {
            //   path:'/user',
            //   name:'user',
            //   label:'用户管理',
            //   icon:'user',
            //   url:'UserManage/UserManage'
            // },
            // {
            //   label:'其他',
            //   icon:'location',
            //   children:[
            //       {
            //       path:'/page1',
            //       name:'page1',
            //       label:'页面1',
            //       icon:'user',
            //       url:'Other/PageOne'
            //     },
            //     {
            //       path:'/page2',
            //       name:'page2',
            //       label:'页面2',
            //       icon:'setting',
            //       url:'Other/PageTwo'
            //     },
            //   ]
            // }

          ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickMenu(item){
        this.$router.push({
          name:item.name
        })
        this.$store.commit('selectMenu',item)
      }
    },
    computed:{
      noChildren(){
       return this.asyncMenu.filter(item => !item.children)  //menu换成asyncMenu
      },
      hasChildren(){
       return this.asyncMenu.filter(item => item.children)
      },
      isCollapse(){ //收缩侧边栏
        return this.$store.state.tab.isCollapse;
      },
      asyncMenu(){
        return this.$store.state.tab.menu
      }
    }
  }
</script>
