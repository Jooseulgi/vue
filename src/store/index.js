import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//스토어에 정보를 담아서 부모 컴포넌트에 보내는방법
export default new Vuex.Store({
  //여러 컴포넌트가 공유되는 데이터
  state: {
    username: '',
  },
  getters: {
    isLogin(state) {
      return state.username != '';
    },
  },
  //state의 데이터를 바꾸는것
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
  },
});
