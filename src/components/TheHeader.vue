<template>
    <header class="header">
      <!-- <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong> -->
      <nav class="nav moat">
        <g-link class="nav__link" to="/">Work</g-link>
        <g-link class="nav__link" to="/info/">Info</g-link>
      </nav>
    </header>
</template>

<style lang='scss' scoped>
.header {
  width: 100%;
  height: var(--header-height);
  // background-color: red;
}
.nav {
  // background-color: blue;
  height: 100%;
  font-family: 'OfficialSans-Black';
  font-size: var(--fs-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__link {

  }
}

</style>