<template>
  <div class="thread">
    <div>
      <p>
        <router-link :to="{name: 'ThreadShow', params: {id: thread['.key']}}">
          {{thread.title}}
        </router-link>
      </p>
      <p class="text-faded text-xsmall">
        By <a href="#">{{user.name}}</a>, <AppDate :timestamp="thread.publishedAt" />
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">
        {{repliesCount}} reply
      </p>

      <img src="" class="avatar-medium"/>

      <div>
        <p class="text-xsmall">
          <a href="#">Bruce</a>
        </p>

        <p class="text-xsmall text-faded">
          2 horus ago
        </p>
      </div>
    </div>
  </div>

</template>

<script>
  import { countObjectProperties } from '@/utils'

  export default {
    props: {
      thread: {
        required: true,
        type: Object
      }
    },

    computed: {
      repliesCount () {
        return countObjectProperties(this.thread.posts) - 1
      },
      user () {
        return this.$store.state.users[this.thread.userId]
      }
    }
  }
</script>
