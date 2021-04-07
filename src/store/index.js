import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({
    // user라는 값만 새로고침해도 유지 할 수 있도록 
    paths:['user']
  })],
  state: {
    user: {},
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data;
    },
    SET_LOGOUT(state, data) {
      state.user = {};
      localStorage.removeItem("token");
    },
  },
  actions: {},
  modules: {},
});