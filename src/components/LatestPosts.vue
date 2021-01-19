<template>
  <section class="moat">
    <h3>Latest Posts</h3>
    <article>
      <!-- <h4>{{ edge.node.title }}</h4> -->
    </article>
  </section>
</template>


<static-query>
  query {
    allPost (perPage: 3, filter: {published: {eq: true}}) {
      edges {
        node {
          id
          title
          date
        }
      }
    }
  }
</static-query>





<script>
// Use page queries for templates and pages
// Use static queries inside of components
export default {
  
}
</script>

