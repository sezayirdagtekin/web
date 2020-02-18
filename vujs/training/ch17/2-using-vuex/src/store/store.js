import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    getCounter: state => {
      return state.counter * 2;
    },
    getClicks: state => {
      return state.counter + " clicks";
    }
  },
  mutations: {
    increment: state => {
      state.counter++;
    },
    decrement: state => {
      state.counter--;
    }
  },
  actions:{
      increment:context=>{
          context.commit('increment');
      },
      decrement:({commit})=>{ //es 6 syntax
        commit('increment');
    },



  }

});
