<template>
    <a class="category-card">
        <img class="category-img"
        :src="publicPath + newImg"
        :alt="name">
        <h3 class="category-name">{{ name }}</h3>
    </a>
</template>

<style lang="scss">
.category-card{
    text-decoration: none;
    position: relative;
    background-color: #ddd;
    display: flex;
    border-radius: 2px;
    overflow: hidden;
    max-height: 100%;
    cursor: pointer;

    .category-img{
        max-height: 100%;
        transition: all .3s ease;
        filter: saturate(0.5);
    }

    .category-name{
        position: absolute;
        left: 30px;
        bottom: 30px;
        color: #fff;
        font-weight: normal;
        transition: all .3s ease;
    }

    &:hover img{
        transform: scale(1.1);
        filter: saturate(1);
    }

    &:hover h3{
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
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    mixins: [ publicPath ],
    computed: {
        newImg: function(){
          return "images/categories/" + this.img;
        }
    }
}
</script>