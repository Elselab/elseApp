<template>
  <layout>
        <div class="derwork--container moat">

      <!-- <div class="workpost-title">
        <h1 class="workpost-title__text">
          {{ $page.work.title }}
        </h1>
      </div> -->

      <!-- <PostMeta :work="$page.work" /> -->



    <div class="workpost__content" v-html="$page.work.content" />

      <div class="post__footer">
        <PostTags :post="$page.work" />
      </div>
    </div>
  </layout>
</template>

<script>
</script>

<page-query>
query Work ($id: ID!) {
  work: work (id: $id) {
    title
    path
    categories {
      id
      title
      path
    }
    content
    cover_image (width: 992, blur: 10)
  }
}
</page-query>

<style lang="scss">
</style>
