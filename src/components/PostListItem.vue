<template>
    <div class="post">
      <div class="user-info">
        <a href="#" class="user-name">{{users.name}}</a>
        <a href="#">
          <img :src="users.avatar" alt="" class="avatar-large">
        </a>
        <p class="desktop-only text-small">{{userPostsCount}} posts</p>
      </div>

      <p class="post-content">
        {{post.text}}
      </p>

      <AppDate
        :class="['post-date', 'text-fade']"
        :timestamp="post.publishedAt"
       />
    </div>
</template>

<script>
  import { countObjectProperties } from '@/utils'

  export default {
    name: 'PostListItem',
    props: {
      post: {
        required: true,
        type: Object
      }
    },
    computed: {
      users () {
        return this.$store.state.users[this.post.userId]
      },
      userPostsCount () {
        return countObjectProperties(this.users.posts)
      }
    }
  }
</script>

<style scoped>

</style>
