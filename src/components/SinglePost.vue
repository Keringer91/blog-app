<template>
  <div>
    Post's ID: {{post.id }}<br>
    Title: {{ post.title }}<br>
    Text: {{ post.text }}<br>
  </div>
</template>

<script>
import { postService } from "../services/Posts";
export default {
  name: "AppPosts",
  data() {
    return {
      post: {},
      id: ''
    };
  },
  methods: {
   
  },
  created() {
    this.id = this.$route.params.id;
    postService.getId(this.id).then(response => {
      this.post = response.data;
    });
  }
};
</script>

<style scoped>
</style>
