import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    selectedFilter: 'add',
  },
  actions: {
    inc(context) {
      console.log(context);
      context.commit('updateCounter', 1);
    },
    dec(context) {
      console.log(context);
      context.commit('updateCounter', -1);
    }
  },
  mutations: {
    updateCounter(state, delta) {
      state.counter += delta;
    }
  },
  getters: {
    getSelectedFilter(state) {
      return state.selectedFilter;
    },
    getCounter(state) {
      return 3;
    }
  }
})

export default store;