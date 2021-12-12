<template>
  <div class="product-card">
    <div class="product-image">

      <ProductTag 
        v-if="has_discount" 
        :discount="discounted_price" />

      <button @click="addToFavorite(is_favorite)"
        type="button"
        class="btn-favorite">

        <heart-icon size="1.5x" 
          class="heart-icon"
          :fill="isFavorite" 
          :stroke="(isFavorite == 'transparent') 
          ? 'currentColor'
          : ''"></heart-icon>
      </button>

      <div class="img-wrapper">
        <img :src="publicPath + newImg"
          :alt="name"
          class="img-fluid"
        />
      </div>
    </div>
    <div class="product-body">
      <div class="product-price">
        <span class="discounted-price">{{ discountedValue | separator | unit }}</span>
        <strike v-show="price != discountedValue" 
          class="prev-price">{{ price | separator | unit }}</strike>
      </div>
      <h4 class="product-name">{{ name }}</h4>
      <p class="product-color">{{ color }}</p>
      
      <div class="customer-feedbacks">
        <div class="star-rate">
          <StarRateReviews
            v-for="(r, x) in 5"
            :key="x"
            :filled="(rate >= (x + 1)) 
              ? true 
              : false" />
        </div>

        <div class="product-sold">{{ sold | separator | shortThousand }} sold</div>
      </div>

    </div>
    <div class="product-footer">
      <card-actions :route="preview">View More</card-actions>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/_mixins";

.product-card {
  display: flex;
  flex-direction: column;
  width: 380px;
  min-width: 100%;
  border-radius: $radius;
  overflow: hidden;
  border: $border;
  background-color: #fff;
  filter: drop-shadow(10px 10px 30px rgba(224, 222, 220, 0.7));
  transition: all .3s ease;

  .product-image {
    background-color: #f5f5f5;
    padding: 20px 25px;

    .btn-favorite{
      outline: none;
      border: none;
      background-color: transparent;
      cursor: pointer;
      position: absolute;
      right: 25px;
      top: 20px;
      z-index: 1;

      .heart-icon{
          &:hover{
              fill: $primary;
              stroke: $primary;
          }
      }
    }

    .img-wrapper {
      overflow: hidden;
      text-align: center;
      transition: all .3s ease;
    }
  }

  .product-body {
    padding: 30px 25px;

    .product-price{
      font-weight: bold;
      margin-bottom: 10px;
    }

    .product-name {
      margin-bottom: 15px;
      font-size: 24px;
      font-weight: 500;
    }

    .product-color {
      font-size: 0.9em;
      color: rgba(0, 0, 0, 0.68);
      margin-bottom: 10px;
    }

    .customer-feedbacks {
      display: flex;
      align-items: center;

      .star-rate {
        margin-right: 10px;
      }

      .product-sold {
        font-size: 0.9em;
        color: rgba(0, 0, 0, 0.68);
      }
    }
  }

  .product-footer {
    margin-top: auto;
    padding: 0 25px 25px 25px;
  }

  &:hover{
    filter: drop-shadow(10px 10px 20px rgba(224, 222, 220, 1));

    .product-image .img-wrapper{
      transform: scale(1.1);
    }
  }
}
</style>

<script>
import CardActions from "@/components/CardActions";
import ProductTag from "@/components/ProductTag";
import StarRateReviews from "@/components/StarRateReviews";

import { HeartIcon } from "vue-feather-icons";
import { publicPath } from "../mixins/publicPath.js";

export default {
  name: "ProductCard",
  components: {
    CardActions,
    ProductTag,
    StarRateReviews,
    HeartIcon
  },
  props: {
    img: { type: String, required: true },
    color: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: [String, Number], required: true },
    has_discount: { type: Boolean, default: false },
    discounted_price: { type: String, default: "" },
    rate: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
    is_favorite: { type: Boolean, default: false }
  },
  mixins: [ publicPath ],
  data(){
    return {
      productId: this.$vnode.key
    }
  },
  computed: {
    preview: function(){
      return {
        name: "product-preview",
        params: {
          id: this.productId
        }
      };
    },
    isFavorite: function(){
      return (this.is_favorite) ? "#FF4D00" : "transparent";
    },
    discountedValue: function(){
      var p = this.price; 
      var d = this.discounted_price.split("").reverse().join("").substring(1);
          d = d.split("").reverse().join("");
      
      var cd = parseFloat((d != "") ? '.' + d : 0); // cleared discount
      var td = (p * cd); // total discount

      return Math.round(p - td);
    },
    newImg: function(){
      return "images/products/featured_footwear/" + this.img;
    }
  },
  methods: {
    addToFavorite: function(bool){
      console.log(bool);
    }
  }
};
</script>
