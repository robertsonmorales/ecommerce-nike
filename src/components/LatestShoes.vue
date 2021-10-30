<template>
    <div :style="customStyle" class="release">
        <img
          :src="require(`../assets/images/products/latest_releases/${img}`)"
          :alt="name"
          :width="width"
          :height="height"
          class="img-fluid"
        />
        <div class="details">
            <h4 class="product-name">{{ name }}</h4>
            <p class="product-price">{{ price }}</p>

            <button class="btn btn-light btn-buynow">Buy Now</button>
        </div>
    </div>
</template>

<style lang="scss">
@import "../assets/scss/_variable";

.release{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .details{
        margin-top: -25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        .product-name{
            margin-bottom: 15px;
            font-weight: 500;
            font-style: normal;
            font-size: 24px;
        }

        .product-price{
            font-weight: normal;
            font-style: normal;
            font-size: 18px;
            margin-bottom: 30px;
        }

        .btn-buynow{
            color: $primary;
        }
    }
}
</style>

<script>
export default {
    name: "LatestShoes",
    props: {
        img: String,
        name: String,
        price: String,
        width: Number,
        height: Number,
        customStyle: String
    }
}
</script>