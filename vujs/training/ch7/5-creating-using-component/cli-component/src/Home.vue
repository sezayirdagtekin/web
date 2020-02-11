<template>
  <div>
    <app-server-status   v-for="server in 3" :key="server.status" ></app-server-status>
  </div>
</template>

<script>
import ServerStatus from "./ServerStatus";

export default {
  components: {
    "app-server-status": ServerStatus
  }
};
</script>


