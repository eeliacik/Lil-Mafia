<template>
  <section>
    <the-header></the-header>
    <router-view></router-view>
  </section>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>

/* @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;600&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}

html {
  /* font-family: "Nunito", sans-serif; */
  /* font-family: 'Roboto Condensed', sans-serif; */
  /* font-family: 'Open Sans', sans-serif; */
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>
