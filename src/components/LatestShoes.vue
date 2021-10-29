<template>
    <div class="release">
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
        </div>
    </div>
</template>

<style lang="scss">
    .release{
        display: flex;
        flex-direction: column;
        align-items: center;

        .details{
            margin-top: -25%;

            .product-name{
                margin-bottom: 15px;
                font-weight: 500;
                font-style: normal;
                font-size: 24px;
            }

            .product-price{
                font-weight: 700;
                font-style: normal;
                font-size: 18px;
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
        height: Number
    }
}
</script>