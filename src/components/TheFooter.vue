<template>
  <footer class="footer moat">
    <!-- <g-image alt="Example image" src="~/assets/images/oscillo-orb.svg" width="220" /> -->



      <div class="col">
        ELSELAB is design &amp; hardware duo Ben Mansell and Jaeden Amero. We exist to build brands and business.
      </div>

      <div class="logga col">
        <LoggaSine />
      </div>

      <div class="col">
        Yakima, WA ↔︎ Cambridge, UK
        <br>
        info@elselab.com
      </div>





  </footer>

</template>

<script>
import LoggaSine from '~/components/LoggaSine'

export default {
  components: {
    LoggaSine
  }
}

</script>


<style lang="scss">

.footer {
  height: var(--footer-height);
  // border: solid 5px #ffcc5c;
  background-color: var(--clr-darkest);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  font-size: var(--fs-MD);
  color: var(--clr-bg);
  font-weight: 700;
  @media only screen and (min-width: 768px)  {
    flex-direction: row;
  }  
}



.col {
  padding: 10px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 33%;
  }
}

//SVG STUFFS ANIMATION STUFFS
.logga {
  // border: 1px solid pink;
  width: 180px;
  display: flex;
  align-items: center;
}
  

// @keyframes waveForm {
//   0% {transform: translateX(0)}
//   100% {transform: translateX(-148px)}
// }



// .ORB {
//   fill: var(--clr-bg);
//   transition: all 0.5s ease;
// }

// .ORB:hover{
//   // fill: var(--clr-primary);
//   animation: orb-clr-shifter 75ms infinite ease-out;
//   // animation: else-red-clr-shifter 3s infinite;
//   // opacity: 0.8;
//   transition: all 0.5s ease;
//   cursor: pointer;
// }


// .st0, .st1 {
//   fill: none;
//   stroke: #000;
//   stroke-miterlimit:10;
// }
// .st0{
//   stroke-width:1.08;
//   animation: waveForm 1.5s linear infinite;
// }
// .st1{
//   stroke-width:2.17;
//   animation: waveForm 3s linear infinite;
// }
// .mouseOver {
//   animation: waveForm 10s linear infinite;
// }

// @keyframes orb-clr-shifter {
//   0% {
//     fill: #86CBE9;
//   }
//   10% {
//     fill: #87A7E8;
//   }
//   20% {
//     fill: #C89EED;
//   }
//   30% {
//     fill: #EB8EC4;
//   }
//   40% {
//     fill: #E69B77;
//   }
//   50% {
//     fill: #F0E0AD;
//   }
//   60% {
//     fill: #CCE678;
//   }
//   70% {
//     fill: #A5EFAD;
//   }
//   80% {
//     fill: #94EBCF;
//   }
//   90% {
//     fill: #C1D4CE;
//   }
//   100% {
//     fill: #C4E2EF;
//   }
// }

// @keyframes else-red-clr-shifter {
//   0% {
//     fill: #FF4200;
//   }
//   33% {
//     fill: #FF2D00;
//   }
//   66% {
//     fill: #C50000;
//   }
//   100% {
//     fill: #FF2D00;
//   }
// }



</style>
