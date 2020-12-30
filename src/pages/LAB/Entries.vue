<template>
  <posts-layout>
    <section class="moat">
      
      <h3>Entries</h3>
      <!-- <LatestPosts /> -->

      <!-- <h4 v-html="$page.post.content" ></h4> -->
      <!-- <div v-for="edge in $page.post.edges" :key="edge.node.title" :post="edge.node"/> -->

      <!-- <div class="posts">
        <PostCard v-for="edge in $page.post.edges" :key="edge.node.id" :post="edge.node"/>
      </div> -->
      <h4 v-for="edge in $page.posts.edges" :key="edge.node.id">
        {{ edge.node.title }}
        {{ edge.node.date }}
      </h4>

      <!-- Paginate -->
      <div class="pagination">
      <Pager :info="$page.posts.pageInfo" linkClass="pager" />
      </div>



    </section>
  </posts-layout>
</template>

<page-query>
query ($page: Int) {
  posts: allPost(perPage: 2, page: $page, filter: { published: { eq: true }}) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        ... on Post {
          id
          title
          date (format: "D. MMMM YYYY")
          timeToRead
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
import LatestPosts from '../../components/LatestPosts.vue';
import PostCard from '../../components/PostCard.vue';
import PostsLayout from '../../layouts/PostsLayout.vue';

export default {
  components: {
    PostsLayout,
    LatestPosts,
    PostCard,
    Pager
  }
};
</script>







<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  margin: 50px 0;
  width: 100%;
  // background-color: pink;
}

.pager {
  background-color: var(--bg-color);
  font-size: var(--fs-3);
  // border: 1px solid var(--border-color);
  color: currentColor;
  text-decoration: none;
  padding: .25em .75em;
  border-radius: var(--radius);
}
</style>


