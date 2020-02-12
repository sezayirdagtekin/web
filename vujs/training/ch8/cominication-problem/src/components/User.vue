<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>
      I'm an awesome User! <span :class="color"> {{ name }}</span>
    </p>
    <button @click="changeName">Change name</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          v-bind:myName="name"
          @fromChield="updateParentName"  :clearFn="clear" :userAge="age"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age" @ageFromEditPage="editAge"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data() {
    return {
      name: "sezayir",
      age:27,
      color: "green"
    };
  },
  methods: {
    changeName() {
      this.name = "Anna"
      this.color='green'
    },
    updateParentName(value) {
        console.log("value:"+value)
      this.name = value
      this.color='red'
    },
    clear(){
        console.log('clear..')
        this.name=''
    },
    editAge(value){
        this.age=value
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
.red {
  font-weight: bold;
  color: red;
}

.green {
  font-weight: bold;
  color: green;
}
</style>
