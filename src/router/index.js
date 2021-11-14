import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import ProductPreview from "@/views/ProductPreview.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product-preview/:id",
    name: "ProductPreview",
    component: ProductPreview,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
