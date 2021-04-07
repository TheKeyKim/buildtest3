<template>
    <div class="nav-wrapper">
        <div v-if="user.name" class="topbar">
            <div>{{user.name}}</div>
            |
            <div @click="$router.push('/')">설정</div>
            |
            <div @click="SET_LOGOUT">로그아웃</div>
        </div>
        <div v-else class="topbar">
            <div @click="$router.push('/signin')">회원가입</div>
            |
            <div @click="$router.push('/login')">로그인</div>
        </div>
        <div class="nav-wrapper-prime">
            <el-menu :default-active="activeIndex" class="el-menu-demo nav" mode="horizontal" @select="handleSelect"
            text-color=#687674
            active-text-color=#0076C0
            >
            <el-menu-item index="1" @click="$router.push('/')" style="border-bottom: transparent">
                <a >
                    <img class="logo" src="../assets/logo.png">
                </a>
            </el-menu-item>
            <el-menu-item class="nav-menu" id="problemset" index="2" @click="$router.push('/problemset')">
                문제집
            </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
    data(){
        return {};
    },
    computed: {
        ...mapState(["user"]),
    },
    methods : {
        ...mapMutations(["SET_LOGOUT"])
    }
}
</script>

<style>
.nav-wrapper-prime{
    display:flex;
    justify-content:center;
    align-items:center;
    border-bottom:1px solid #eee;
    padding-top:15px;
}
.nav{
    width : 1170px;
    margin-left : auto;
    margin-right : auto;
    border-bottom:1px solid transparent;
}
.logo {
    height: 60px;
}
.nav-wrapper {
    display:flex;
    flex-direction:column;
}
#problemset{
    padding: 9px 20px 9px 15px;
    font-size : 20px;
}
.topbar{
    position: absolute;
    z-index : 8;
    top : 10px;
    right : 15px;
    margin-right: 132px;
    color : #7c8082;
    font-size:11px;
    display:flex;
}
.topbar div {
    padding:0px 10px 0px 10px;
    cursor:pointer;
}
.topbar div:hover{
    text-decoration:underline;
}
@media(max-width:700px){
    .topbar{
        margin-right: 10px;
    }
}
</style>