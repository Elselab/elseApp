<template>
  <layout>

    <section class="">



      <!-- <ItemCard
        v-for="item in forSale"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :version="item.version"
        :creator="item.creator"
        :image="item.image"
        :price="item.price" /> -->


      <LatestGoods />






    </section>
  </layout>
</template>

<script>
// import ItemCard from '../components/ItemCard.vue';
import LatestGoods from '../components/LatestGoods.vue';

export default {

  components: {
    // ItemCard,
    LatestGoods
  },
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




<style lang="scss" scoped>





</style>

