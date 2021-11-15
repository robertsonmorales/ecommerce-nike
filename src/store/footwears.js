import Vue from "vue";
import Axios from "axios";
import { API } from "./api.config";

Vue.use(Axios);

const fields = {
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

export const Footwears = {
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
      Axios.get(API.data.footwears, {
      	headers: API.headers
      }).then((res) => {
          
          commit({
            type: 'INDEX',
            data: res.data.featured_footwear
          });
      });
    },
    dispatchShowProduct({ commit }, id){
      Axios.get(API.data.footwears, {
      	headers: API.headers
      }).then((res) => {
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