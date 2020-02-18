import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    getCounter: state => {
      return state.counter;
    },
    getClicks: state => {
      return state.counter + " clicks";
    }
  },
  mutations: {
    increment: (state, payload) => {
      setTimeout(() => {
        state.counter += payload.by;
      }, payload.duration);
    },

    decrement: (state, payload) => {
      setTimeout(() => {
        state.counter -= payload.by;
      }, payload.duration);
    }
  },
  actions: {
    increment: (context, payload) => {
      context.commit("increment", payload);
    },
    decrement: ({ commit }, payload) => {
      commit("decrement", payload); //es 6 syntax
    }
  }
});
