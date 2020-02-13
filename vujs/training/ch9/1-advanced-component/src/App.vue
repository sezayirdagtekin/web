<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
        <h2> {{title}}</h2>
        <p> That is wonderful</p>
         </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./component/Quote.vue";

export default {
  components: {
    appQuote: Quote
  },

  data() {
    return {
      title: "This is slot example!"
    };
  }
};
</script>

<style scoped>


</style>
