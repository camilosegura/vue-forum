<template>
  <article class="col-large push-top">
    <h1>{{thread.title}}</h1>

    <p>
        By <a href="#" class="link-unstyled">Robin</a>, <AppDate :timestamp="thread.publishedAt" />
        <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">3 replies by 3 contributors</span>
    </p>

    <PostList :posts="posts" />
    <PostEditor
      @save="add"
      :threadId="id"
    />
  </article>
</template>

<script>
  import sourceData from '@/data'
  import PostList from '@/components/PostList'
  import PostEditor from '@/components/PostEditor'

  export default {
    components: {
      PostEditor,
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
    methods: {
      add (eventData) {
        const postId = eventData.post['.key']
        const post = eventData.post

        this.$set(sourceData.posts, postId, post)
        this.$set(this.thread.posts, postId, postId)
        this.$set(sourceData.users[post.userId].posts, postId, postId)
      }
    },
    data () {
      return {
        thread: sourceData.threads[this.id]
      }
    }
  }
</script>

