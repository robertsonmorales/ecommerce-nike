<template>
  <section class="product-details">
    <div class="product">
      <div class="preview">
        <div class="product-carousel">
          <div class="img-wrapper">
            <img
              class="img-fluid"
              :src="publicPath + newImg"
              :alt="fetchSelectedProduct.name"
              width="433"
              height="443"
            />
          </div>
          <div class="carousel-btns"></div>
        </div>
      </div>
    </div>

    <div class="details">
      <h1 class="product-name">{{ name }}</h1>

      <div class="rate-and-review">
        <div class="star-rate">
          <StarRateReviews
            v-for="(r, x) in 5"
            :key="x"
            :filled="fetchSelectedProduct.rate >= x + 1 ? true : false"
          />
          <span class="rating">{{ fetchSelectedProduct.rate | rate }}</span>
        </div>
        <span class="vertical-divider">|</span>
        <span class="review"
          >{{ reviews | separator | shortThousand }} reviews</span
        >
        <span class="vertical-divider">|</span>
        <span class="sold"
          >{{
            fetchSelectedProduct.sold | separator | shortThousand
          }}
          sold</span
        >
      </div>

      <div class="product-price">
        <h3 class="new-price">
          <span class="discounted-price">{{
            discountedValue | separator | unit
          }}</span>
          <strike class="prev-price" v-show="price != discountedValue">{{
            price | separator | unit
          }}</strike>
        </h3>

        <ProductTag
          v-if="fetchSelectedProduct.has_discount"
          :discount="fetchSelectedProduct.discounted_price"
        />
      </div>

      <div class="delivery">
        <div class="delivery-info">
          <div class="details">
            Delivery
            <div class="more-info">?</div>
          </div>
          <truck-icon size="1.5x" class="truck-icon"></truck-icon>

          <div class="delivery-tag">
            <img :src="green_tag" alt="Green Tag" width="110" height="24" />
            <span class="label-tag">Free Delivery</span>
          </div>
        </div>
        <ul class="delivery-notes">
          <li class="delivery-note-item">
            Standard delivered 5-9 Business Days
          </li>
          <li class="delivery-note-item">
            Express delivered 2-4 Business Days
          </li>
        </ul>
      </div>

      <div class="designs">
        <div class="details">Design</div>
        <div class="design-gallery">
          <div class="design-img active">
            <img
              src="/images/Jordan One Take II PF/CW2458-006/Index.jfif"
              alt="Jordan One Take II PF"
              width="80"
              height="80"
              style="object-fit: cover"
            />
          </div>
          <div class="design-img">
            <img
              src="/images/Jordan One Take II PF/CW2458-006/Index.jfif"
              alt="Jordan One Take II PF"
              width="80"
              height="80"
              style="object-fit: cover"
            />
          </div>
          <div class="design-img">
            <img
              src="/images/Jordan One Take II PF/CW2458-006/Index.jfif"
              alt="Jordan One Take II PF"
              width="80"
              height="80"
              style="object-fit: cover"
            />
          </div>
          <div class="design-img">
            <img
              src="/images/Jordan One Take II PF/CW2458-006/Index.jfif"
              alt="Jordan One Take II PF"
              width="80"
              height="80"
              style="object-fit: cover"
            />
          </div>
        </div>
      </div>
      <!-- <p class="description">{{ fetchSelectedProduct.description }}</p> -->

      <!-- <ProductQty /> -->

      <card-actions :route="checkout">Checkout Now</card-actions>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/_mixins";

.product-details {
  margin: $spacing 0;
  padding: 0 $margin-side;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 45px;
  min-height: 80vh;

  .product {
    .preview {
      @include flexCenter(center);
      position: relative;
      background-color: $bg-light;
      border-radius: 10px;
      border: 1px solid $border;

      .product-tag {
        position: absolute;
        top: 20px;
        left: 20px;
      }
    }
  }

  .details {
    position: relative;

    .product-name,
    .product-price {
      margin-bottom: 15px;
    }

    .rate-and-review {
      margin-bottom: 30px;
      @include flexCenter(flex-start);

      .star-rate {
        @include flexCenter(center);

        .rating {
          margin-left: 10px;
          font-weight: 600;
          color: $primary;
        }
      }

      .vertical-divider {
        margin: 0 30px;
        color: $divider;
      }
    }

    .product-price {
      @include flexCenter(flex-start);

      .new-price {
        margin-right: 30px;
      }
    }

    .delivery {
      margin-bottom: 30px;

      .delivery-info {
        @include flexCenter(flex-start);
        margin-bottom: 10px;

        .details {
          @include flexCenter(flex-start);
          margin-right: 15px;

          .more-info {
            @include flexCenter(center);
            background-color: #5858f3;
            color: #fff;
            font-size: 0.7em;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            margin-left: 5px;
          }
        }

        .truck-icon {
          margin-right: 15px;
        }

        .delivery-tag {
          @include flexCenter(flex-start);
          position: relative;

          img {
            width: 110px;
            height: 24px;
          }

          .label-tag {
            position: absolute;
            left: 5px;
            font-size: 0.8em;
            color: #fff;
          }
        }
      }

      .delivery-notes {
        color: $text-muted;
        margin-left: 20px;

        .delivery-note-item {
          font-size: 0.8em;
          margin-bottom: 5px;
        }
      }
    }

    .designs {
      margin-bottom: 30px;

      .details {
        margin-bottom: 10px;
      }

      .design-gallery {
        @include flexCenter(flex-start);

        .design-img {
          margin-right: 10px;
          border-radius: $radius;
          overflow: hidden;
          background-color: $bg-light;
          box-sizing: border-box;

          &:last-child {
            margin-right: 0;
          }
        }

        .active {
          border: 1px solid $primary;
        }
      }
    }
    // .description {
    //   margin-bottom: 30px;
    //   line-height: 24px;
    // }
  }
}
</style>

<script>
import { mapGetters } from "vuex";
import { TruckIcon } from "vue-feather-icons";
import ProductTag from "@/components/ProductTag";
import StarRateReviews from "@/components/StarRateReviews";
// import ProductQty from "@/components/ProductQty";
import CardActions from "@/components/CardActions";

import { publicPath } from "@/mixins/publicPath.js";

import GreenTag from "@/assets/images/green-tag.png";

export default {
  name: "ProductDetails",
  components: {
    TruckIcon,
    ProductTag,
    StarRateReviews,
    // ProductQty,
    CardActions,
  },
  mixins: [publicPath],
  data() {
    return {
      productId: this.$route.params.id,
      green_tag: GreenTag,
    };
  },
  computed: {
    ...mapGetters(["fetchSelectedProduct"]),
    checkout: function () {
      return {
        name: "product-checkout",
        params: {
          id: this.productId,
        },
      };
    },
    name: function () {
      return this.fetchSelectedProduct.name;
    },
    price: function () {
      return this.fetchSelectedProduct.price;
    },
    discountedValue: function () {
      var p = this.fetchSelectedProduct.price;
      var d = this.fetchSelectedProduct.discounted_price
        .split("")
        .reverse()
        .join("")
        .substring(1);
      d = d.split("").reverse().join("");

      var cd = parseFloat(d != "" ? "." + d : 0); // cleared discount
      var td = p * cd; // total discount

      return Math.round(p - td);
    },
    reviews: function () {
      return this.fetchSelectedProduct.reviews;
    },
    newImg: function () {
      return (
        "images/products/featured_footwear/" + this.fetchSelectedProduct.img
      );
    },
  },
};
</script>
