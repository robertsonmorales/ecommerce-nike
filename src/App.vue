<template>
  <div id="app">

    <Navbar />

    <transition name="fade">

      <router-view />

    </transition>

    <Footer />

  </div>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transform: translateX(0px);
  transition: all .3s ease;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
</style>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  components: {
    Navbar,
    Footer
  },
  created(){
    this.$store.dispatch('dispatchProduct');
  }
};
</script>
