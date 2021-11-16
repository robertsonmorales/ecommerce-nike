<template>

  <main class="wrapper">

    <Hero />
    <FeaturedFootwear />
    <LatestReleases />
    <MoreNike />

  </main>

</template>

<script>
import Hero from "./sections/Hero";

import FeaturedFootwear from "./sections/FeaturedFootwear";
import LatestReleases from "./sections/LatestReleases";
import MoreNike from './sections/MoreNike';

export default {
  name: "Home",
  components: {
    Hero,
    FeaturedFootwear,
    LatestReleases,
    MoreNike
  },
  mounted(){
    this.$store.dispatch("fetchFeaturedFootwear");
    this.$store.dispatch("fetchLatestReleases");
    this.$store.dispatch("fetchCategories");
  }
};
</script>
