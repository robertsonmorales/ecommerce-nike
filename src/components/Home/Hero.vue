<template>
  <header class="container-fluid">
    <div class="hero">
      <div class="row">
        <div class="col">
          <h1 class="hero-headline">NIKE, JUST <br />DO IT.</h1>
          <p class="hero-subheadline">More Sport, More Inspiration, More Nike!</p>
          <br />
          <Button text="Get Your Get &nbsp; &rarr;" />
        </div>
        <div class="col">
          <div class="hero-banner">
            <div class="hero-image">
              <img :src="shoe" :alt="shoe" width="739" height="633" />
              <img
                :src="ellipse"
                :alt="ellipse"
                id="ellipse"
                width="500"
                height="500"
              />
            </div>
            <div class="hero-colors">
              <ButtonCircle color="background-color: #111111;" selected="1" />
              <ButtonCircle color="background-color: #FF4D00;" />
              <ButtonCircle color="background-color: #072C4D;" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import "../../assets/scss/_variable";

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .hero-headline {
    font-family: $secondary-family !important;
    font-weight: 900;
    font-size: 64px;
    letter-spacing: 0.15em;
    color: $default;
    margin-top: 0;
    margin-bottom: 15px;
    white-space: nowrap;
  }

  .hero-subheadline {
    margin-bottom: 30px;
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
    }

    .hero-colors {
      position: absolute;
      right: 0;
    }
  }
}

#ellipse {
  position: absolute;
  z-index: -1;
}
</style>

<script>
import Button from "@/components/Button";
import ButtonCircle from "@/components/ButtonColor";

import Shoe from "@/assets/images/shoes.png";
import Ellipse from "@/assets/images/ellipse.svg";

export default {
  name: "Hero",
  components: {
    Button,
    ButtonCircle,
  },
  mounted() {
    console.log("Hero Mounted Successfully!");
  },
  data() {
    return {
      shoe: Shoe,
      ellipse: Ellipse,
    };
  },
};
</script>
