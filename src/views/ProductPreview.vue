<template>
	<main class="wrapper">
		<ProductDetails />
	</main>
</template>

<style lang="scss"></style>

<script>
import ProductDetails from "@/components/ProductPreview/ProductDetails";

export default{
	name: "ProductPreview",
	components: {
		ProductDetails
	},
	mounted(){
		this.$store.dispatch('dispatchShowProduct', this.$route.params.id);
	}
}
</script>