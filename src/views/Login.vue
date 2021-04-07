<template>
  <div class="login-wrapper">
    <div class = "header-wrapper">
      <div class="container">
        <h1 class="pull-left"> 로그인 </h1>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="login-box-wrapper">
        <div class="login-box">
          <form class="login-form" :model="form" onsubmit="return false;">
            <div class="login-header">
              <h2 class="h2-login">로그인</h2>
            </div>
            <div class="input-style">
              <div class="input-image">
                <img src="../assets/id.png">
              </div>
              <input v-model="form.user_id" type="text" class="input-string" placeholder="아이디">
            </div>
            <div class="input-style">
              <div class="input-image">
                <img src="../assets/password.png">
              </div>
              <input v-model="form.password"  type="password" class="input-string" placeholder="비밀번호">
            </div>
            <div class="row">
              <div class="chk">
                <input type="checkbox"> 로그인 상태 유지
              </div>
              <button @click="login" type="submit" class="btn_login">로그인</button>
            </div>
            <div class="login-footer">
              <div v-if="status" class="footer-content" style="color:#E74C3C;">
                {{status}}
              </div>
              <div class="footer-content">
                회원 가입은 <a @click="$router.push('/signin')">여기</a>에서 할 수 있습니다.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapMutations} from "vuex"
import router from "../router/index";
import {userAPI} from "../utils/axios";

export default {
  data(){
    return{
      status : "",
      form : {
        "user_id" : "",
        "password" : ""
      }
    }
  },
  computed: {
    ...mapState(["user"])
  },
  methods:{
    ...mapMutations(["SET_USER"]), 
    async login() {
      const {user_id, password} = this.form;
      console.log(user_id, password)
      console.log(password);
      if(!user_id || !password){
        this.status = "아이디 / 이메일 또는 비밀번호가 잘못되었습니다."
      }
      else{
        const result = await userAPI.login(user_id, password);
        console.log(result);
        if(result.data.status == "ERROR"){
          this.status = "아이디 / 이메일 또는 비밀번호가 잘못되었습니다.";
          this.form.user_id = "";
          this.form.password = "";
        }
        else{
          localStorage.setItem("token", result.data.token);
          this.SET_USER({ id: result.data.id, name: result.data.name });
          router.push("/");
        }
      }
    }
  },
  mounted(){
    if(this.user.name) router.push("/");
    console.log(this.user);
  }
}
</script>

<style>
.header-wrapper{
  overflow: hidden;
  border-bottom: solid 1px #eee;
  background: url("../assets/breadcrumbs.png") repeat;
  padding : 10px 15px 10px 15px;
}
.login-wrapper{
  display:flex;
  flex-direction:column;
}
.login-header{
  margin-bottom: 35px;
  border-bottom: solid 1px #eee;
}
.content-wrapper{
  display:flex;
  justify-content:center;
  border-top: 1px solid #eee;
  padding-bottom: 40px;
}
.container{
    padding-right: auto;
    padding-left: auto;
    margin-right: auto;
    margin-left: auto;
}
.pull-left{
  float : left;
  font-size:22px;
  color:#666;
  margin-top:8px;
  font-weight: normal;
  margin-left : 30px;
}
.login-box-wrapper{
  margin-top:40px;
  width: 360px;
  height: 420px;
  border:1px solid #eee;
  box-shadow: 0 0 3px #eee;
}
.login-box{
  padding : 30px;
}
.h2-login{
  color:#585f69;
  font-weight: normal;
}
.input-style{
  width : 100%;
  display:flex;
  flex-direction:row;
  margin-bottom: 20px;
}
.input-image{
  border:1px solid #ccc;
  width: 46px;
  height: 32px;
  display:flex;
  justify-content:center;
  align-items: center;
}
.input-image  img{
  width : 13px;
  height : 14px;
}
.input-string{
  width:100%;
  border :1px solid #ccc;
  border-left : transparent;
  padding : 6px 12px;
  font-size : 15px;
}
.input-string:focus{
  outline : 1px solid rgb(173, 170, 170);
  box-shadow: 0 0 5px rgb(182, 182, 182);
}
.row{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.btn_login{
  width :63px;
  height : 34px;
  background-color : #0076C0;
  color : white;
  border : 0px;
  font-weight:bold;
  font-size: 14px;
}
.chk{
  font-size : 12px;
}
.login-footer{
  display:flex;
  flex-direction:column;
  justify-self: flex-start;
  align-items: flex-start;
  margin-top : 35px;
  border-top:1px solid #ccc;
  padding-top : 20px;
  font-size : 14px;
}
.footer-content{
  margin-bottom: 10px;
}
.footer-content a{
  text-decoration : none;
  color : #0076C0;
}
@media(min-width: 1200px){
  .container{
    width:1170px;
  }
}
</style>