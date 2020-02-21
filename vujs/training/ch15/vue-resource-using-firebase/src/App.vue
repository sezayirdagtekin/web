<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input class="form-control" type="text" v-model="user.name" />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input class="form-control" type="text" v-model="user.email" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr />
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="user in users" :key="user.name">
            {{ user.name }}- {{ user.email }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: ""
      },
      users: []
    };
  },
  methods: {
    submit() {
      this.$http
        .post("dummyUrl/data.json", this.user)
        .then(
          reponse => {
            console.log(reponse);
          },
          error => {
            console.log(error);
          }
        );
    },
    fetchData() {
      this.$http
        .get("dummyUrl/data.json")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.users = resultArray;
        });
    }
  }
};
</script>

<style></style>
