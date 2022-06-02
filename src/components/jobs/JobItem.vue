<template>
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
    <button>
      <router-link :to="jobDetailsLink">Job Details</router-link>
    </button>
  </div>
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
  border-bottom: 0.06rem solid var(--theme-color-dark-3);
}

.job-title {
 width: 40%;
}

.job-terr {
  width: 20%;
}
</style>
