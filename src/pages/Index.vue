<template>
  <Layout>
    <section class="section intro moat">
      <!-- <g-image alt="ELSELAB LOGO" src="~/assets/images/elselab-logo.svg" width="440" />

      <p class="home-links">
        <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
        <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
      </p> -->

      <!-- <h1 class="fake-logo"></h1> -->
      
    </section>

    <section class="section works moat" >
      <div class="works-large">
        <article v-for="edge in $static.allWork.edges" :key="edge.node.id" class="worksCard testo" 
          className="testo:hover"
          :style="{ 
            'backgroundColor': edge.node.clr_hover,
            }"
          >
          <!-- <div>{{ edge.node.clr_hover }}</div> -->
          <g-link :to="`${ edge.node.path }`">
          <g-image :src="edge.node.cover_image" width="500" height="500" fit="contain" class="worksCard--thumb" />
          <div v-html="edge.node.content" />
          <div class="worksCard-overlay">
            <div class="worksCard--title">{{ edge.node.title }}</div>
          </div>
          </g-link>
          
        </article>

        <div class="overlay-bg"></div>
      </div>
      
    </section>


<!-- <article v-for="edge in $static.allWork.edges" 
:key="edge.node.id"
:style="{ 'backgroundColor': 'edge.node.clr_hover' }" >

  <g-link :to="`${ edge.node.path }`">
    <g-image :src="edge.node.cover_image" width="500" height="500" fit="contain" />
    <div v-html="edge.node.content" />
    <div class="worksCard-overlay">
      <div>{{ edge.node.title }}</div>
    </div>
  </g-link>
  
</article> -->
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Works'
  }
}


</script>

<static-query>
query Works {
  allWork {
    edges {
      node {
        id
        title
        categories {
          id
          path
        }
        clr_hover
        cover_image
        path
      }
    }
  }
}
</static-query>




<style lang="scss">


.home-links a {
  margin-right: 1rem;
}

.intro {
  // --clr-bg: green;
  // background-color: var(--clr-bg);
}
// .testo:hover {
//   box-shadow: 0 0 100px pink;
//   opacity: 1.0;
// }

// .overlay-bg {
//   z-index: -1;
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   width: 100%;
//   height: 200%;
//   opacity: 0;
//   transition: opacity 1.5s ease;
//   background: linear-gradient(45deg,
//   #F6E5C5, #E9BE00);
// }
.overlay-bg .worksCard:hover {
  z-index: -1;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 200%;
  opacity: .3;
  transition: opacity 1.5s ease;
  background: linear-gradient(45deg,
  #F6E5C5, #E9BE00);
}

.works {
  margin: 0 auto;
  max-width: var(--content-width-plus);
  &-large {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(1, 1fr);
    & article {
      // background-color: blue;
      // The first four items
      &:nth-child(-n+4) {
        grid-column: span 1;
        height: 340px;
      }
      // The remaining items
      &:nth-child(n+5) {
        grid-column: span 1;
        height: 280px;
      }

    }


    // THREE COLUMNS
    @media screen and (min-width: 575px) {
      grid-template-columns: repeat(3, 1fr);
      & article:nth-child(-n+4) {
        grid-column: span 3;
        height: 340px;
      }
      & article:nth-child(n+5) {
        grid-column: span 1;
        height: 155px;
        .worksCard--title {
          font-size: var(--fs-3);
        }
      }


    }

    // FOUR COLUMNS
    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
      & article:nth-child(-n+4) {
        grid-column: span 2;
        height: 360px;
      }
      & article:nth-child(n+5) {
        grid-column: span 1;
        height: 160px;
      }
    }

    // FIVE COLUMNS
    @media screen and (min-width: 992px) {
      grid-template-columns: repeat(10, 1fr);
      & article:nth-child(-n+4) {
        grid-column: span 5;
        height: 440px;
      }
      & article:nth-child(n+5) {
        grid-column: span 2;
        height: 166px;
      }
    }
  }
  a {
	// color: var(--link-color);
	&:hover img {
    transition: 400ms;
		opacity: .2;
	}
}
}
// article:before {
//   content: '';
//   position: absolute;
//   width: 100vw;
//   height: 100vh;
//   background-color: #E9BE00;
//   z-index: -1;
//   opacity: 0%;
//   transition: 500ms;
// }
// article:hover:before {
//   opacity: 88%;
// }

.worksCard {
  position: relative;
  // width: 50%;
}
.worksCard:hover .worksCard-overlay {
  opacity: 1;
}
// .image {
//   display: block;
//   width: 100%;
//   height: auto;
// }
.worksCard-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  // background: var(--clr-primary);
}

.worksCard--thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: -5px;
  // opacity: 50%;
}
.worksCard--title {
  color: var(--clr-bg);
  font-family: 'OfficialSans-Black';
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 1.3;
  font-size: var(--fs-4);
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // color: red;

}
</style>
