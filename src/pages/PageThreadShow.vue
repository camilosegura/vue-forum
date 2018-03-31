<template>
  <article class="col-large push-top">
    <h1>{{thread.title}}</h1>
    <main class="post-list">
      <div v-for="postId in thread.posts" :key="postId" class="post">
        <div class="user-info">
          <a href="#" class="user-name">{{users[posts[postId].userId].name}}</a>
          <a href="#">
            <img :src="users[posts[postId].userId].avatar" alt="" class="avatar-large">
          </a>
        </div>

        <p class="post-content">
          {{posts[postId].text}}
        </p>

        <time class="post-date text-faded">
          {{posts[postId].publishedAt}}
        </time>
      </div>
    </main>

  </article>
</template>

<script>
  import sourceData from '@/data'

  export default {
    props: {
      id: {
        required: true,
        type: String
      }
    },
    data () {
      return {
        thread: sourceData.threads[this.id],
        posts: sourceData.posts,
        users: sourceData.users
      }
    }
  }
</script>

