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

      <time class="post-date text-faded">
        {{post.publishedAt}}
      </time>
    </div>
</template>

<script>
    import sourceData from '@/data'

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
          return sourceData.users[this.post.userId]
        },
        userPostsCount () {
          const postsIds = this.users.posts
          const postIdsArray = Object.keys(postsIds)

          return postIdsArray.length
        }
      }
    }
</script>

<style scoped>

</style>
