<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>
      I'm an awesome User! <span :class="color"> {{ name }}</span>
    </p>

    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit
          :userAge="name"
          @ageFromEditPage="editName"
        ></app-user-edit>
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
      name: "Jane",
      color: "green"
    };
  },
  methods: {
    editName(value) {
      this.Name = value;
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
