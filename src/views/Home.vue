<template>
  <div class="hero">
    <div class="row">
      <div class="col">
        <h1 class="hero-header">NIKE, JUST <br />DO IT.</h1>
        <p class="hero-subheader">More Sport, More Inspiration, More Nike!</p>
        <br />
        <Button text="Get Your Get &nbsp; &rarr;" />
      </div>
      <div class="col">
        <div class="hero-image">
          <img :src="shoe" :alt="shoe" width="739" height="633">
          <img :src="ellipse" :alt="ellipse" id="ellipse" width="470" height="470">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/_variable.scss";

.row{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero-image{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

#ellipse{
  position: absolute;
  z-index: -1;
}

.hero-header {
  font-family: $secondary-family !important;
  font-weight: 900;
  font-size: 64px;
  letter-spacing: 0.15em;
  color: $default;
  margin-bottom: 15px;
}

.hero-subheader {
  margin-bottom: 30px;
}
</style>

<script>
import Button from "@/components/Button";
import Shoe from "@/assets/images/shoes.png";
import Ellipse from '@/assets/images/ellipse.svg';

export default {
  name: "Home",
  components: {
    Button,
  },
  mounted() {
    console.log("Home Mounted Successfully!");
  },
  data() {
    return {
      shoe: Shoe,
      ellipse: Ellipse,
    };
  },
};
</script>
