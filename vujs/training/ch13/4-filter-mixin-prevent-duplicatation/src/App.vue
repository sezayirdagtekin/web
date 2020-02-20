<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <hr />
        <input type="text" v-model="filterText" />
        <ul>
          <li v-for="fruit in filterFruits" :key="fruit">
            {{ fruit }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { FruitMixin } from "./mixin";
export default {
  mixins: [FruitMixin]
};
</script>

<style></style>
