<template>
<!-- can only do page queries inside of pages and templates -->
  <layout>
    <section class="moat">

      <!-- <g-image :src="$page.blogPost.coverImage" alt="a lovely background" class="billboard" /> -->
      <h1>You've got Post template power</h1>

      <li v-for="edge in $page.posts.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li>
      <!-- <h1>{{ edge.node.title }}</h1> -->
      <!-- <p>{{ $page.blogPost.date }}</p> -->
      <!-- <div v-html="$page.blogPost.content" /> -->

    </section>
  </layout>
</template>

<script>
</script>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<style lang="scss">
</style>
