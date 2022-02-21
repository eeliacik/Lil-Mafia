<template>
  <section>
    <base-card>
      <h3>Find your man. Get finished your dirty job.</h3>
      <router-link to="/signup">
        <h3>START PARTY NOW!</h3>
      </router-link>
    </base-card>
  </section>
</template>

<script>
export default {
  computed: {
    userType() {
      return this.$store.getters.userType;
    },
  },
}
</script>

<style scoped>
a:visited,
a:link {
  text-decoration: none;
  color: blue;
}
</style>
