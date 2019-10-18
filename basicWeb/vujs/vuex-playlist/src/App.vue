<template>
  <div id="app">
    <img src="./assets/logo.png" />

    <product-list-one v-bind:saleProducts="products"></product-list-one>
    <product-list-two v-bind:saleProducts="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from "./components/ProductListOne.vue";
import ProductListTwoVue from "./components/ProductListTwo.vue";

export default {
  name: "app",
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwoVue
  },
  data() {
    return {

      products: [
        { name: "Banana", price: 20 },
        { name: "Shiny Star", price: 40 },
        { name: "Red shells", price: 10 }
      ]
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
