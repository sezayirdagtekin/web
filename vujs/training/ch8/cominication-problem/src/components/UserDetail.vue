<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{myName}} </p>
        <p>Reverse name: {{  reverseName()}} </p>
        <button  @click="sendParent">Send parent</button>

    </div>
</template>

<script>

export default{

    /*1. option use arrays
    props:['myName'],
    */

 //2. option use object
    props:{
        myName:String // define type
    },
    /* 3. option- (doesn't  work for sending data from  chield to parent)
    props:{
        myName:{
            type:String,
            required:true
            // default:'Jane'
            }
        },
    */

    methods:{
        reverseName(){
            return this.myName.split("").reverse().join("");
        },
        sendParent() {
          this.$emit("fromChield", "Cemil");
          console.log('message emit from child component')
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
