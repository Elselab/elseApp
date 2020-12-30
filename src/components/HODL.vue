<template>
  
<div class="hodlwrap">
  <div class="HODL moat">

    <div class="HODL-orb">
      <LoggaSine />
    </div>

    <p>
      Elselab is BRB. Perhaps you're looking for 
      <a href="https://www.squacks.co/" target="_blank" rel="noopener">Ben Mansell</a>
      or 
      <a href="https://patater.com/" target="_blank" rel="noopener">Jaeden Amero</a>.
    </p>
  </div>
</div>




</template>

<script>
import LoggaSine from '~/components/LoggaSine'

export default {
  components: {
    LoggaSine
  }
}
</script>

<style lang="scss" scoped>


.HODL {
  display: grid;
  width: 100%;
  background-color: black;
  height: 100vh;
  place-items: center;
  &-orb {
    margin-top: 4rem;
    width: 400px;
  }
  .st0, .st1 {
    fill: none;
    stroke: black;
    stroke-miterlimit:10;
  }
  p {

    max-width: 520px;
    color: white;
    text-align: center;
    font-size: var(--fs-2);
    // place-items: end;
  }
  a {
    text-decoration: underline;
  }
}




</style>
