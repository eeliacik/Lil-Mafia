<template>
  <li>
    <base-card>
      <h3>{{ title }}</h3>
      <div>
        <base-badge
          v-for="skill in skills"
          :key="skill"
          :type="skill"
          :title="skill"
        ></base-badge>
      </div>
        <router-link :to="jobDetailsLink">Job Details</router-link>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'skills'],
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

<style scoped>
/* a:link,
a:visited {
  color: black;
  text-decoration: none;
} */

h3 {
  margin: 0;
  padding: 0 0 1rem 0;
}

div {
  display: flex;
  justify-content: space-between;
  align-items: center;

}
</style>
