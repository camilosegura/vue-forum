<template>
  <div class="col-full">
    <h1>Welcome to Camilo's forum</h1>
    <ThreadList :threads="threads" />
  </div>
</template>

<script>
  import sourceData from '@/data'
  import ThreadList from '@/components/ThreadList'

  export default {
    components: {
      ThreadList
    },
    data () {
      return {
        threads: Object.values(sourceData.threads),
        posts: sourceData.posts,
        users: sourceData.users
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
