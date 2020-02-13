<template>
  <div>
    <p>The New Quote</p>
    <button @click="counter++">Increment</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
    created() {
      console.log("Created...");
  },
  destroyed() {
      console.log("Destroyed...");
  },
  deactivated(){
     console.log("Deactivated...");  
  },
  activated(){
      console.log("Activated...");   
  }
};
</script>

<style scoped></style>
