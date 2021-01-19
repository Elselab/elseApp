<template>
  <layout>

    <section class="moat entries">
      <h4>Goooooooods</h4>
      <div class="all-goods">
      <GoodCard v-for="edge in $page.derGood.edges" :key="edge.node.id" :derGood="edge.node" class="">
        
      </GoodCard>
      </div>

    </section>
  </layout>
</template>

<page-query>
  query {
    derGood: allDerGood(filter: { published: { eq: true }}) {
      edges {
        node {
          ... on DerGood {
            id
            title
            published
            creator
            creatorslug
            # avatar (width: 44, quality: 100)
            # image (width: 900, quality: 100)
            version
            price
            path
            dasgood {
              id
              path
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import GoodCard from '../components/GoodCard.vue';

export default {
  components: {
    GoodCard,
  },
  metaInfo: {
    title: 'Goods'
  }
  // data() {
  //   return {
  //     forSale: [
  //       { invId: 1, name: 'El Hatch', creator: 'Ben Mansell', version: '0.1', image: '~/assets/images/oscillosphere.svg', price: 13900 },
  //       { invId: 2, name: 'EL Makore', creator: 'Ben Mansell', version: '0.1', image: '//placehold.it/500', price: 14900 },
  //       { invId: 3, name: 'EL Pacifo', creator: 'Ben Mansell', version: '0.1', image: '//placehold.it/500', price: 4900 },
  //       // { invId: 3, name: 'EL Pacifo', creator: 'Ben Mansell', version: '0.1', image: '//placehold.it/500', price: 4900 },
  //       { invId: 4, name: 'PCB Rev. 1', creator: 'Jaeden Amero', version: '0.1', image: '//placehold.it/500', price: 3500 },
  //     ],
  //   };
  // },
}

</script>

<style lang="scss">
.all-goods {
  .grid {
    --grid-cols: 3;
  }
  margin: 0 auto;
  max-width: var(--content-width-plus);
}


</style>

