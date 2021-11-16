<template>
  <div class="release">
    <img :src="newImg"
      :alt="name"
      width="600"
      height="625.57"
      class="img-fluid"
    />
    <div class="details">
      <h4 class="product-name">{{ name }}</h4>
      <p class="product-price">{{ price | separator | unit }}</p>

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
            /*color: $primary;*/
            background-color: #fff;
        }
    }

    &:nth-child(even){
      margin: 0 -15%;
    }
}
</style>

<script>
export default {
  name: "LatestShoes",
  props: {
    img: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    newImg: function(){
      return "images/products/latest_releases/" + this.img;
    }
  }
}
</script>