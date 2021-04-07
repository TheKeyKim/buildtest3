<template>
  <div class="home-wrapper">
    <el-carousel height="450px">
      <el-carousel-item v-for="item in items" :key="item.id">
        <div class="item">
          <div v-bind:style="{ backgroundImage:'url(' + item.img + ')', 
          backgroundPosition:'center',
          backgroundSize:'cover',
          height:'500px',
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
          }">
            <div class="textbox">
              {{item.text}}
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="title-wrapper">
        <div style="display:flex; align-items:center; flex-direction:column">
        <h2 style="margin-bottom:2px">Thekey Online Judge</h2>
        <div style="border:1px solid #555555; width:70px;"></div>
        <div style="margin-top:20px;">프로그래밍 문제를 풀고 온라인으로 채점받을 수 있는 곳입니다.</div>
      </div>
    </div>
    <div class="problem-status-wrapper">
      <div class="home-container-wrapper">
        <div v-for="p in problems" :key="p.id" class="home-container">
            <span>{{p.tot}}</span>
            <h4>{{p.text}}</h4>
        </div>
      </div>
    </div>
    <div class="problems-wrapper">
      <div>
      업데이트 예정입니다.
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
      items : [
        {
          id : 0,
          text : "The Key's Judge",
          src : "home_0.jpg",
          img : ""
        },
        {
          id : 1,
          text : "본 페이지는 BOJ의 클론 사이트입니다.",
          src : "home_1.png",
          img : ""
        },
      ],
      problems : [
        {
          tot : 1,
          text : "전체 문제 s"
        },
        {
          tot : 2,
          text : "채점 가능한 문제"
        },
        {
          tot : 3,
          text : "풀린 문제"
        },
        {
          tot : 4,
          text : "채점 가능한 언어"
        },
      ]
    }
  },
  mounted(){
    for(var i = 0; i < this.items.length; i++){
      var tmp = this.items[i].src;
      this.items[i].img = require('@/assets/'+tmp);
    } 
  }
}

</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .home_wrapper{
    display:flex;
  }
  .title-wrapper{
    padding-top:60px;
    padding-bottom: 60px;
  }

  .problem-status-wrapper{
    height:245px;
    background-image: url('../assets/home_pattern.png');
    background-repeat: repeat;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .home-container-wrapper{
    margin-left: auto;
    margin-right: auto;
      display:flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .home-container{
    border: solid 1px #555;
    color : white;
    width : 25%;
    margin:15px;
    margin-top: 60px;
    margin-bottom: 60px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
  }
  .home-container > span{
    font-size:50px;
    margin-top:15px;
  }
  .home-container > h4{
    margin-top:10px;
    color:#BBBBBB;
  }

  .problems-wrapper{
    height:245px;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .textbox{
    margin : 30px;
    font-size: 50px;
    color:white;
    font-weight: bold;
  }



  @media(min-width: 768px){
    .home-container-wrapper{
      width: 750px;
    }
  }
  @media(min-width: 992px){
    .home-container-wrapper{
      width: 970px;
    }
  }
  @media(min-width: 1200px){
    .home-container-wrapper{
      width: 1170px;
    }
  }
</style>