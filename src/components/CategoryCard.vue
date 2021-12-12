<template>
  <a class="category-card">
    <img class="category-img" 
        :src="publicPath + newImg" 
        :alt="name"
        width="380"
        height="600"/>
    <h3 class="category-name">{{ name }}</h3>
  </a>
</template>

<style lang="scss">
.category-card {
  text-decoration: none;
  position: relative;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  overflow: hidden;
  max-height: 100%;
  cursor: pointer;

  &:first-child{
    border-radius: 0px 200px 200px 200px;
  }

  &:nth-last-child(even){
    border-radius: 200px;
  }

  &:last-child{
    border-radius: 200px 200px 0px 200px;
  }

  .category-img {
    max-height: 100%;
    width: 380px;
    height: 600px;
    transition: all 0.3s ease;
    filter: saturate(0.5);
    object-fit: cover;
  }

  .category-name {
    position: absolute;
    // left: 30px;
    bottom: 30px;
    color: #fff;
    font-weight: normal;
    transition: all 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
    filter: saturate(1);
  }

  &:hover h3 {
    font-size: 1.4rem;
  }
}
</style>

<script>
import { publicPath } from "@/mixins/publicPath.js";

export default {
  name: "CategoryCard",
  props: {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  mixins: [publicPath],
  computed: {
    newImg: function () {
      return "images/categories/" + this.img;
    },
  },
};
</script>
