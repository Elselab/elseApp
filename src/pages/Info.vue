<template>
  <Layout class="about-layout">
    <section class="section about moat">
    <h1>About us</h1>

    <h3>
      <g-link class="nav__link" to="/lab/entries/">Blog &rarr;</g-link>
    </h3>
    

    <p>Lorem ipsum dolor sit amet, consectetur 
    <a href="https://www.squacks.co/" target="_blank" rel="noopener" class="fancy">SQUACKS</a>
    adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
   

    </section>
    
  </Layout>
</template>

<script>
// import InfosLayout from '../layouts/InfosLayout.vue';

export default {
  metaInfo: {
    title: 'About us'
  },
  beforeCreate: function() {
    document.body.className = 'about';
  }
}
</script>

<style lang="scss">

// Massive override stuf in the main layout
// Danger ????
.about-layout {
  --clr-bg: var(--clr-mars);
  --clr-body: var(--clr-blue-dark);
  --clr-darkest: var(--clr-mars);
  --selection-color: var(--clr-glow);
  a:hover {
    color: var(--clr-glow);
  }
  * {
    color: var(--clr-body);
  }
  background-color: var(--clr-bg);
  .ORB {
    fill: var(--clr-glow);
  }
}

</style>

