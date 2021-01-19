<template>
  <div>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" style="enable-background:new 0 0 120 120;" xml:space="preserve">
    <circle class="ORB" id="ORB" cx="60" cy="60" r="60"></circle>
    <path id="COSINE" class="st0" d="M296,12c-20,0-28,22-37,48s-17,48-37,48-28-22-37-48-17-48-37-48-28,22-37,48-17,48-37,48S46,86,37,60,20,12,0,12" transform="translate(15.03)"/>
    <path id="SINE" class="st1" d="M-14,60C-5,34,3,12,23,12S51,34,60,60s17,48,37,48,28-22,37-48,17-48,37-48,28,22,37,48,17,48,37,48,28-22,37-48" transform="translate(15.03)"/>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
//SVG STUFFS ANIMATION STUFFS


@keyframes waveForm {
  0% {transform: translateX(0)}
  100% {transform: translateX(-148px)}
}



.ORB {
  fill: var(--clr-bg);
  transition: all 0.5s ease;
}

.ORB:hover {
  // fill: var(--clr-primary);
  animation: orb-clr-shifter 75ms infinite ease-out;
  // animation: else-red-clr-shifter 3s infinite;
  // opacity: 0.8;
  transition: all 0.5s ease;
  cursor: pointer;
  &.st0 {
    animation: waveForm .33s linear infinite;
  }
  
}

.st0, .st1 {
  fill: none;
  stroke: var(--clr-darkest);
  stroke-miterlimit:10;
}
.st0 {
  stroke-width:1.08;
  animation: waveForm 1.5s linear infinite;
}
.st1 {
  stroke-width:2.17;
  animation: waveForm 3s linear infinite;
}
// .mouseOver {
//   animation: waveForm 10s linear infinite;
// }

@keyframes orb-clr-shifter {
  0% {
    fill: #86CBE9;
  }
  10% {
    fill: #87A7E8;
  }
  20% {
    fill: #C89EED;
  }
  30% {
    fill: #EB8EC4;
  }
  40% {
    fill: #E69B77;
  }
  50% {
    fill: #F0E0AD;
  }
  60% {
    fill: #CCE678;
  }
  70% {
    fill: #A5EFAD;
  }
  80% {
    fill: #94EBCF;
  }
  90% {
    fill: #C1D4CE;
  }
  100% {
    fill: #C4E2EF;
  }
}

@keyframes else-red-clr-shifter {
  0% {
    fill: #FF4200;
  }
  33% {
    fill: #FF2D00;
  }
  66% {
    fill: #C50000;
  }
  100% {
    fill: #FF2D00;
  }
}

</style>