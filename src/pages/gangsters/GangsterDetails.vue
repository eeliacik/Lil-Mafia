<template>
  <section>
    <base-card>
      <div>
        <h2>{{ fullName }}</h2>
        <h3>from "{{ from }}"</h3>
        <h3>aKa "{{ aka }}"</h3>
        <p>{{ desc }}</p>
        <div>
          <base-badge
            v-for="skill in skills"
            :key="skill"
            :type="skill"
            :title="skill"
          ></base-badge>
        </div>
        <h3>{{ rate }}$/hour</h3>
      </div>

      <router-view></router-view>

      <div class="details-action">
        <base-button mode="frame" link to="/gangsters">Back to Gangsters</base-button>
      </div>
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
    desc() {
      return this.gangster.description;
    },
    skills() {
      return this.gangster.skills;
    },
    rate() {
      return this.gangster.hourlyRate;
    },
  },
  created() {
    console.log(this.id)
  }
};
</script>

<style scoped>
.details-action {
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
}
</style>
