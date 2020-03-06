<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-data></app-data>
      </div>
    </div>
  </div>
</template>

<script>
import Tree from "./components/Tree.vue";

export default {
  created() {
    console.log("created");
  },

  components: {
    appData: Tree
  }
};
</script>

<style>
div.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
