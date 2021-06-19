import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showProfile: false
  },
  mutations: {
    toggleProfile(state, bool) {
      state.showProfile = bool
    }
  },
  actions: {},
  modules: {},
});
