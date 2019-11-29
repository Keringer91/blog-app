<template>
  <div id="app">
    <nav>
      <router-link to='/posts'> Posts </router-link>
      <router-link to='/add'> Add </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
</style>