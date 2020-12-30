<template>
  <section class="goods">
    
    <article class="itemCard itemCard--desaturated"  v-for="edge in $static.allDerGood.edges" :key="edge.node.id">
    <!-- <div v-html="edge.node.content" /> -->
      <!-- {{ edge.node.published }} -->
      <g-link class="itemCard--coverLink" :to="`/${ edge.node.creatorslug }/${ edge.node.slug }`">
        <div class="slide itemCard--coverImg">
          <!-- <g-image class="slide--image imageLoader--image imageLoader--loaded" src="~/goods/images/Afrikola.png" :alt="name" /> -->
          <!-- <g-image class="slide--image imageLoader--image imageLoader--loaded" src="~/goods/images/large-tiles.png" :alt="name" /> -->
          <g-image class="slide--image imageLoader--image imageLoader--loaded" :src="edge.node.image" :alt="name" />
          <!-- <g-image class="slide--image imageLoader--image imageLoader--loaded" :src="$page.allDerGoods.image" width="500" :alt="name" /> -->
        </div>
      </g-link>

      <div class="itemCard--info">
        <div class="itemCard--infoLeft">
          <div class="itemCard--nameCol">
            <div class="itemCard--avatar">
              <g-link :to="`${ edge.node.creatorslug }`">
              <!-- <g-image class="avatar" src="~/assets/images/oscillosphere.svg" width="44" quality="100"/> -->
              <g-image class="avatar" :src="edge.node.avatar" />
              </g-link>
            </div>

            <div class="itemCard--names">
              <g-link class="itemCard--fontName" :to="`${ edge.node.creatorslug }/${ edge.node.slug }`">{{ edge.node.title }}</g-link>
              <div class="itemCard--creatorName">
                <g-link :to="`${ edge.node.creatorslug }`">{{ edge.node.creator }}</g-link>
                <!-- <g-link :to="`/goods/${ edge.node.creator }/${ edge.node.title }`">Read More</g-link> -->


              </div>
            </div>
          </div>
        </div>

        <div class="itemCard--infoRight">
          <div class="itemCard--version">v{{ edge.node.version }}</div>
          <div class="itemCard--version">${{ edge.node.price / 100 }}</div>
          <!-- <button class="btn btn-primary">+</button> -->
        </div>  
      </div>
    </article>



    <!-- <h3>All Goods, Cool</h3>
    <article v-for="edge in $static.allDerGood.edges" :key="edge.node.id">
      <div v-html="edge.node.content" />

      <h4>{{ edge.node.title }}</h4>
      <p>{{ edge.node.date }}</p>
      <g-link :to="`//${ edge.node.slug }`">Read More</g-link>
    </article> -->
  </section>
  
</template>

<static-query>


</static-query>


<script>
// Use page queries for templates and pages
// Use static queries inside of components
export default {
  
}
</script>

<style lang="scss" scoped>
.goods {
  padding: 20vh 0;
  // background-color: gray(2);
  background-color: red;
  margin: 0 auto;

  // FIX MIXINS GRID LAYOUT!!!!!!!!!
  // @include grid(1);

  // @include mq(sm) {
  //   @include grid(2);
  // }

  // @include mq(lg) {
  //   @include grid(3);
  // }
}

.itemCard {
  // border: 1px solid gray(4);
  border: 1px solid red;
  border-radius: 4px;
  // background-color: bisque;
  margin: 0 .5rem 2rem;

  &--coverLink {
    position: relative;
    display: block;
  }

  &--info {
    position: relative;
    display: flex;
    border-top: 1px solid pink;
    padding: 0.6rem;
  }
  &--infoLeft {
    flex: 0 0 75%;
    max-width: 75%;
    // background-color: pink;
  }
  &--names {
    position: relative;
    display: block;
    width: calc(100% - 4rem);
  }
  &--creatorName {
    font-size: var(--fs-XS);
  }
  &--nameCol {
    display: flex;
    vertical-align: baseline;
  }
  &--avatar {
    vertical-align: baseline;
    display: flex;
    align-items: center;
    margin-right: 1rem;
    border-radius: 50%;
  }
  &--infoRight {
    // background-color: tomato;
    flex: 0;
    flex: 0 0 25%;
    max-width: 25%;
  }
  &--version {
    text-align: right;
    font-size: var(--fs-SM);
  }
}
.avatar {
  border-radius: 50%;
}
</style>