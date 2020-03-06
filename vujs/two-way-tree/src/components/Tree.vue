<template>
  <div class="categoryHierarchy">

    <h1>
      {{name}}
    </h1>
    <!--
    <ul>
         <li v-for="parent in parents" :key="parent.name"> {{parent.name}} </li>
    </ul>
<hr>


     <ul>
         <li v-for="child in children" :key="child.name"> {{child.name}} </li>
    </ul>
    -->
    
  </div>



</template>

<script>
import $ from 'jquery'

export default {
  data() {
    return {
      name: '2 way data tree'
    }
  },

  created() {
    console.log("created");
  }


}

</script>

<style></style>