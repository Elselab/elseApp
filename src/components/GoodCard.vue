<template>
  <!-- <div class="post-card__title" v-html="allDerGood.title" /> -->
      <div>
      <h2 class="post-card__title" v-html="derGood.title" />
      </div>
      <!-- <h2 v-html="derGood.node.title" ></h2> -->
</template>

<script>
export default {
  props: ['derGood'],
}
</script>

<style lang="scss">

</style>