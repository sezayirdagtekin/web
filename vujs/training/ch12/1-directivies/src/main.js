import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode) {
    //el.style.backgroundColor='green'
    //el.style.backgroundColor=binding.value;
    let delay = 0;
    if (binding.modifiers['delayed']) {
        delay = 3000;
    }

    setTimeout(() => {
      change(el, binding);
    }, delay);


  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})


function change (el, binding) {
  if (binding.arg == 'background') {
    el.style.backgroundColor = binding.value;
  }
  else {
    el.style.color = binding.value;
  }
}

