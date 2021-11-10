<template>
  <div class="product-card">
    <div class="product-image">

      <ProductTag v-if="has_discount" 
        :discount="discounted_price" />

      <div class="btn-favorite"></div>

      <div class="img-wrapper">
        <img
          :src="require(`../assets/images/products/featured_footwear/${img}`)"
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
          <img :src="starFilled" :alt="starFilled" width="17" height="16" />
          <img :src="starFilled" :alt="starFilled" width="17" height="16" />
          <img :src="starFilled" :alt="starFilled" width="17" height="16" />
          <img :src="starFilled" :alt="starFilled" width="17" height="16" />
          <img :src="star" :alt="star" width="17" height="16" />
        </div>
        <div class="product-sold">1.2k</div>
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
  justify-content: space-between;
  width: 380px;
  min-width: 100%;
  border-radius: $radius;
  overflow: hidden;
  border: 1px solid #eeeeee;
  background-color: #fff;
  filter: drop-shadow(10px 10px 30px rgba(224, 222, 220, 0.7));

  .product-image {
    background-color: #f5f5f5;
    padding: 20px 25px;

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
        margin-right: 20px;
      }

      .product-sold {
        font-size: 0.9em;
        color: rgba(0, 0, 0, 0.68);
      }
    }
  }

  .product-footer {
    padding: 0 25px 25px 25px;
  }

  &:hover .product-image .img-wrapper{
    transform: scale(1.1);
  }
}
</style>

<script>
import CardButtons from "@/components/CardButtons";
import ProductTag from "@/components/ProductTag";

import Star from "../assets/images/star.svg";
import StarFilled from "../assets/images/star-filled.svg";

export default {
  name: "ProductCard",
  components: {
    CardButtons,
    ProductTag,
  },
  props: {
    img: String,
    color: String,
    name: String,
    price: String,
    has_discount: Boolean,
    discounted_price: String
  },
  data() {
    return {
      star: Star,
      starFilled: StarFilled,
      discounted_value: ""
    };
  },
  created(){
    var p = this.price; 
    var d = this.discounted_price.split("").reverse().join("").substring(1);
        d = d.split("").reverse().join("");
    
    var cd = parseFloat((d != "") ? '.' + d : 0); // cleared discount
    var td = (p * cd); // total discount
    this.discounted_value = this.commaSeparated(Math.round(p - td));
  },
  methods: {
    commaSeparated: function (val){
		  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	  }
  },
  computed: {
    newPrice: function(){
      return this.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  }
};
</script>
