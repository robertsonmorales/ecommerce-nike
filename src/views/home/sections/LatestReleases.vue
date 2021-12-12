<template>
  <section class="latest-releases">
    <div class="subheadline">
      <h4>LATEST RELEASES</h4>
      <img src="@/assets/images/line.svg" alt="Line" />
    </div>

    <div class="latest-releases-content">
      <LatestShoes 
        v-for="latest in latestRelease"
        :key="latest.id"
        :img="latest.img"
        :name="latest.name"
        :price="latest.price" />
    </div>
  </section>
</template>

<style lang="scss">
@import "../../../assets/scss/_mixins";

.latest-releases{
  background-color: #fff;
  color: $primary;
  min-height: 793px;
  padding: 30px 0;
  overflow-x: hidden;

  .subheadline{
    padding: 30px 0 0 0 !important;
    color: $default;
  }

  .latest-releases-content{
    @include flexCenter(center);
    margin: 0 6% 45px 6%;
  }
}

</style>

<script>
import { mapGetters } from "vuex";

import LatestShoes from "@/components/LatestShoes.vue";

export default {
  name: "LatestReleases",
  components: {
    LatestShoes,
  },
  computed: {
    ...mapGetters([
      "latestRelease"
    ]),
  }
}
</script>
