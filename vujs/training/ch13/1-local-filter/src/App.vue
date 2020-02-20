<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Simple filter 1</h1>
        <p>{{ text | toUpperCase }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Hello vue.js filter"
    };
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style></style>
