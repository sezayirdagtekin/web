<template>
  <div>
    <p>
      Server status :<span :class="color">{{ status }}</span>
    </p>
    <button @click="changeStatus">Change status</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: "Critical",
      color: "red"
    };
  },
  methods: {
    changeStatus: function() {
      this.status = "Normal";
      this.color = "green";
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
  margin-left: 5px;
  padding: 5px;
  width: 300px;
}
p {
  font-weight: bold;
}

.red {
  color: red;
}

.green {
  color: green;
}

</style>
