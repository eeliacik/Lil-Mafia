<template>
  <li>
    <router-link :to="jobDetailsLink">
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
      </base-card>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'desc', 'skills'],
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
a:link,
a:visited {
  color: black;
  text-decoration: none;
}

li {
  margin: 1rem;
}

h3 {
  margin: 0;
  padding: 0 0 1rem 0;
}
</style>
