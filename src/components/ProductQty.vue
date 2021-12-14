<template>
  <div class="qty">
    <label for="qty" class="qty-label">Quantity</label>

    <button
      class="btn-qty-minus"
      :disabled="isDisabled"
      :class="isDisabled ? 'disabled' : ''"
      @click="minusQty"
    >
      <minus-icon size="1x" class="minus-icon"></minus-icon>
    </button>

    <input
      type="text"
      name="qty"
      class="input-qty"
      v-model="qty"
      readonly
      required
    />

    <button class="btn-qty-add" @click="addQty">
      <plus-icon size="1x" class="custom-class"></plus-icon>
    </button>

    <span class="stocks"
      ><span class="text-primary">113</span> stocks available</span
    >
  </div>
</template>

<style lang="scss">
@import "../assets/scss/_mixins";

.qty {
  margin-bottom: 30px;
  @include flexCenter(flex-start);

  .qty-label {
    margin-right: 20px;
    color: $text-muted;
  }

  .btn-qty {
    @include flexCenter(center);
    height: 42px;
    width: 42px;
    outline: none;
    border: 1px solid tranparent;
    border: 1px solid $light;
    cursor: pointer;

    &:hover {
      background-color: $light__hovered;
    }

    &:active {
      background-color: $light__focused;
      @include bootstrapBoxShadow($light__active);
    }

    &-minus {
      @extend .btn-qty;
      border-radius: $radius;
      margin-right: 10px;
    }

    &-add {
      @extend .btn-qty;
      border-radius: $radius;
      margin-left: 10px;
    }
  }

  .input-qty {
    height: 42px;
    width: 15%;
    border-radius: $radius;
    outline: none;
    border: 1px solid $light;
    text-align: center;
    font-size: 1.2rem;
  }

  .disabled {
    cursor: not-allowed;

    .minus-icon {
      pointer-events: none;
    }

    &:hover {
      background-color: transparent !important;
    }

    &:active {
      background-color: transparent !important;
    }
  }

  .stocks {
    margin-left: 20px;
    color: $text-muted;
  }
}
</style>

<script>
import { MinusIcon, PlusIcon } from "vue-feather-icons";
export default {
  name: "ProductQty",
  components: {
    MinusIcon,
    PlusIcon,
  },
  data() {
    return {
      qty: 1,
      isDisabled: true,
    };
  },
  methods: {
    minusQty: function () {
      if (this.qty <= 2) {
        this.isDisabled = true;
      }

      this.qty -= 1;
    },
    addQty: function () {
      this.qty += 1;
      this.isDisabled = false;
    },
  },
};
</script>
