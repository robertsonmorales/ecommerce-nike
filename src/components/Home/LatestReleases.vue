<template>
    <div class="latest-releases">
        <div class="subheadline">
            <h4>LATEST RELEASES</h4>
            <img src="../../assets/images/line2.svg" alt="Line" />
        </div>

        <div class="container-fluid">
            <div class="latest-releases-content">
                <LatestShoes v-for="latest in latests"
                    :key="latest.id"
                    :img="latest.img"
                    :name="latest.name"
                    :price="latest.price"
                    :width="latest.width"
                    :height="latest.height" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "../../assets/scss/_variable";

.latest-releases{
    background-color: $primary;
    color: #fff;
    min-height: 793px;
    padding: 15px 0;
    overflow-x: hidden;

    .latest-releases-content{
        display: flex;
        align-items: center;
    }
}

</style>

<script>
import axios from "axios";
import LatestShoes from "../LatestShoes.vue";

export default {
    name: "LatestReleases",
    components: {
        LatestShoes,
    },
    data(){
        return {
            latests: []
        }
    },
    created(){
        axios.get("http://localhost:3000/latest_release")
            .then((response) => {
                // console.log(response.data);

                this.latests = response.data;
            });
    }
}
</script>
