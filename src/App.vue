<template>
  <div id="app" class="container-fluid">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss">
.container-fluid {
  margin: 15px 6%;
}
</style>
