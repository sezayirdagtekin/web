import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

 export const store= new Vuex.Store({
    state: {
        products: [
            {name: 'Banana Skin', price: 20},
            {name: 'Shiny Star', price: 40},
            {name: 'Green Shells', price: 60},
            {name: 'Red Shells', price: 80}
        ]
    },
    getters: {
        saleProducts: state => {
            var sales = state.products.map(product => {
                return {
                  name: "**" + product.name + "**",
                  price: product.price / 2
                };
              });
        
              return sales;

        }
    },
    mutations: {
        reducePrice:(state,payload) => {
            state.products.forEach(element => {
            element.price=element.price-payload
            
          });
    }
    },

    actions: {
        reducePrice:(context,payload)=>{
            setTimeout(function () {
                context.commit('reducePrice',payload);
                
            },3000)
        }
    }


 });
 