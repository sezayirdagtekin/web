<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>User name from eventBus: {{ name }}</p>
  </div>
</template>

<script>
import  {eventBus} from  '../main';

export default {
    data() {
        return {
            name: ""
        }
    },

  methods: {

  },
  created() {
      eventBus.$on("nameFromEditPage",(data)=>{
      this.name=data;   
      });
  }

};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
