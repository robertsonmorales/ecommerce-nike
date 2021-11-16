import Vue from "vue";
import Vuex from "vuex";

import { Footwears } from "@/store/modules/footwears";
import { LatestReleases } from "@/store/modules/latest_release";
import { Categories } from "@/store/modules/categories";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    footwears: Footwears,
    latest_releases: LatestReleases,
    categories: Categories
  },
});

export default store;