<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
        <h2> This is lote example</h2>
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
      quote: "a wonderfull quote"
    };
  }
};
</script>

<style></style>
