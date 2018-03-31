<template>
  <main class="post-list">
    <PostListItem
      v-for="post in posts"
      :key="post['.key']"
      :post="post" />
  </main>
</template>

<script>
  import PostListItem from './PostListItem'

  export default {
    name: 'PostList',
    components: {
      PostListItem
    },
    props: {
      posts: {
        required: true,
        type: Array
      }
    }
  }
</script>

<style scoped>

</style>
