<template>
  <div
    class="btn-circle"
    :style="color"
    style="border: 8px solid #fff"
    v-if="selected == 1"
  ></div>
  <div
    class="btn-circle"
    :style="color"
    style="border: 5px solid #fff"
    v-else
  ></div>
</template>

<style lang="scss">
@import "../assets/scss/_variable.scss";

.btn-circle {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
}
</style>

<script>
export default {
  name: "ButtonCircle",
  props: {
    color: String,
    selected: String,
  },
};
</script>
