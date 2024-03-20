import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        counter: 10,
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
        getCount(state) {
            return state.counter;
        }
    }
})

export default store;