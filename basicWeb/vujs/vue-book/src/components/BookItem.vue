<template>
  <div>
    <td>{{book.title}}</td>
    <td>{{book.author}}</td>
  </div>
</template>

<script>
export default {
  name: "BookItem",
  props: ["book"]
};
</script>

<style scoped>

 table {
    border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;
  }
  
  th {
    background-color: #42b983;
    color: rgba(255,255,255,0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  td {
    background-color: #f9f9f9;
  }

    div {
      
    padding: 5px;
    margin: 5px;
}



</style>