<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User name: {{ name }}</p>
    <p>User from event bus age: {{ age }}</p>
    <input type="text" v-model="name" />
    <button @click="editName">Edit Name</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      name: "",
      age: 0
    };
  },
  props: ["userAge"],
  methods: {
    editName() {
      console.log("editName...")
     eventBus.$emit("nameWasEdited", this.name);
    }
  },
  created() {
    eventBus.$on("ageWasEdited", data => {
      this.age = data;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
