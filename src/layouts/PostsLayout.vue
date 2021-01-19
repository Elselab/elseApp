<template>
  <Layout>
    <div class="posts-layout">
      <!-- <h1>Posts Layout</h1> -->
      <slot />
    </div>
  </Layout>
</template>



<style lang="scss">
.posts-layout {
  min-height: calc(100vh - 540px);
  // min-height: calc(100vh - 540px); 
  background-color: var(--clr-glow);
  h3 {
    margin-top: 0;
  }
}

:root {
  background-color: var(--clr-bg, #E4EB85);
}


</style>