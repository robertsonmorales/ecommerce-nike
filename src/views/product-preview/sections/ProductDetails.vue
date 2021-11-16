<template>
	<section class="product-details">

		<div class="product">
			<div class="preview">
				<ProductTag
					v-if="fetchSelectedProduct.has_discount" 
					:discount="fetchSelectedProduct.discounted_price" />

				<div class="product-carousel">
					<div class="img-wrapper">
						<img class="img-fluid"
							:src="publicPath + newImg"
							:alt="fetchSelectedProduct.name"
							width="433"
							height="443">
					</div>
					<div class="carousel-btns"></div>
				</div>
			</div>
		</div>

		 <div class="details">
			<h1 class="product-name">{{ name }}</h1>
			<h3 class="product-price">
				<span class="discounted-price">{{ discountedValue | separator | unit }}</span>
        <strike class="prev-price"
        	v-show="price != discountedValue">{{ price | separator | unit }}</strike>
      </h3>

			<div class="rate-and-review">
				<div class="star-rate">
					<StarRateReviews v-for="(r, x) in 5"
		        :key="x"
		        :filled="(fetchSelectedProduct.rate >= (x + 1)) ? true : false" />
		      <span class="rating">{{ fetchSelectedProduct.rate | rate }}</span>
				</div>
				<span class="vertical-divider">|</span>
				<span class="review">{{ reviews | separator | shortThousand }} ratings</span>
				<span class="vertical-divider">|</span>
				<span class="sold">{{ fetchSelectedProduct.sold | separator | shortThousand }} sold</span>
			</div>

			<p class="description">{{ fetchSelectedProduct.description }}</p> 

			<ProductQty />

			<card-actions :route="checkout">Checkout Now</card-actions>
		</div>

	</section>
</template>

<style lang="scss">
@import "@/assets/scss/_mixins";

.product-details{
	margin-top: 50px;
	padding: 0 $margin-side;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 45px;
	margin-bottom: 90px;

	.product{
		.preview{
			@include flexCenter(center);
			position: relative;
			background-color: $bg-for-image;
			border-radius: 10px;
			border: 1px solid $border;

			.product-tag{
				position: absolute;
				top: 20px;
				left: 20px;
			}
		}
	}

	.details{
		position: relative;

		.product-name,
		.product-price{
			margin-bottom: 15px;
		}

		.rate-and-review{
			margin-bottom: 30px;
			@include flexCenter(flex-start);

			.star-rate{
				@include flexCenter(center);

				.rating{
					margin-left: 10px;
					font-weight: 600;
					color: $primary;
				}
			}

			.vertical-divider{
				margin: 0 30px;
				color: $light__active;
			}
		}

		.description{
			margin-bottom: 30px;
			line-height: 24px;
		}
	}
}
</style>

<script>
import { mapGetters } from "vuex";

import ProductTag from "@/components/ProductTag";
import StarRateReviews from "@/components/StarRateReviews";
import ProductQty from "@/components/ProductQty";
import CardActions from "@/components/CardActions";

import { publicPath } from "@/mixins/publicPath.js";

export default {
	name: "ProductDetails",
	components: {
		ProductTag,
		StarRateReviews,
		ProductQty,
		CardActions
	},
	mixins: [ publicPath ],
	data(){
		return {
			productId: this.$route.params.id
		}
	},
	computed: {
		...mapGetters(["fetchSelectedProduct"]),
		checkout: function(){
			return {
				name: "product-checkout",
				params: {
					id: this.productId
				}
			};
		},
		name: function(){
			return this.fetchSelectedProduct.name;
		},
		price: function(){
      return this.fetchSelectedProduct.price;
    }, 
    discountedValue: function(){
    	var p = this.fetchSelectedProduct.price; 
      var d = this.fetchSelectedProduct.discounted_price.split("").reverse().join("").substring(1);
          d = d.split("").reverse().join("");
      
      var cd = parseFloat((d != "") ? '.' + d : 0); // cleared discount
      var td = (p * cd); // total discount

      return Math.round(p - td);
    },
    reviews: function(){
    	return this.fetchSelectedProduct.reviews;
    },
    newImg: function(){
    	return "images/products/featured_footwear/" + this.fetchSelectedProduct.img;
    }
	}
}
</script>