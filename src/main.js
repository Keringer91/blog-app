import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import AppPosts from './components/AppPosts.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { name: "index", path: "/", redirect: "/posts" },
  { name: "posts", path: "/posts", component: AppPosts },
]

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");