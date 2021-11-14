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
			<h1 class="product-name">{{ fetchSelectedProduct.name }}</h1>
			<h3 class="product-price">₱{{ fetchSelectedProduct.price }}</h3>

			<div class="rate-and-review">
				<StarRateReviews v-for="(r, x) in 5"
	        :key="x"
	        :filled="(fetchSelectedProduct.rate >= (x + 1)) ? true : false" />
	      <span class="sold">{{ fetchSelectedProduct.reviews }} sold</span>
			</div>

			<p class="description">{{ fetchSelectedProduct.description }}</p>

			<CardButtons :productId="prodId" label="Order Now" />
		</div>

	</section>
</template>

<style lang="scss">
@import "../../assets/scss/_variable";

@mixin flexCenter{
	display: flex;
  align-items: center;
  justify-content: center;
}

.product-details{
	margin-top: 50px;
	padding: 0 $margin-side;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 45px;
	margin-bottom: 90px;

	.product{
		.preview{
			@include flexCenter;
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

		.product-price{
			color:  $primary;

			&:after{
				content: ".00";
			}
		}

		.rate-and-review{
			margin-bottom: 30px;

			.sold{
				margin-left: 20px;
			}
		}

		.description{
			margin-bottom: 30px;
		}
	}
}
</style>

<script>
import { mapGetters } from "vuex";

import ProductTag from "@/components/ProductTag";
import StarRateReviews from "@/components/StarRateReviews";
import CardButtons from "@/components/CardButtons";

export default {
	name: "ProductDetails",
	components: {
		ProductTag,
		StarRateReviews,
		CardButtons
	},
	computed: {
		...mapGetters(["fetchSelectedProduct"]),
		prodId: function(){
			return parseInt(this.$route.params.id);
		}
	}
}
</script>