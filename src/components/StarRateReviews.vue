<template>
  <img :src="starFill" :alt="starFill" width="17" height="16" />
</template>

<script>
import Star from "../assets/images/star.svg";
import StarFilled from "../assets/images/star-filled.svg";

export default {
  name: "StarRateReviews",
  props: {
    filled: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      star: Star,
      starFilled: StarFilled,
    };
  },
  computed: {
    starFill: function () {
      return this.filled == true ? this.starFilled : this.star;
    },
  },
};
</script>
