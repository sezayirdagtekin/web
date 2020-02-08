<template>
  <div align="center">
    <h1>{{title}}</h1>

    <book-form @addBook="appendBook"></book-form>
    <hr />
    <table>
      <tr v-for="book in books">
        <book-item :book="book"></book-item>
      </tr>
    </table>
  </div>
</template>

<script>
import BookItem from "./BookItem";
import BookForm from "./BookForm";

export default {
  name: "BookList",
  components: {
    BookItem,
    BookForm
  },

  data() {
    return {
      title: "All Books",
      books: [
        { title: "Self-Reliance", author: "Ralph Waldo Emerson" },
        { title: "American Gods", author: "Neil Gaiman" },
        { title: "Amusing Ourselves to Death", author: "Neil Postman" }
      ]
    };
  },
  methods: {
    appendBook(bookTitle, bookAuthor) {
      this.books.push({ title: bookTitle, author: bookAuthor });
    }
  }
};
</script>

<style scoped>

  table {
    border: 2px solid #42b983;
    border-radius: 3px;
    background-color: #fff;  
  }



h1,h2 {
  font-weight: normal;
}

</style>