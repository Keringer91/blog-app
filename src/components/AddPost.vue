<template>
  <div>
    <h5>Add new post:</h5>
    <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul  v-for="(error, index) in errors" :key="index">
            <li>{{ error }}</li>
        </ul>
    </p>
    <form @submit.prevent >
            <label>Title:</label>
            <input v-model = "post.title" type="text" id="title" :minlength="2"><br>
            <label>Text:</label>
            <textarea v-model = "post.text" type="text" id="text"></textarea><br>
            <input type="button" value="Reset Form" onClick="this.form.reset()"/><br>
            <button @click="checkForm(); addNewPost();" type="submit" value="Submit">Submit</button>
    </form> 
  </div>
</template>

<script>
import { postService } from "../services/Posts";
export default {
  data() {
    return {
      post: {},
      errors: []
    };
  },
  methods: {
    checkForm() {
       this.errors = [];

      if (!this.post.title) {
        this.errors.push("Title required.");
      }
      else if (this.post.title.length <2) {
        this.errors.push("Title should be at least 2 character long.");
      }
      if (!this.post.text) {
        this.errors.push('Content required.');
      }
      else if (this.post.text.length > 300) {
        this.errors.push("Content cant be longer than 300 characters");
      } 
    },
    addNewPost() {
     
      if (!this.errors.length) {
        postService.addPost(this.post).then(() => {
          this.$router.push("/posts");
          this.post = {};
        });
      }
    }
  }
};
</script>
<style>

</style>
