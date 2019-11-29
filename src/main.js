import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import AppPosts from './components/AppPosts.vue'
import SinglePost from './components/SinglePost.vue'
import AddPost from './components/AddPost.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { name: "index", path: "/", redirect: "/posts" },
  { name: "posts", path: "/posts", component: AppPosts },
  { name: "post", path: "/post/:id", component: SinglePost },
  { name: "add", path: "/add", component: AddPost },
  { name: "edit", path: "/edit/:id", component: AddPost },
]

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");