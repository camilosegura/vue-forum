<template>
  <article class="col-large push-top">
    <h1>{{thread.title}}

      <router-link
        :to="{name: 'ThreadEdit', params: {id: this.id}}"
        class="btn-green btn-small"
        tag="button"
      >
        Edit Thread
      </router-link>
    </h1>

    <p>
        By <a href="#" class="link-unstyled">Robin</a>, <AppDate :timestamp="thread.publishedAt" />
        <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">3 replies by 3 contributors</span>
    </p>

    <PostList :posts="posts" />
    <PostEditor
      :threadId="id"
    />
  </article>
</template>

<script>
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
        const postsArray = Object.values(this.$store.state.posts)
          .filter(post => postIds.includes(post['.key']))
        return postsArray
      },
      thread () {
        return this.$store.state.threads[this.id]
      }
    }
  }
</script>

