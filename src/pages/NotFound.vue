<template>
  <div class="not-found-wrapper">
    <div>Page Not Found!</div>
    <router-link class="back-link" to="/">Back to Homepage</router-link>
  </div>
</template>

<style lang="scss">
.not-found-wrapper {
  padding: 0 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
