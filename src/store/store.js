import Vue from 'vue';
import Vuex from 'vuex';
import searchPage from './modules/search-page';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { searchPage }
});
