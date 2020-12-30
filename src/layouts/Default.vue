<template>
  <div class="layout">
    <TheHeader />


    <div class="main">
      <slot />
    </div>

    
    <TheFooter />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    TheHeader,
    TheFooter
  }
}
</script>


<style lang='scss'>
@font-face {
  font-family: 'OfficialSans';
  src: url(../assets/fonts/officialsansregular.woff2) format('woff2'),
        url(../assets/fonts/officialsansregular.woff) format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'OfficialSans-Black';
  src: url(../assets/fonts/officialsans-black.woff2) format('woff2'),
       url(../assets/fonts/officialsans-black.woff) format('woff');
  font-weight: normal;
  font-style: normal;
}

body {
  /* font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; */
  margin:0;
  padding:0;
  line-height: 1.5;
}
/* h1 {
  font-family: 'OfficialSansBlack';
} */
.active--exact.active {
  color: var(--accent-color);
}

.layout {
  // border: 6px solid pink;
  width: 100%;
  min-height: 100vh;
}
// MOAT behaves differently in this project
// It is the padding wrapper
.moat {
  padding-left: 20px;
  padding-right: 20px;
  &__inner {
    padding-left: 5%;
    padding-right: 5%;
  }
}

.main {
  min-height: calc(100vh - 540px); 
  /* header-height + footer height */
}


</style>
