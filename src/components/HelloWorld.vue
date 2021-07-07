<template>
  <div class="xingc">
    <!-- 导航栏 -->
    <van-nav-bar
      title="行程详情"
      left-text=""
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 用户信息 -->
    <div class="yh">
      <div class="yhimg">
        <van-image
          width="1.48rem"
          height="1.48rem"
          fit="contain"
          :round="true"
          :src="imgurl"
        />
      </div>
      <div class="yhnr">
        <p class="yhname">李师傅</p>
        <p class="yhcp">粤AS12346 北汽新能源EU5白色</p>
        <p class="yhpf">评分：4.9分</p>

      </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgurl:require('@/assets/img/tu1.jpg')
    }
  },
  methods:{
    testaaa(){
      this.$api.tsetaaa("womden").then(res => {
        console.log(res);
      })
    },
    onClickLeft(){

    },
    onClickRight(){

    }
  }
}
</script>

<style lang="less">
  .xingc{
    width: 100%;
    height: 1rem;
    border: 1px solid red;

    background: #F2F2F2;
    height: 100vh;
  }
  .van-nav-bar__title{
    font-size: 0.4rem;
    font-family:"Source Han Sans CN",Georgia,Serif;
    font-weight: 500;
    opacity: 1;
  }
  .van-nav-bar .van-icon{
    color: #000000;
    font-size: 0.4rem;
  }
  
  .van-nav-bar{
    background-color: #F2F2F2;
  }
  .yh{
    width: 7.1rem;
    height: 2.28rem;
    background: #FFFFFF;
    opacity: 1;
    border-radius: 0.16rem;
    margin-left: 0.2rem;
  }
  .yhimg{
    width: 1.48rem;
    height: 1.48rem;
    background: rgba(0, 0, 0, 0);
    border-radius: 50%;
    opacity: 1;
    margin: 0.4rem 0.28rem;
    float: left;
  }
  .yhnr{
    width: 5rem;
    float: left;
    height: 1.48rem;
    margin: 0.4rem 0rem;
  }
  .yhname{
    width: 100%;
    height: 0.36rem;
    font-size: 0.36rem;
    font-family:"Source Han Sans CN",Georgia,Serif;
    font-weight: 500;
    line-height: 0.62rem;
    color: #333333;
    opacity: 1;
    float: left;
  }
  .yhcp{
    width: 100%;
    height: 0.28rem;
    font-size: 0.28rem;
    font-family:"Source Han Sans CN",Georgia,Serif;
    font-weight: 400;
    line-height: 0.48rem;
    color: #333333;
    opacity: 1;
    float: left;
    margin-top: 0.14rem;
  }
  .yhpf{
    width: 100%;
    height: 0.24rem;
    font-size: 0.24rem;
    font-family:"Source Han Sans CN",Georgia,Serif;
    font-weight: 400;
    line-height: 0.4rem;
    color: #333333;
    opacity: 1;
    float: left;
    margin-top: 0.18rem;
  }
</style>

