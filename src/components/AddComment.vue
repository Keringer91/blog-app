<template>
  <div>
    <h5>Leave a comment</h5>
    <form @submit.prevent >
            <label>Text:</label>
            <textarea v-model = "comment.text" type="text" id="text"></textarea><br>
            <p v-if="error">{{error}} </p>
            <button @click="checkForm(); addNewComment();" type="submit" value="Submit">Submit</button>
            
    </form> 
  </div>
</template>

<script>
import { postService } from "../services/Posts";
export default {
  data() {
    return {
      comment: {},
      error: "",
      postId: ""
    };
  },
  methods: {
    checkForm() {
      this.errors = [];
      if (!this.comment.text) {
        this.errors.push("Text is required.");
      }
    },
    addNewComment() {
      if (!this.errors.length) {
        postService.addComment(this.comment, this.postId).then(() => {
          this.$router.go();
          this.comment = {};
        });
      }
    }
  },
  created() {
    this.postId = this.$route.params.id;
    postService.getId(this.postId).then(response => {
      this.post = response.data;
    });
  }
};
</script>
<style>

</style>
