<template>
<el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
        <el-card shadow="hover">
            <div class="user">
                <img  :src="userImg"/>
                <div class="userinfo">
                    <p class="name">Admin</p>
                    <p class="access">超级管理员</p>
                    
                </div>
                
            </div>
                <div class="login-info">
                    <hr>
                    <p>上次登录时间：<span>2022-6-18</span></p>
                    <p>上次登录地点：<span>汕头</span></p>
                </div>
        </el-card>
    </el-col>
</el-row>
</template>
<script>
export default{
    name : 'Home',
    data(){
        return{
            userImg: require('../../assets/images/1.png')
        }
    }
}

</script>
<style lang="less" scoped>
.user{
        display: flex;
        width: auto;
        height: 100px;
    }
.user>img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        
}
.userinfo>p{
    padding-left: 40px;
    
    text-align: center;
}
.name{
    font-size: large;
    font-weight: bold;
}
.access{
    font-size: small;
    color: #a4a49f;
}
.login-info>p{
    color: #cccccc;
}
.login-info>p>span{
    color:#343434;
    padding-left: 20px;
}
</style>