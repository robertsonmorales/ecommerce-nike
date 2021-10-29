<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "assets/scss/_style.scss";

.container-fluid {
  margin: 0px $margin-side;
}

.btn {
  cursor: pointer;
  font-family: $font-family;
  border-radius: 10px;
  border: none;
  outline: none;
  height: 50px;
  padding: 15px 30px;
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
}

.btn-primary {
  color: #fff;
  background-color: $primary;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.25);
}

.btn-light {
  color: #333;
  background-color: #eee;
}
</style>
