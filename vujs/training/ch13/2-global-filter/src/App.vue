<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h2>Global filter example</h2>
        <p>{{ text | toLowerCase }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "HELLO VUE.JS FILTER"
    };
  }
};
</script>

<style></style>
