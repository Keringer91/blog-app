<template>
  <div>
    <h5>Add new post:</h5>
    <form @submit.prevent>
            <label>Title:</label>
            <input v-model = "post.title" type="text" id="title"><br>
            <label>Text:</label>
            <input v-model = "post.text" type="text" id="text"><br>
            <button @click="addNewPost();" type="submit">Submit</button>
    </form> 
  </div>
</template>

<script>
import { postService } from "../services/Posts";
export default {
  data() {
    return {
      post: {}
    };
  },
  methods: {
    addNewPost() {
        postService.addPost(this.post).then(() => {
          this.$router.push("/posts");
          this.post = {};
        });
    }
  }
};
</script>
<style>

</style>
