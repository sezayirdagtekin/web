<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User name: {{ name }}</p>
    <input type="text" v-model="name" />
    <button @click="editName">Edit Name</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      name: ''
    };
  },
  props: ["userAge"],
  methods: {
    editName() {
      eventBus.$emit("nameFromEditPage", this.name);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
