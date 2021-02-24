<template>
  <layout>

    <!-- <h2 class="moat ">Goooooooods</h2> -->

    <section class="moat goodslist">
      <div class="all-goods">
      <GoodCard v-for="edge in $page.derGood.edges" :key="edge.node.id" :derGood="edge.node" class="card-good">
      
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
            avatar (width: 44, quality: 100)
            image (height: 300, blur: 10 quality: 100)  
            version
            price
            font_type
            style_nums
            release_status
            path
            content
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
.goodslist {
  
  
}
.all-goods {
  max-width: var(--content-width);
  // background-color: salmon;
  margin: 0 auto;
  &:last-child {
    margin-bottom: 10rem;
  }
  .avatar {
    border: 4px solid var(--clr-primary);
    border-radius: 100%;
  }
}
.card-good {
  margin-top: 5rem;
  background-color: pink;
  span + span {
    margin-left: 1rem;
  }
}




</style>

