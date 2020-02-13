import Vue from 'vue'
import App from './App.vue'

export  const eventBus= new Vue({
  methods: {
    changeAge(data) {
      this.$emit("ageWasEdited",data); 
    }
  },
  
});

new Vue({
  el: '#app',
  render: h => h(App)
})


