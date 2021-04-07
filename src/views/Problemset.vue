<template>
  <div>
    <div class="problem-container">
    <ul class="classifier">
      <li>문제</li>
    </ul>

    </div>
  </div>
</template>

<script>
import {userAPI} from "../utils/axios";
export default {
  data(){
    return {
      name : "",
      login_id : "",
      password : "",
      email : "",
    }
  },
  methods:{
  },
  async mounted(){

  }
}
</script>

<style>
.classifier{
  margin-top:20px;
  width: 83.3333%;
}

.problem-container{
  margin-left: auto;
  margin-right: auto;
  padding : 40px 15px 40px 15px;
}
@media(min-width: 768px){
  .problem-container{
    width: 750px;
  }
}
@media(min-width: 992px){
  .problem-container{
    width: 970px;
  }
}
@media(min-width: 1200px){
  .problem-container{
    width: 1170px;
  }
}
</style>