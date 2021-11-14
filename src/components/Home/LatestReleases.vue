<template>
    <section class="latest-releases">
        <div class="subheadline">
            <h4>LATEST RELEASES</h4>
            <img src="../../assets/images/line2.svg" alt="Line" />
        </div>

        <div class="latest-releases-content">
            <LatestShoes v-for="latest in getLatestRelease"
                :key="latest.id"
                :img="latest.img"
                :name="latest.name"
                :price="latest.price"
                :width="latest.width"
                :height="latest.height"
                :customStyle="latest.style" />
        </div>
        <br>
        <br>
        <br>
    </section>
</template>

<style lang="scss">
@import "../../assets/scss/_variable";

.latest-releases{
    background-color: $primary;
    color: #fff;
    min-height: 793px;
    padding: 30px 0;
    overflow-x: hidden;

    .subheadline{
        padding-bottom: 0px !important;
    }

    .latest-releases-content{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 6%;
    }
}

</style>

<script>
import { mapGetters } from "vuex";
import LatestShoes from "../LatestShoes.vue";

export default {
  name: "LatestReleases",
  components: {
      LatestShoes,
  },
  computed: {
    ...mapGetters([
        "getLatestRelease"
        ])
  }
}
</script>
