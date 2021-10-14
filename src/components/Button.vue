<template>
  <router-link
    to="get-your-great"
    class="btn btn-primary"
    v-html="text"
  ></router-link>
</template>

<style lang="scss">
@import "../assets/scss/_variable.scss";

.btn {
  font-family: $font-family;
  border-radius: 10px;
  border: none;
  outline: none;
  height: 50px;
  padding: 15px 30px;
  text-decoration: none;
  font-size: 0.9em;
  transition: opacity 0.2s ease-in-out;
}

.btn-primary {
  color: #fff;
  background-color: $primary;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.25);

  &:hover {
    opacity: 0.9;
  }
}
</style>

<script>
export default {
  name: "Button",
  props: {
    text: String,
  },
};
</script>
