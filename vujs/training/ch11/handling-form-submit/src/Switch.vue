<template>
  <div>
    <div id="on" @click="switched(true)" :class="{ active: isOn }">On</div>
    <div id="off" @click="switched(false)" :class="{ active: !isOn }">Off</div>
  </div>
</template>

<script>

import {eventBus} from './main'

export default {

  data() {
    return {
      isOn: false
    }
  },
  methods: {
      switched(value) {
          console.log("switched!..."+value);
          this.isOn=value;
          eventBus.$emit('callEventBus',this.isOn);
          
      }
  },
};
</script>

<style scoped>
#on,
#off {
  width: 40px;
  height: 20px;
  background-color: lightgray;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
}

#on:hover,
#on.active {
  background-color: lightgreen;
}

#off:hover,
#off.active {
  background-color: lightcoral;
}
</style>
