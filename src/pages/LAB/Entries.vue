<template>
  <posts-layout>
    <section class="moat entries">
      
      <h3>Entries</h3>
      <!-- <LatestPosts /> -->

      <!-- <h4 v-html="$page.post.content" ></h4> -->
      <!-- <div v-for="edge in $page.post.edges" :key="edge.node.title" :post="edge.node"/> -->

      <div class="grid">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" class="card card__posts"/>
          <!-- {{ edge.node.title }}
          {{ edge.node.date }} -->
      </div>
      <!-- Paginate -->
      <div class="pagination">
      <Pager :info="$page.posts.pageInfo" linkClass="pager" />
      </div>



    </section>
  </posts-layout>
</template>

<page-query>
query ($page: Int) {
  posts: allPost(perPage: 3 , page: $page, filter: { published: { eq: true }}) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        ... on Post {
          id
          title
          date (format: "MMMM D, YYYY")
          # timeToRead
          description
          # cover_image (width: 1800, height: 900, blur: 10) 
          path 
          tags {
            id
            title
            path
          }
        }
      }
    }
  }
}
</page-query>



<script>
import { Pager } from 'gridsome';
// import LatestPosts from '../../components/LatestPosts.vue';
import PostCard from '../../components/PostCard.vue';
import PostsLayout from '../../layouts/PostsLayout.vue';

export default {
  components: {
    PostsLayout,
    // LatestPosts,
    PostCard,
    Pager
  },
  metaInfo: {
    // title: 'Hello, world!'
    title: 'Posts'
  }
}
</script>







<style lang="scss">
.entries {
  .grid {
    margin: 0 auto;
    max-width: var(--content-width-plus);
    --grid-cols: 1;
    grid-gap: 0rem;
  }
  
  .card {
    &__posts {
      background-color: pink;
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin: 50px 0;
    width: 100%;
    // background-color: pink;
  }

  .pager {
    background-color: var(--clr-bg);
    font-size: var(--fs-3);
    // border: 1px solid var(--border-color);
    color: currentColor;
    text-decoration: none;
    padding: .25em .75em;
    border-radius: var(--radius);
  }

  @media screen and (min-width: 768px) {
    .grid {
      --grid-cols: 2;
      grid-gap: 1.8rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .grid {
      --grid-cols: 3;
    }
  }
}
</style>


