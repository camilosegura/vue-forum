<template>
  <div class="col-full push-top">

    <h1>Editing  <i>{{thread.title}}</i></h1>
    <ThreadEditor
      :title="thread.title"
      :text="this.text"
      @save="save"
      @cancel="cancel"
    />

  </div>
</template>

<script>
  import ThreadEditor from '@/components/ThreadEditor'

  export default {
    props: {
      id: {
        required: true,
        type: String
      }
    },
    methods: {
      save ({text, title}) {
        this.$store.dispatch('updateThread', {
          title,
          text,
          id: this.id
        })
          .then(thread => {
            this.$router.push({name: 'ThreadShow', params: {id: thread['.key']}})
          })
      },
      cancel () {
        this.$router.push({name: 'Forum', params: {id: this.forum['.key']}})
      }
    },
    computed: {
      thread () {
        return this.$store.state.threads[this.id]
      },
      text () {
        return this.$store.state.posts[this.thread.firstPostId].text
      }
    },
    components: {
      ThreadEditor
    }
  }
</script>
