<template>
  <div>
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{ product.name }}</span>
        <span class="price">£{{ product.price }}</span>
      </li>
    </ul>

    <button v-on:click="reducePrice(3)"> Reduce Price</button>

  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    saleProducts() {
      return this.$store.getters.saleProducts;

    }
  }
  ,
methods: {
    reducePrice(amount){
      this.$store.dispatch('reducePrice',amount);
    }
},
};
</script>

<style scoped>
div {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
ul {
  padding: 0;
}
li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>