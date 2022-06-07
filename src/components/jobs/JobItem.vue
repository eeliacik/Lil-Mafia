<template>
  <router-link :to="jobDetailsLink">
    <div class="job-item">
      <div class="job-title">{{ title }}</div>
      <div class="job-terr">{{ terr }}</div>
      <!-- <div>
        <base-badge
          v-for="skill in skills"
          :key="skill"
          :type="skill"
          :title="skill"
        ></base-badge>
      </div> -->
    </div>
  </router-link>
</template>

<script>
// import BaseBadge from '../UI/BaseBadge.vue';
export default {
  // components: { BaseBadge },
  props: ['id', 'title', 'terr'],
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

<style>
.job-item {
  display: flex;
  justify-content: space-between;
  color: var(--theme-color-light-2);
  border-bottom: 0.06rem solid var(--theme-color-dark-3);
}

.job-title {
  width: 40%;
}

.job-terr {
  width: 30%;
}
</style>
