<template>
  <div>
   <h3>All Posts</h3>
   <ul v-for="(post, index) in posts" :key="index">
        <li>
            Post's ID: {{post.id }}<br>
            Title: {{ post.title }}<br>
            Text: {{ post.text }}<br>
           <span v-if="post.comments.length !== 0"> Number of comments: {{ post.comments.length }}</span><br>
            <button @click="editPost(post.id)">Edit post</button>
            <button @click="deletePost(post.id)">Delete</button>
            <button @click="viewPost(post.id)">View post</button>
        </li>
    </ul>
  </div>
</template>

<script>
import { postService } from "../services/Posts";
export default {
  name: "AppPosts",
  data() {
    return {
      posts: []
    };
  },
  methods: {
    editPost(id) {
      this.$router.push("edit/" + id);
    },
    viewPost(id) {
      this.$router.push("/post/" + id);
    },
    deletePost(id) {
      postService.delete(id).then(() => {
        this.$router.go();
      });
    }
  },
  created() {
    postService.getAll().then(response => {
      this.posts = response.data;
    });
  }
};
</script>

<style scoped>

</style>
