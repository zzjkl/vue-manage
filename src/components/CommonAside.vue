<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#545c71" text-color="#fff" 
  @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <h3 style="margin-top:25px">{{isCollapse ? '后台':'仿制后台管理项目'}}</h3>
   <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
    <i :class="'el-icon-'+ item.icon"></i>
    <span slot="title">{{item.lable}}</span>
  </el-menu-item>
  <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path"><!--一级菜单-->
    <template slot="title">
      <i :class="'el-icon-'+ item.icon"></i>
      <span slot="title">{{item.lable}}</span>
    </template>
    <el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subItem.path"><!--二级菜单-->
      <span slot="title">分组一</span>
      <el-menu-item :index="subIndex">{{subItem.label}}</el-menu-item>
     
    </el-menu-item-group>
   
  </el-submenu>
 
  
</el-menu>

</template>

<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    min-height: 400px;
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
            {
              path:'/',
              name:'home',
              lable:'首页',
              icon:'s-home',
              url:'Home/Home'
            },
            {
              path:'/mall',
              name:'mall',
              lable:'商品管理',
              icon:'video-play',
              url:'MallManage/MallManage'
            },
            {
              path:'/user',
              name:'user',
              lable:'用户管理',
              icon:'user',
              url:'UserManage/UserManage'
            },
            {
              lable:'其他',
              icon:'location',
              children:[
                  {
                  path:'/page1',
                  name:'page1',
                  lable:'页面1',
                  icon:'seeting',
                  url:'Other/PageOne'
                },
                {
                  path:'/page2',
                  name:'page2',
                  lable:'页面2',
                  icon:'seeting',
                  url:'Other/PageTwo'
                },
              ]
            }
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
      }
    },
    computed:{
      noChildren(){
       return this.menu.filter(item => !item.children)
      },
      hasChildren(){
       return this.menu.filter(item => item.children)
      },
      isCollapse(){ //收缩侧边栏
        return this.$store.state.tab.isCollapse;
      }
    }
  }
</script>
