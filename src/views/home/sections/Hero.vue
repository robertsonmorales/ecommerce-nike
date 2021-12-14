<template>
  <header class="container-fluid">
    <div class="row">
      <div class="headlines">
        <h1 class="hero-headline">NIKE, JUST <br />DO IT.</h1>
        <p class="hero-subheadline">More Sport, More Inspiration, More Nike!</p>
        <call-to-action>Get Your Great &nbsp; &rarr;</call-to-action>
      </div>
      <div class="hero-banner">
        <div class="hero-image">
          <img
            :src="shoe"
            :alt="shoe"
            width="739"
            height="633"
            id="hero-model"
          />
          <img
            :src="ellipse"
            :alt="ellipse"
            id="ellipse"
            width="450"
            height="450"
          />
        </div>
        <div class="hero-colors">
          <ButtonCircle color="background-color: #111111;" selected />
          <ButtonCircle color="background-color: #FF4D00;" />
          <ButtonCircle color="background-color: #072C4D;" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import "../../../assets/scss/_variable";

header {
  height: 100vh;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .headlines {
    .hero-headline {
      font-family: $secondary-family;
      font-weight: 900;
      font-size: 64px;
      letter-spacing: 0.15em;
      color: $default;
      margin-top: 0;
      margin-bottom: 15px;
      white-space: nowrap;
      line-height: 80px;
    }

    .hero-subheadline {
      margin-bottom: 30px;
    }
  }

  .hero-banner {
    display: flex;
    align-items: center;
    position: relative;

    .hero-image {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      right: 50px;
    }

    .hero-colors {
      position: absolute;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}

#ellipse {
  position: absolute;
  z-index: -1;
}

#hero-model {
  animation-name: float;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-fill-mode: forwards;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(20px);
  }
}
</style>

<script>
import CallToAction from "@/components/CallToAction";
import ButtonCircle from "@/components/ButtonColor";

import Shoe from "@/assets/images/shoes.png";
import Ellipse from "@/assets/images/ellipse.svg";

export default {
  name: "Hero",
  components: {
    CallToAction,
    ButtonCircle,
  },
  data() {
    return {
      shoe: Shoe,
      ellipse: Ellipse,
    };
  },
};
</script>
