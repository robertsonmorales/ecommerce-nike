<template>
  <div class="btn-group">
    <button @click="addToCart" class="btn btn-light btn-add-to-cart">

      <div class="flex-center">
        <shopping-cart-icon size="1.5x" class="cart-icon"></shopping-cart-icon>
        <span>Add to cart</span>
      </div>

    </button>

    <div class="y-divider"></div>

    <button class="btn btn-primary">View More</button>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/_variable";

.btn-group {
  display: flex;
  align-items: center;

  .y-divider {
    margin: 0 5px;
  }

  .btn-add-to-cart {
    .flex-center {
      display: flex;
      align-items: center;
    }

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
  methods: {
    addToCart: function () {
      this.$emit('add-to-cart');
    }
  },
};
</script>
