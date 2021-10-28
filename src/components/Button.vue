<template>
  <router-link
    to="get-your-great"
    class="btn btn-primary"
    v-html="text"
  ></router-link>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
  },
};
</script>
