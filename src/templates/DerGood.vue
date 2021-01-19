<template>
  <layout>
    
  </layout>
</template>

<page-query>
  query {
    derGood: allDerGood {
      edges {
        node {
          ... on DerGood {
            id
            title
            published
            creator
            creatorslug
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
</script>

<style lang="scss">
</style>
