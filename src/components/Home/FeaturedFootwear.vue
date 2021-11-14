<template>
  <section class="container-fluid">
    <div class="featured-footwear">
      <div class="subheadline">
        <h4>FEATURED FOOTWEAR</h4>
        <img src="../../assets/images/line.svg" alt="Line" />
      </div>

      <div class="card-group">
        <ProductCard v-for="product in fetchProduct"
          :key="product.id"
          :img="product.img"
          :name="product.name"
          :price="product.price"
          :color="product.color"
          :has_discount="product.has_discount"
          :discounted_price="product.discounted_price"
          :rate="product.rate"
          :reviews="product.reviews"
          :is_favorite="product.is_favorite" />
      </div>

      <div class="load-more">
        <button type="button" 
          class="btn btn-primary btn-load-more">Load More</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../../assets/scss/_variable";

.featured-footwear {
  margin-bottom: 52px;

  .card-group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-bottom: 45px;
  }

  .load-more {
    text-align: center;
  }
}
</style>

<script>
import { mapGetters } from "vuex";

import ProductCard from "@/components/ProductCard";

export default {
  name: "FeaturedFootwear",
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters([
      "fetchProduct"
    ])
  }
};
</script>
