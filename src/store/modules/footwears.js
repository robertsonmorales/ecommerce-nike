import Axios from "axios";
import { API } from "../api.config";

const FIELDS = {
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
  sold: 0,
  is_favorite: false,
};

export const Footwears = {
  state: {
    data: [FIELDS],
    product_preview: FIELDS,
  },
  mutations: {
    INDEX_FOOTWEAR(state, response) {
      state.data = response.data;
    },
    SHOW_FOOTWEARS(state, response) {
      state.product_preview = response.data;
    },
  },
  actions: {
    fetchFeaturedFootwear({ commit }) {
      Axios.get(API.data.footwears, {
        headers: API.headers,
      }).then((res) => {
        commit({
          type: "INDEX_FOOTWEAR",
          data: res.data.featured_footwear,
        });
      });
    },
    showSelectedFootwear({ commit }, id) {
      Axios.get(API.data.footwears, {
        headers: API.headers,
      }).then((res) => {
        let footwears = res.data.featured_footwear;
        let product = {};

        for (var i = 0; i < footwears.length; i++) {
          if (footwears[i].id == id) {
            product = footwears[i];
          }
        }

        commit({
          type: "SHOW_FOOTWEARS",
          data: product,
        });
      });
    },
  },
  getters: {
    fetchProduct(state) {
      return state.data;
    },
    fetchSelectedProduct(state) {
      return state.product_preview;
    },
  },
};
