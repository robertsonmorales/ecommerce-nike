<template>
  <div class="product-tag" v-show="discount != ''">
    <div class="tag-wrapper">
      <img class="tag" :src="tag" alt="tag" width="100" height="24" />

      <span class="product-label">
        <tag-icon size="1x" class="tag-icon"></tag-icon>
        <span>{{ discount }} off</span>
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.product-tag {
  // position: absolute;
  z-index: 2;

  .tag-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    // overflow: hidden;

    // img.tag {
    //   filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.15));
    // }

    .product-label {
      display: flex;
      align-items: center;
      position: absolute;
      left: 5px;
      color: #fff;

      .tag-icon {
        margin-right: 5px;
        font-size: 0.9em;
      }

      span {
        font-size: 0.8em;
        // font-weight: 500;
      }
    }
  }
}
</style>

<script>
import { TagIcon } from "vue-feather-icons";
import Tag from "../assets/images/tag.png";

export default {
  name: "ProductTag",
  props: {
    discount: String,
  },
  components: {
    TagIcon,
  },
  data() {
    return {
      tag: Tag,
    };
  },
};
</script>
