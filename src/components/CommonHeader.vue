<template>
    <header>
        <div class="l-content" >
            <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini" style="float:left;"></el-button>
            <h3 style="color:white;padding-left: 5px;">首页</h3>
        </div>
        <div class="r-content">
            <el-dropdown trigger="click" size="mini">
                <span>
                    <img  class="user" :src="userImg">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>
<script>
export default{
    name: 'CommonHeader',
    data() {
        return{
            userImg : require("../assets/images/1.png"),
        }
    },
    methods : {
        handleMenu() {
            this.$store.commit('collapseMenu')
        }
    }
}
</script>
<style lang="less" scoped>
header{
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}
.l-content{
    display: flex;
    align-items: center;
   
}
.r-content{
    .user{
        width: 55px;
        height: 55px;
        border-radius: 50%;
    }
}
</style>