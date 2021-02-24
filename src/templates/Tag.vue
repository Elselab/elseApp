<template>
  <Layout>
    <h1 class="tag-title text-center spacing-bottom">
      # {{ $page.tag.title }}
    </h1>

    <div class="posts">
      <PostCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
      <!-- <PostCard v-for="{ node } in $page.tag.belongsTo.edges" :key="node.id"/> -->
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            id
            title
            path
            date (format: "MMMM D, YYYY")
            timeToRead
            description
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
// import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    // Author,
    PostCard
  },
  metaInfo: {
    // title: 'Hello, world!'
    title: 'Tags'
  }
}
</script>

<style lang="scss">

</style>