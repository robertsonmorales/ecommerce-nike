import Vue from "vue";
import Vuex from "vuex";

import Axios from "axios";

Vue.use(Vuex, Axios);

// const __API__CATEGORIES = "https://api.jsonbin.io/b/61910bbe0ddbee6f8b0b1e00";
// const __API__LATEST_RELEASES = "https://api.jsonbin.io/b/61910b6d0ddbee6f8b0b1dd9";

const API__FOOTWEARS = "https://api.jsonbin.io/b/619122ff01558c731cc217d0"; // featured_footwears

const HEADERS = { 
  "X-Master-Key": "$2b$10$TSdN37bgq5btrJOM0i1r0e2625W/uvUSXKDqyV9Hra/7sUoehKAue"
};

let fields = {
  id: 0,
  img: "",
  name: "",
  description: "",
  color: "",
  price: 0,
  has_discount: false,
  discounted_price: "",
  rate: 0,
  reviews: 0,
  is_favorite: false
};

const FEATURED__FOOTWEAR = {
  state: {
    data: [ fields ],
    product_preview: fields
  },
  mutations: {
    INDEX (state, response){
      state.data = response.data;
    },
    SHOW (state, response){
      state.product_preview = response.data;
    }
  },
  actions: {
    dispatchProduct({ commit }) {
      Axios.get(API__FOOTWEARS, { headers: HEADERS })
        .then((res) => {
          
          commit({
            type: 'INDEX',
            data: res.data.featured_footwear
          });
      });
    },
    dispatchShowProduct({ commit }, id){
      Axios.get(API__FOOTWEARS, { headers: HEADERS })
        .then((res) => {
          let footwears = res.data.featured_footwear;
          let product = {};

          for (var i = 0; i < footwears.length; i++) {
            if(footwears[i].id == id){
              product = footwears[i];
            }
          }

          commit({
            type: 'SHOW',
            data: product
          });

        });
    }
  },
  getters: {
    fetchProduct(state){
      return state.data;
    },
    fetchSelectedProduct(state){
      return state.product_preview;
    }
  }
};

const store = new Vuex.Store({
  modules: {
    footwears: FEATURED__FOOTWEAR,
  },
});

export default store;