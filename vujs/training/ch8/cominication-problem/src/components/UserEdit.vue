<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User age from call back: {{ userAge }}</p>
    <p>User age from event bus: {{ age }}</p>
    <button @click="editAge">Edit age</button>
  </div>
</template>

<script>
import  {eventBus} from  '../main'

export default {
    data() {
        return {
            age: 0
        }
    },
  props: ["userAge"],
  methods: {
    editAge() {
     this.age=40;
      //this.$emit("ageFromEditPage", 30); //old way-callback function
      eventBus.$emit("ageFromEditPage", this.age);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
