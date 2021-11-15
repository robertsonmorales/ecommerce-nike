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
							:src="require('@/assets/images/products/featured_footwear/' + fetchSelectedProduct.img)"
							:alt="fetchSelectedProduct.name"
							width="433"
							height="443">
					</div>
					<div class="carousel-btns">
						
					</div>
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
				<StarRateReviews v-for="(r, x) in 5"
	        :key="x"
	        :filled="(fetchSelectedProduct.rate >= (x + 1)) ? true : false" />
	      <span class="rating">{{ fetchSelectedProduct.rate | rate }}</span>
	      <span class="review">{{ fetchSelectedProduct.reviews | separator | shortThousand }} ratings</span>
	      <span class="sold">{{ fetchSelectedProduct.reviews | separator | shortThousand }} sold</span>
			</div>

			<p class="description">{{ fetchSelectedProduct.description }}</p>

			<ProductQty />

			<CardButtons :productId="prodId"
				label="Checkout Now"
				:route="route" />
		</div>

	</section>
</template>

<style lang="scss">
@import "../../assets/scss/_mixins";

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

			.rating{
				margin-left: 10px;
				font-weight: 600;
				color: $primary;
			}

			.review,
			.sold{
				margin-left: 20px;
				color: $text-muted;
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
import CardButtons from "@/components/CardButtons";

// import { DiscountedPrice } from "../../mixins/DiscountedPrice.js";

export default {
	name: "ProductDetails",
	components: {
		ProductTag,
		StarRateReviews,
		ProductQty,
		CardButtons
	},
	// mixins: [ DiscountedPrice ],
	computed: {
		...mapGetters(["fetchSelectedProduct"]),
		prodId: function(){
			return parseInt(this.$route.params.id);
		},
		route: function(){
			return { path: `product-preview/${this.$route.params.id}`};
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
    }
	}
}
</script>