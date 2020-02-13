<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>User name from eventBus: {{ name }}</p>
    <p>user age: {{ age }}</p>
    <button @click="change">Change age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      name: "",
      age: 27
    };
  },

  methods: {
    change() {
      console.log("change..");
      eventBus.changeAge(this.age);
    }
  },
  created() {
    console.log("created in user detail...");
    eventBus.$on("nameWasEdited", data => {
      this.name = data;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
