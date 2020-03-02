<template>
  <div class="categoryHierarchy">
    
    <ul>
         <li v-for="parent in parents" :key="parent.name"> {{parent.name}} </li>
    </ul>
<hr>

<!--
     <ul>
         <li v-for="child in children" :key="child.name"> {{child.name}} </li>
    </ul>
    -->
    
  </div>



</template>

<script>
import $ from 'jquery'
import { FruitMixin } from "./../mixin/mixin";

export default {

  mixins: [FruitMixin],
  created() {
    console.log("created");
  }


}

</script>

<style></style>