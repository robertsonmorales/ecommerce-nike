<template>
  <div class="btn-group">
    <button @click="addToCart" class="btn btn-light btn-add-to-cart">
      <shopping-cart-icon size="1.5x" class="cart-icon"></shopping-cart-icon>
      <span>Add to cart</span>
    </button>

    <div class="y-divider"></div>

    <router-link :to="route" class="btn btn-primary">
      <slot></slot>
    </router-link>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/_mixins";

.btn-group {
  @include flexCenter(flex-start);

  .y-divider {
    margin: 0 5px;
  }

  .btn-add-to-cart {
    @include flexCenter(center);

    .cart-icon {
      margin-right: 10px;
    }
  }
}
</style>

<script>
import { ShoppingCartIcon } from "vue-feather-icons";

export default {
  name: "CardButtons",
  components: {
    ShoppingCartIcon,
  },
  props: {
    route: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      options: {
        theme: "outline",
        position: "top-center",
        duration: 4000,
        action: {
          text: "x",
          onClick: function (e, obj) {
            obj.goAway(0);
          },
        },
      },
    };
  },
  methods: {
    addToCart: function () {
      this.$toasted.show(`Added to cart`, this.options);
    },
  },
};
</script>
