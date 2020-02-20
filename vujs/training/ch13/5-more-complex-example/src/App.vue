<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h2>Filters & Mixins main</h2>
                <p>Local Filter use upper case:{{ text | toUppercase }}</p>
                <p>Global Filter use lower case:{{ text | to-lowercase }}</p>
                <hr>
                <label>New fruit:</label>
                <input type="text" v-model="item"/>
                <button @click="add">Add</button>

                <label>Filter</label>
                <input v-model="filterText">               
               
               <!--List fruits -->
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import SecondFilter from './SecondFilter.vue';
    import { fruitMixin } from './fruitMixin';

    export default {
        mixins: [fruitMixin],
        data() {
            return {
                text: 'Hello Vue!',
                item:''
            }
        },
        methods: {
            add() {
               this.fruits.push(this.item) 
            }
        },
        filters: { //Loacal Filter
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        components: {
            appList: SecondFilter
        }
    }
</script>

<style>
</style>
