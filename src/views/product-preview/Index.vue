<template>
  <main class="wrapper">
    <ProductDetails />
  </main>
</template>

<script>
import ProductDetails from "./sections/ProductDetails";

export default {
  name: "ProductPreview",
  components: {
    ProductDetails,
  },
  mounted() {
    this.$store.dispatch("showSelectedFootwear", this.$route.params.id);
  },
};
</script>
