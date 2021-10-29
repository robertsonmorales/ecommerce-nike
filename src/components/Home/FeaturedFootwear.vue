<template>
  <div class="container-fluid">
    <div class="featured-footwear">
      <div class="subheadline">
        <h4>FEATURED FOOTWEAR</h4>
        <img src="../../assets/images/line.svg" alt="Line" />
      </div>

      <div class="card-group">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :img="product.img"
          :name="product.name"
          :price="product.price"
          :color="product.color"
        />
      </div>

      <div class="load-more">
        <button type="button" class="btn btn-primary btn-load-more">
          Load More
        </button>
      </div>
    </div>
  </div>
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
import axios from "axios";
import ProductCard from "@/components/ProductCard";

export default {
  name: "FeaturedFootwear",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    axios.get("http://localhost:3000/featured_footwear").then((res) => {
      this.products = res.data;
    });
  },
};
</script>
