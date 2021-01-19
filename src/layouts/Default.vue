<template>
  
    <div class="layout">
      
      <!-- <TheHeader /> -->
      <transition name="fade" appear>

      <!-- Comment out Header, Footer & main slot off for maximim site down-ness. -->
      <!-- Comment in HODL. -->

      <HODL />

      <!-- <div class="main">
        <slot />
      </div> -->

      </transition>
      <!-- <TheFooter /> -->
      
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
import HODL from '~/components/HODL.vue'
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    HODL,
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

.active--exact.active {
  // color: var(--clr-primary);
  text-decoration: underline;
  text-decoration-thickness: 12%;
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

/* header-height + footer height */
.main {
  min-height: calc(100vh - 540px); 
  // background-color: pink;
}


// Page transition for the default layout
.fade-enter-active {
  transition: opacity 1700ms ease;
    // animation-delay: 750ms;
}

.fade-enter {
  opacity: 0;
}


// .fade-enter-active {
//  transition: all 1500ms ease;
//  animation-delay: 3s;
// }

// .fade-enter {
//   opacity: 0;
//   transform: translateY(-2em);
//   animation-delay: 2s;
// }

</style>
