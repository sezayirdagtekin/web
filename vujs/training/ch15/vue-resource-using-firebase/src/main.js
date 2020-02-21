import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root='dummyUrl'//chnage this url with actual firebase database url

new Vue({
  el: '#app',
  render: h => h(App)
})
