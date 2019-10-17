<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <li v-for="book in books"> {{book.title}} -  {{book.author}}</li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "BookList",

  data() {
    return {
      title: "All Books",
      books: [
        { title: "Anna Karenina", author: "Leo Tolstoy" },
        { title: "Madame Bovary", author: "Gustave Flaubert" },
        { title: "The Stories of Anton Chekhov", author: "Anton Chekhov" }
      ]
    };
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style: none;
  padding: 5px;
  margin: 5px;
}
li {
  display: block;
  margin: 0 10px;
}
</style>