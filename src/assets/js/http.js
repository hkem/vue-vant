import axios from 'axios'
import {Toast} from 'vant'
import qs from 'qs'
import url from './domain'

//请求中状态参数
let loadingStatus = 0; //0正常 1请求中

/**
 * toast提示
 */
 const toastTip = msg => {
  // console.log(msg)
  Toast({
    message:msg,
    duration:1000,
    forbidClick:true
  })
}

//配置请求
const instance = axios.create({
  method:"POST",
  baseURL:url,
  timeout:3000,
  headers:{
    'Content-Type':'application/X-WWW-FORM-URLENCODED'
  }
})


//请求拦截
instance.interceptors.request.use(config => {
  //请求中弹窗
  if(loadingStatus == 0){
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner',
    })
  };
  //更改请求状态
  loadingStatus++;
  //获取token
  const token = localStorage.getItem("tokem");
  if(token){
    config.headers.token = token;
  }

  //序列化请求参数
  config.data = qs.stringify(config.data);
  return config;
},error=>{
  Promise.reject(error); //异步输出
  loadingStatus--;
  loadingStatus == 0 ?Toast.clear() : "";
}
)

//响应拦截器
instance.interceptors.response.use(
  response => {
    //关闭提示
    loadingStatus--;
    loadingStatus == 0?Toast.clear():"";
    //判断响应的状态
    if(response.status === 200){
      //请求通过  判断api接口返回状态
      if(response.data.code == 1){
        return Promise.resolve(response.data);
      }else if(response.data.code == 10){
        //重新登录页面
        return Promise.resolve(response.data)
      }else{
        //错误提示
        toastTip(response.data.msg);
      }
    }else{
      return Promise.resolve(response.data);
    }
  },error=>{
    loadingStatus--;
    loadingStatus==0?Toast.clear():''
    if(error.response) {
      //跳转到xx页面
      // toastTip(response.data.msg);
      return Promise.reject(error.response);
    }else{
      toastTip("网络错误");
    }
  }
)

export default instance;







