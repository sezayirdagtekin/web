<template>
    <div class="container">
         <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custome Directives</h1>
                 <p v-localHighlight:background="'green'">some custome directive one</p>
                <p v-localHighlight:background.delayed="'red'">some custome directive second</p>
                 <p v-localHighlight="'red'">some custome directive third </p>
              
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        directives:{
            'localHighlight':{
                bind(el,binding,vnode){
                    let delay = 0;
                    if (binding.modifiers['delayed']) {
                        delay = 3000;
                    }
                    setTimeout(() => {
                        change(el, binding);
                    }, delay);
                }
            }
        }
    }


function change (el, binding) {
  if (binding.arg == 'background') {
    el.style.backgroundColor = binding.value;
  }
  else {
    el.style.color = binding.value;
  }
}
</script>

<style>

</style>
