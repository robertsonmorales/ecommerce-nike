import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/home/Index.vue";
import ProductPreview from "@/views/product-preview/Index.vue";
import Checkout from "@/views/checkout/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/product-preview/:id",
    name: "product-preview",
    component: ProductPreview,
  },
  {
    path: "/product-checkout/:id",
    name: "product-checkout",
    component: Checkout,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
