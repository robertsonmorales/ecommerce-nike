<template>
  <div class="wrapper">
    <Hero />
    <FeaturedFootwear />
    <LatestReleases />
    <MoreNike />
  </div>
</template>

<script>
import Hero from "@/components/Home/Hero";
import FeaturedFootwear from "@/components/Home/FeaturedFootwear";
import LatestReleases from "@/components/Home/LatestReleases";
import MoreNike from '@/components/Home/MoreNike';

export default {
  name: "Home",
  components: {
    Hero,
    FeaturedFootwear,
    LatestReleases,
    MoreNike
  },
  mounted() {
    console.log("Home Mounted Successfully!");
  }
};
</script>
