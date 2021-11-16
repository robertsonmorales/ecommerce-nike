import Axios from "axios";
import { API } from "../api.config";

const FIELDS = {
  id: 0,
  name: "",
  img: ""
};

export const Categories = {
  state: {
    data: [ FIELDS ]
  },
  mutations: {
    INDEX_CATEGORY (state, response){
      state.data = response.data;
    }
  },
  actions: {
    fetchCategories({ commit }) {
      Axios.get(API.data.categories, {
      	headers: API.headers
      }).then((res) => {
          commit({
            type: 'INDEX_CATEGORY',
            data: res.data.categories
          });
      });
    }
  },
  getters: {
    categories(state){
      return state.data;
    }
  }
};