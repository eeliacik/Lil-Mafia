<template>
  <section>
    <base-card>
      <div class="details-card">
        <h2>{{ fullName }}</h2>
        <h3>from "{{ from }}"</h3>
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
      </div>

      <router-view></router-view>

      <div class="details-action">
        <base-button
          v-if="contactButtonVisible"
          @click="openForm"
          mode="flat"
          link
          :to="gangsterContactLink"
          >Contact</base-button
        >
        <base-button mode="frame" link to="/gangsters">Back to Gangsters</base-button>
      </div>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      contactButtonVisible: true,
    };
  },
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
    gangsterContactLink() {
      return {
        name: 'contact-gangster',
        params: {
          id: this.id,
        },
      };
    },
  },
  methods: {
    openForm() {
      this.contactButtonVisible = false;
      this.sendButtonVisible = true;
    },
  },
};
</script>

<style scoped>
.details-card {
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 1rem;
}

.details-action {
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
}
</style>
