<template>
  <header>
    <div class="headlines">
      <h1 class="hero-headline">
        Nike Pegasus <br />
        Trail 3 GORE-TEX
      </h1>
      <p class="hero-subheadline">Men's Waterproof Trail Running Shoes</p>
      <router-link to="get-your-great" class="btn btn-primary"
        >Shop Now</router-link
      >
    </div>

    <img src="images/bg.svg" alt="bg" width="893" height="500" id="model-bg" />

    <div class="hero-banner">
      <div class="hero-image">
        <img
          src="images/pegasus-trail-3-gore-tex-waterproof-trail-running-shoes.png"
          alt="pegasus-trail-3-gore-tex-waterproof-trail-running-shoes"
          width="700"
          height="auto"
          id="hero-model"
        />
      </div>
      <div class="hero-options">
        <router-link to="new-arrivals" class="img-options">
          <img
            src="images/Nike ZoomX Vaporfly Next 2.png"
            alt="Nike ZoomX Vaporfly Next% 2"
            width="130"
            height="130"
          />
        </router-link>

        <router-link to="new-arrivals" class="img-options">
          <img
            src="images/Nike ZoomX Dragonfly.png"
            alt="Nike ZoomX Dragonfly"
            width="130"
            height="130"
          />
        </router-link>

        <router-link to="new-arrivals" class="img-options">
          <img
            src="images/Nike ZoomX Vaporfly Next 2 - white.png"
            alt="Nike ZoomX Vaporfly Next% 2 - white"
            width="130"
            height="130"
          />
        </router-link>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import "../../../assets/scss/_mixins";

header {
  @include flexCenter(space-between);
  min-height: 100vh;
  min-width: 100%;
  margin-bottom: 4rem;

  .headlines {
    margin-left: $margin-side;

    .hero-headline {
      font-family: $secondary-family;
      font-weight: bold;
      font-size: 60px;
      color: $default;
      margin-top: 0;
      margin-bottom: 15px;
      white-space: nowrap;
      line-height: 75px;
      z-index: 1;
    }

    .hero-subheadline {
      margin-bottom: 30px;
    }
  }

  #model-bg {
    position: absolute;
    right: 0;
    z-index: -1;
  }

  .hero-banner {
    position: relative;
    right: 50px;

    .hero-image {
      @include flexCenter(center, column);

      #hero-model {
        width: 700px;
        height: auto;
        object-fit: cover;
      }
    }

    .hero-options {
      @include flexCenter(center, row);
      position: absolute;
      width: 100%;

      .img-options {
        width: 160px;
        height: 160px;
        background-color: $bg-light;
        border-radius: 0px 0px 100px 100px;
        overflow: hidden;
        margin-right: 5px;
        @include flexCenter(center);

        img {
          width: 130px;
          height: 130px;
          transition: all 0.3s ease;

          &:hover {
            transform: scale(1.1);
          }
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "Hero",
};
</script>
