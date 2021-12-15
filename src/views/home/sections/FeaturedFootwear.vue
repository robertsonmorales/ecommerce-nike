<template>
  <section class="bg-light">
    <div class="container-fluid">
      <div class="featured-footwear">
        <div class="subheadline">
          <h4>FEATURED FOOTWEAR</h4>
          <img src="@/assets/images/line.svg" alt="Line" />
        </div>

        <div class="card-group">
          <ProductCard
            v-for="product in fetchProduct"
            :key="product.id"
            :img="product.img"
            :name="product.name"
            :price="product.price"
            :color="product.color"
            :has_discount="product.has_discount"
            :discounted_price="product.discounted_price"
            :rate="product.rate"
            :sold="product.sold"
            :is_favorite="product.is_favorite"
          />
        </div>

        <div class="view-more">
          <router-link to="featured-footwears" class="text-primary"
            >View More Featured Footwears</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/_mixins";

.featured-footwear {
  padding: $spacing 0;

  .card-group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-bottom: 45px;
  }

  .view-more {
    text-align: center;

    a {
      // text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        font-weight: 600;
      }
    }
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
    ...mapGetters(["fetchProduct"]),
  },
};
</script>
