<template>

  <main class="wrapper">

    <Hero />
    <FeaturedFootwear @count-favorites="countFavorites" />
    <LatestReleases />
    <MoreNike />

  </main>

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
  methods: {
    countFavorites: function(e){
      this.$emit('get-favorites', e);
    }
  }
};
</script>
