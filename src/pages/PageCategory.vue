<template>
  <CategoryListItem
      class="col-full"
      :category="category"
    />
</template>

<script>
  import CategoryListItem from '@/components/CategoryListItem'

  export default {
    components: {
      CategoryListItem
    },
    props: {
      id: {
        required: true,
        type: String
      }
    },
    computed: {
      category () {
        return this.$store.state.categories[this.id]
      }
    }
  }
</script>

