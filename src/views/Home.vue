<template>
  <div class="wrapper">
    <Hero />
    <FeaturedFootwear />
    <LatestReleases />
  </div>
</template>

<script>
import Hero from "@/components/Home/Hero";
import FeaturedFootwear from "@/components/Home/FeaturedFootwear";
import LatestReleases from "@/components/Home/LatestReleases";

export default {
  name: "Home",
  components: {
    Hero,
    FeaturedFootwear,
    LatestReleases,
  },
  mounted() {
    console.log("Home Mounted Successfully!");
  }
};
</script>
