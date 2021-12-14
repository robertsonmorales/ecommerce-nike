<template>
  <button
    type="button"
    class="btn-circle"
    :style="color"
    :class="selectedColor"
  ></button>
</template>

<style lang="scss">
@import "../assets/scss/_variable";

.btn-circle {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-bottom: 30px;
  cursor: pointer;
}

.selected {
  border: 8px solid #fff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
}

.default {
  border: 5px solid #fff;
}
</style>

<script>
export default {
  name: "ButtonCircle",
  props: {
    color: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    selectedColor: function () {
      return this.selected ? "selected" : "default";
    },
  },
};
</script>
