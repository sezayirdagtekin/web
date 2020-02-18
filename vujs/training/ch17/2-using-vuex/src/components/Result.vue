<template>
    <p>Counter is: {{ getCounter }}</p>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
       computed:{
           ...mapGetters(['getCounter','getClicks'])
       }
       
    }
</script>