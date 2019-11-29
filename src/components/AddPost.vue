<template>
  <div>
    <h5 v-if="$route.name === 'edit'">Edit post ID:{{post.id}}</h5>
    <h5 v-else>Add a new post</h5>
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
            <button v-if="$route.name === 'edit'" @click="checkForm(); editPost();" type="submit" value="Submit">Edit</button>
            <button v-else @click="checkForm(); addNewPost();" type="submit" value="Submit">Add</button>
            
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
    },
    editPost() {
        if (!this.errors.length) {
        postService.edit(this.post.id, this.post).then(() => {
          this.$router.push("/posts");
          this.post = {};
        });
      }
    }
  },
  created() {
    this.id = this.$route.params.id;
    postService.getId(this.id).then(response => {
      this.post = response.data;
    });
  }
};
</script>
<style>

</style>
