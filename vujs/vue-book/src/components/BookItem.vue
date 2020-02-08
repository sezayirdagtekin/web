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
td {
  padding: 2px;
  margin: 2px;

}

div {
  padding: 5px;
  margin: 5px;
}
</style>