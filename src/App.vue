<template>
  <section>
    <the-header></the-header>
    <router-view></router-view>
  </section>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>

* {
    box-sizing: border-box;
}

body {
    margin: 0;
}

</style>