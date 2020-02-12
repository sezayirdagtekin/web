<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User age: {{ userAge }}</p>
    <button @click="editAge">Edit age</button>
  </div>
</template>

<script>
export default {
  props: ["userAge"],
  methods: {
    editAge() {
      //this.userAge=30
      this.$emit("ageFromEditPage", 30);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
