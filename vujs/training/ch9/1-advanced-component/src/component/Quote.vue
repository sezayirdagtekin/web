<template>
  <div>
    <div class="titleStyle">
      <slot name="title"></slot>
    </div>
    <div>
      <slot></slot>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 20px;
  margin: 5px auto;
  text-align: center;
}

h2 {
  color: red;
}
.titleStyle{
    font-style: italic;
    color:blue;
}
</style>
