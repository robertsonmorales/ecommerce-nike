<template>
  <div class="product-card">
    <div class="product-image">
      <div class="product-tag">
        <img :src="tag" alt="tag" />
        <span class="product-label">
          <tag-icon size="1x" class="tag-icon"></tag-icon>
          <span>29% off</span>
        </span>
      </div>
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
      <div class="price">{{ price }}</div>
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

    .product-tag {
      display: flex;
      align-items: center;
      position: relative;

      .product-label {
        display: flex;
        align-items: center;
        position: absolute;
        left: 5px;
        color: #fff;

        .tag-icon {
          margin-right: 10px;
        }

        span {
          font-size: 0.9em;
          font-weight: 500;
        }
      }
    }

    .img-wrapper {
      text-align: center;
    }
  }

  .product-body {
    padding: 30px 25px;

    .price {
      color: $primary;
      font-weight: bold;
      margin-bottom: 10px;
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
}
</style>

<script>
import CardButtons from "@/components/CardButtons";
import { TagIcon } from "vue-feather-icons";
import Tag from "../assets/images/tag.png";

import Star from "../assets/images/star.svg";
import StarFilled from "../assets/images/star-filled.svg";

export default {
  name: "ProductCard",
  components: {
    TagIcon,
    CardButtons,
  },
  props: {
    img: String,
    color: String,
    name: String,
    price: String,
  },
  data() {
    return {
      star: Star,
      starFilled: StarFilled,
      tag: Tag,
    };
  },
};
</script>
