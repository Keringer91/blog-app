<template>
  <div>
    Post's ID: {{post.id }}<br>
    Title: {{ post.title }}<br>
    Text: {{ post.text }}<br>
    <add-comment></add-comment>
    <div v-if="post.comments">
        <ul v-for="(comment, index) in post.comments" :key="index">
            <li>
                Comment's ID: {{comment.id }}<br>
                Text: {{ comment.text }}<br>
                {{ comment.createdAt | formatDate }}<br>
                {{ comment.createdAt | diffForHumans }}<br>
            </li>
        </ul>
    </div>    
  </div>
</template>

<script>
import { dateMixin } from "../mixins/DateMixin.js";
import AddComment from "../components/AddComment";
import { postService } from "../services/Posts";
export default {
  name: "AppPosts",
  components: {
    AddComment
  },
  mixins: [dateMixin],
  data() {
    return {
      post: {},
      id: ""
    };
  },
  methods: {},
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
