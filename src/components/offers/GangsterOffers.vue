<template>
  <router-link class="offer-link" :to="offerDatailsLink">
    <div class="offer-item">
      <span class="offer-title">{{ job.title }}</span>
      <span class="offer-status" :class="'status-' + status">{{
        status.charAt(0).toUpperCase() + status.slice(1)
      }}</span>
      <span class="offer-price">{{ price }} $</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['id', 'price', 'status'],
  computed: {
    job() {
      return this.$store.getters['jobs/jobs'].find((job) => job.id === this.id);
    },
    offerDatailsLink() {
      return '/offer/' + this.id;
    },
  },
};
</script>

<style lang="scss">
.offer-item {
  margin-bottom: 0.3rem;
  display: flex;
  justify-content: space-between;
  color: var(--theme-color-light-2);
}

.offer-link {
  border-bottom: 0.06rem solid var(--theme-color-dark-3);
  &:last-of-type {
    border-bottom: none;
  }
}

.offer-title {
  width: 55%;
}

.offer-status {
  width: 25%;
}

.offer-price {
  width: 5rem;
  text-align: right;
}
</style>
