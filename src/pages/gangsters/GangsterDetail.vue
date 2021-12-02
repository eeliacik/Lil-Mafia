<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>from {{ from }}</h3>
      <h3>aKa "{{ aka }}"</h3>
      <p>{{ description }}</p>
      <div>
      <base-badge
        v-for="skill in skills"
        :key="skill"
        :type="skill"
        :title="skill"
      ></base-badge>
    </div>
      <h3>{{ rate }}$/hour</h3>
    </base-card>
  </section>
</template>


<script>
export default {
  props: ['id'],
  computed: {
    gangster() {
      return this.$store.getters['gangsters/gangsters'].find(
        (gangster) => gangster.id === this.id
      );
    },
    fullName() {
      return this.gangster.firstName + ' ' + this.gangster.lastName;
    },
    aka() {
      return this.gangster.nickName;
    },
    from() {
      return this.gangster.from;
    },
    description() {
      return this.gangster.description;
    },
    skills() {
      return this.gangster.skills;
    },
    rate() {
      return this.gangster.hourlyRate;
    },
  },
};
</script>
