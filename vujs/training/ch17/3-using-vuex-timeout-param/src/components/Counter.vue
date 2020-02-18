<template>
    <div>
        <button class="btn btn-primary" @click="increment({by:10,duration:3000})">Increment</button>
        <button class="btn btn-primary" @click="decrement({by:5,duration:2000})">Decrement</button>
    </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex';
    export default {
        methods: {
            //short way
            ...mapActions(['increment','decrement'])
        }
    }
</script>