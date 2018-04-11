<template>
  <form @submit.prevent="add">
    <div class="form-group">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="form-input"
          v-model="newPostText"
        ></textarea>
    </div>
    <div class="form-actions">
      <button class="btn-blue">Submit post</button>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'PostEditor',
    props: {
      threadId: {
        required: true,
        type: String
      }
    },
    data () {
      return {
        newPostText: ''
      }
    },
    methods: {
      add () {
        const post = {
          text: this.newPostText,
          publishedAt: Math.floor(Date.now() / 1000),
          threadId: this.threadId,
          userId: '7uVPJS9GHoftN58Z2MXCYDqmNAh2'
        }

        this.newPostText = ''
        this.$store.dispatch('createPost', post)
      }
    }
  }
</script>

<style scoped>

</style>
