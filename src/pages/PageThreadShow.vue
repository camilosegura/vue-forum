<template>
  <article class="col-large push-top">
    <h1>{{thread.title}}</h1>

    <PostList :posts="posts" />

  </article>
</template>

<script>
  import sourceData from '@/data'
  import PostList from '@/components/PostList'

  export default {
    components: {
      PostList
    },
    props: {
      id: {
        required: true,
        type: String
      }
    },
    computed: {
      posts () {
        const postIds = Object.values(this.thread.posts)
        const postsArray = Object.values(sourceData.posts)
          .filter(post => postIds.includes(post['.key']))
        return postsArray
      }
    },
    data () {
      return {
        thread: sourceData.threads[this.id]
      }
    }
  }
</script>

