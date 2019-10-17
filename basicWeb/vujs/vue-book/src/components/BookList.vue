<template>
  <div align="center">
    <h1>{{title}}</h1>

    <book-form @addBook="appendBook"></book-form>
    <hr />
    <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Author</th>     
        </tr>
      </thead>
      <tbody>
      <tr v-for="book in books">
        <book-item :book="book"></book-item>
      </tr>
     </tbody>
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
  
  th {
    background-color: #42b983;
    color: rgba(255,255,255,0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  td {
    background-color: #f9f9f9;
  }
  
  th, td {
    min-width: 120px;
    padding: 10px 20px;
  }

h1,
h2 {
  font-weight: normal;
}

</style>