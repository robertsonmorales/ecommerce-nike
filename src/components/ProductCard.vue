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
        <img :src="require(`../assets/images/products/featured_footwear/${img}`)"
          :alt="name"
          class="img-fluid"
        />
      </div>
    </div>
    <div class="product-body">
      <div class="product-price">
        <span class="discounted-price">{{ discounted_value }}</span><strike v-show="newPrice != discounted_value" class="prev-price">{{ newPrice }}</strike>
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

        <div class="product-sold">
          {{ formatReviews }} reviews
        </div>
      </div>

    </div>
    <div class="product-footer">
      <CardButtons />
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/_variable";

.product-card {
  display: flex;
  flex-direction: column;
  width: 380px;
  min-width: 100%;
  border-radius: $radius;
  overflow: hidden;
  border: 1px solid #eeeeee;
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

      .discounted-price {
        color: $primary;
        margin-right: 10px;
      }

      .prev-price{
        color: #777;
      }

      .discounted-price,
      .prev-price{
        &::before{
          content: "₱";
        }

        &::after{
          content: ".00";
        }
      }

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
import CardButtons from "@/components/CardButtons";
import ProductTag from "@/components/ProductTag";
import StarRateReviews from "@/components/StarRateReviews";

import { HeartIcon } from "vue-feather-icons";

export default {
  name: "ProductCard",
  components: {
    CardButtons,
    ProductTag,
    StarRateReviews,
    HeartIcon
  },
  props: {
    img: { type: String, required: true, },
    color: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: [String, Number], required: true },
    has_discount: { type: Boolean, default: false },
    discounted_price: { type: String, default: "" },
    rate: { type: Number, required: true },
    reviews: { type: Number, required: true },
    is_favorite: { type: Boolean, default: false }
  },
  data() {
    return {
      discounted_value: ""
    };
  },
  computed: {
    isFavorite: function(){
      return (this.is_favorite) ? "#FF4D00" : "transparent";
    },
    newPrice: function() {
      return this.digitSeparator(this.price);
    },
    formatReviews: function(){
      let review = this.digitSeparator(this.reviews);
      let splitReview = review.split(",");
      let reviewsLength = splitReview.length;
      let formattedReview = "";
      let unit, hundreds, thousands;
      
      if(reviewsLength == 1){
        formattedReview = this.reviews;
      }else if(reviewsLength == 2){ // K
        unit = "K";
        hundreds = (splitReview[1].charAt(0) == 0) ? "" : splitReview[1].charAt(0);
        hundreds = (hundreds == "") ? "" : "." + hundreds;
        thousands = splitReview[0];

        formattedReview = thousands + hundreds + unit;
      }

      return formattedReview;
    }
  },
  mounted(){
    this.discountedValue();
  },
  methods: {
    digitSeparator: function (val){
		  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	  },
    discountedValue: function(){
      var p = this.price; 
      var d = this.discounted_price.split("").reverse().join("").substring(1);
          d = d.split("").reverse().join("");
      
      var cd = parseFloat((d != "") ? '.' + d : 0); // cleared discount
      var td = (p * cd); // total discount

      this.discounted_value = this.digitSeparator(Math.round(p - td));
    },
    addToFavorite: function(bool){
      console.log(bool);
    }
  }
};
</script>
