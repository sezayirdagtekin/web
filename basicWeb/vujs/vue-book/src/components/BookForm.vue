<template>
  <div>
    <form v-on:submit.prevent="bookSubmit(bookTitle,bookAuthor)" class action="#" method="post">
      <input v-model="bookTitle" type="text" name="title" value placeholder="Book Title" />
      <input v-model="bookAuthor" type="text" name="author" value placeholder="Book Author" />
      <button type="submit" name="button" class="colorBtn">Add Book</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "BookForm",
  props: ["books"],
  data() {
    return {
      bookTitle: "",
      bookAuthor: ""
    };
  },
  methods: {
    bookSubmit(bookTitle, bookAuthor) {
      this.$emit("addBook", bookTitle, bookAuthor);
    }
  }
};
</script>

<style  scoped>
input[type="text"]:focus {
  background-color: lightblue;
}

.colorBtn {
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  background-color: #4caf50;
  color: white;
}

.colorBtn:hover {
  background-color: tomato; /* Green */
  color: white;
}
</style>