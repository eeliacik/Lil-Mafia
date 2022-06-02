<template>
  <div class="hero-container">
    <div class="hero-text">
      A tiny mafia hub that brings together capos & gangsters
    </div>
    <router-link class="hero-link" to="/signup">
     Get this party started!
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    userType() {
      return this.$store.getters.userType;
    },
  },
};
</script>

<style lang="scss">
.hero-container {
  width: 100%;
  max-width: calc(var(--max-width) * 0.35);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
}

.hero-text {
  padding: 0.6rem;
  font-size: 1.9rem;
}

.hero-link,
.hero-link:visited {
  padding: 0.6rem;
  font-size: 1.4rem;
  color: var(--lm-primary-color);
  &:hover {
    color: var(--lm-primary-color-light);

  }
}
</style>
