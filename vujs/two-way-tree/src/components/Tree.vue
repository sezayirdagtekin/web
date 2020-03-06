<template>
  <div class="categoryHierarchy">

    <h1>
      {{name}}
    </h1>
    
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

export default {
  data() {
    return {

    name: 'Airlines',
    parents: [
        {
            'name': 'Aviation',
            'isparent': true
        },
        {
            'name': 'Transparent_companies',
            'isparent': true
        },
        {
            'name': 'Transport_operators',
            'isparent': true
        }
    ],
    children: [
        {
            'name': 'Airline_alliances',
            'isparent': false
        },
        {
            'name': 'Airlines_by_continent',
            'isparent': false
        },
        {
            'name': 'Airlines_by_type',
            'isparent': false
        },
        {
            'name': 'Defunct_airlines',
            'isparent': false
        }
    ]

    }
  },

  created() {
    console.log("created");
  }


}

</script>

<style></style>