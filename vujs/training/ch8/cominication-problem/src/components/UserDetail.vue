<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User name: {{ myName }}</p>
    <p>Reverse name: {{ reverseName() }}</p>
    <p>User age call back: {{ userAge }}</p>
    <p>User age from eventBus: {{ age }}</p>
    <button @click="sendParent">Send parent</button>
    <button @click="clearFn()">Clear</button>
  </div>
</template>

<script>
import  {eventBus} from  '../main';

export default {
    data() {
        return {
            age: 0
        }
    },

  /*1. option use arrays
    props:['myName'],
    */

  //2. option use object. define type
  props: {
    myName: String,
    userAge: Number,
    clearFn: Function // comination with call back
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

  methods: {
    reverseName() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    },
    sendParent() {
      this.$emit("fromChield", "Cemil");
      console.log("message emit from child component");
    }
  },
  created() {
      eventBus.$on("ageFromEditPage",(data)=>{
      console.log("user detail created method..listen event bus:"+data);
      this.age=data;
   
      });
  }


};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
