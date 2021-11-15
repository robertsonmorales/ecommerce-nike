import Vue from "vue";
import Vuex from "vuex";

import { Footwears } from "./footwears";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    footwears: Footwears,
  },
});

export default store;