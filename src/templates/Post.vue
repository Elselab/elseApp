<template>
<!-- can only do page queries inside of pages and templates -->
  <Layout>
    <section class="moat">

      <!-- <g-image :src="$page.blogPost.coverImage" alt="a lovely background" class="billboard" /> -->
      <h1>You've got Post template power</h1>

      <!-- <li v-for="edge in $page.posts.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li> -->

      <div class="post__content" v-html="$page.post.content" />



      <!-- <h1>{{ edge.node.title }}</h1> -->
      <!-- <p>{{ $page.blogPost.date }}</p> -->
      <!-- <div v-html="$page.blogPost.content" /> -->

    </section>
  </Layout>
</template>

<script>

</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "MMMM D, YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    content
  }
}
</page-query>





<style lang="scss">
</style>
