<template>

  <main class="wrapper">

    <Hero />
    <FeaturedFootwear />
    <!-- <LatestReleases />
    <MoreNike /> -->

  </main>

</template>

<script>
import Hero from "@/components/Home/Hero";
import FeaturedFootwear from "@/components/Home/FeaturedFootwear";
// import LatestReleases from "@/components/Home/LatestReleases";
// import MoreNike from '@/components/Home/MoreNike';

export default {
  name: "Home",
  components: {
    Hero,
    FeaturedFootwear,
    // LatestReleases,
    // MoreNike
  },
};
</script>
