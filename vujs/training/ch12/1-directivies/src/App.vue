<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Some text'"></p>
                <p v-html="'<strong>Some html </strong>'"> </p>
            </div>
        </div>

         <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custome Directives</h1>
                 <p v-highlight:background="'green'">some custome directive one</p>
                  <p v-highlight:background.delayed="'red'">some custome directive second</p>
                 <p v-highlight="'red'">some custome directive third </p>
              
            </div>
        </div>

    </div>
</template>

<script>
    export default {
    }
</script>

<style>

</style>
