<template>
  <router-link class="job-link" :to="jobDetailsLink">
    <div class="job-item">
      <div class="job-title">{{ title }}</div>
      <div class="job-terr">{{ terr }}</div>
      <div class="job-bids">{{ bids.length - 1 }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['id', 'title', 'terr', 'bids'],
  computed: {
    jobDetailsLink() {
      return {
        name: 'job-details',
        params: { id: this.id },
      };
    },
  },
};
</script>

<style lang="scss">
.job-item {
  margin-bottom: 0.3rem;
  display: flex;
  justify-content: space-between;
  color: var(--theme-color-light-2);
}

.job-link {
  border-bottom: 0.06rem solid var(--theme-color-dark-3);
  &:last-of-type {
    border-bottom: none;
  }
}

.job-title {
  width: 55%;
}

.job-terr {
  width: 25%;
}

.job-bids {
  width: 2.5rem;
  text-align: right;
}
</style>
