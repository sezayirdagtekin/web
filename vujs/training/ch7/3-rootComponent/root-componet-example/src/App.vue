<template>
  <div id="app">
    <h1> Server status: {{status}} </h1>   
    <h1> Ip:{{ip}}</h1>   
  </div>
</template>

<script>
export default{
  data: function(){
      return {
       status:'Critical',
       ip:'192.10.23.54'
      }
    }
}

</script>

<style>

</style>
