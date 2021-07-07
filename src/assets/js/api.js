import axios from './http';

//接口
const api = {
  tsetaaa(strname){
    return axios.post('/api/index/reportform/accountlist',{strname});
  }
  




}

export default api;


