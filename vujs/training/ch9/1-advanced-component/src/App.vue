<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr />
        <p>{{ selectedComponent }}</p>
        <!-- //1. simple slot example. To see please open
        <app-quote>
        <h2 slot="title"> {{title}}</h2>
        <p> That is wonderful</p>
         </app-quote>
 -->
        <!-- 2. Created and destroyed component .To see please open
    <component :is="selectedComponent">
        <p> Default content</p>
    </component>

-->
        <keep-alive>
          <component :is="selectedComponent">
            <p>Default content</p>
          </component>
        </keep-alive>
        
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./component/Quote.vue";
import Author from "./component/Author.vue";
import New from "./component/New.vue";

export default {
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  },

  data() {
    return {
      title: "This is slot example!",
      selectedComponent: "appQuote"
    };
  }
};
</script>

<style scoped></style>
