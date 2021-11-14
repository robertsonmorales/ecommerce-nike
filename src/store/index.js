import Vue from "vue";
import Vuex from "vuex";

import Axios from "axios";

Vue.use(Vuex, Axios);

const store = new Vuex.Store({
  state: {
    data: {}
  },
  mutations: {
    mutateData (state, response){
      state.data = response.data;
    }
  },
  actions: {
    dispatchData({ commit }) {
      let api = "https://api.jsonbin.io/b/618e4de94a56fb3dee0ddecc";
      let headersConfig = { "X-Master-Key": "$2b$10$TSdN37bgq5btrJOM0i1r0e2625W/uvUSXKDqyV9Hra/7sUoehKAue" };

      Axios.get(api, { headers: headersConfig })
        .then((res) => {
          commit({
            type: 'mutateData',
            data: res.data
          });
      });   
    }
  },
  getters: {
    getFeaturedFootwear(state){
      return state.data.featured_footwear;
    },
    getLatestRelease(state){
      return state.data.latest_release;
    },
    getCategories(state){
      return state.data.categories;
    },
    getFav(state){
      var products = state.data.featured_footwear;
      var counter = 0;
      console.log(products);
      // for (var i = 0; i < products.length; i++) {
      //   if (products[i].is_favorite) {
      //     counter += 1;
      //   }
      // }

      return counter;
    }
  },
  modules: {},
});

export default store;