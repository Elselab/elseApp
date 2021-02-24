<template>
  <!-- <div class="post-card__title" v-html="allDerGood.title" /> -->
      <article>
        <g-link class="post-card__header" :to="derGood.path">
          <g-image alt="Cover image" v-if="derGood.image" class="post-card__image" :src="derGood.image" />
        </g-link>

        <g-link :to="derGood.creatorslug">
          <g-image alt="" v-if="derGood.avatar" class="avatar" :src="derGood.avatar" />
        </g-link>
        
        <g-link class="post-card__link" :to="derGood.path">
          <h3 class="post-card__title" v-html="derGood.title" />
        </g-link>
      <!-- <span class="post-card__description" v-html="derGood.price" /> -->
      
      <span></span>
      <span>{{ derGood.font_type }} font, {{ derGood.style_nums }} styles – v{{ derGood.version }}</span>
      <span>{{ derGood.release_status }}</span>
      <span>${{ derGood.price / 100}}</span>


          <!-- <div class="itemCard--infoRight">
          <div class="itemCard--version">v{{ edge.node.version }}</div>
          <div class="itemCard--version">${{ edge.node.price / 100 }}</div> -->
          <!-- <button class="btn btn-primary">+</button> -->
      </article>

      <!-- <h2 v-html="derGood.node.title" ></h2> -->
</template>

<script>
export default {
  props: ['derGood'],
}
</script>

<style lang="scss">

</style>