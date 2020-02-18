<template>
  <div>
    <p>Counter is: {{ getCounter }}</p>
    <p>Number of click is: {{ getClicks }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed:{
...mapGetters(["getCounter", "getClicks"])
  } 
};
</script>
