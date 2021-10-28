<template>
  <div class="wrapper">
    <Hero />
    <FeaturedFootwear />
  </div>
</template>

<script>
import Hero from "@/components/Home/Hero";
import FeaturedFootwear from "@/components/Home/FeaturedFootwear";

export default {
  name: "Home",
  components: {
    Hero,
    FeaturedFootwear,
  },
  mounted() {
    console.log("Home Mounted Successfully!");
  },
};
</script>
