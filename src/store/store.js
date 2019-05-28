import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import getters from './getters/';
import mutations from './mutations/';
import actions from './actions/';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  plugins: [vuexLocal.plugin],
  state: {
    products: [
      {name: 'Banana Skin', price: 20},
      {name: 'Shiny Star', price: 40},
      {name: 'Green Shells', price: 60},
      {name: 'Red Shells', price: 80}
    ],
    events: []
  },
  getters,
  mutations,
  actions
});
