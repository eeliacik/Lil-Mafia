<template>
  <section>
    <base-card>
    <h2>Gangsters</h2>
      <ul v-if="hasGangsters && hasSkills">
        <gangster-item
          v-for="gangster in filteredGangsters"
          :key="gangster.id"
          :id="gangster.id"
          :firstName="gangster.firstName"
          :lastName="gangster.lastName"
          :aka="gangster.nickName"
          :from="gangster.from"
          :desc="gangster.description"
          :skills="gangster.skills"
        ></gangster-item>
      </ul>
      <p v-else>No Gangster Found!</p>
    </base-card>
  </section>
</template>

<script>
import GangsterItem from '../../components/gangsters/GangsterItem.vue';

import { ArrayNotEmpty } from '../../utilities/array_not_empty';

export default {
  components: { GangsterItem },
  data() {
    return {
      activeSkills: ['blackmail', 'bully', 'kidnap', 'launder', 'pickpocket', 'smuggle'],
    };
  },
  computed: {
    gangsters() {
      return this.$store.getters['gangsters/gangsters'];
    },
    filteredGangsters() {
      return this.gangsters.filter((gangster) => {
        return this.activeSkills.some((skill) => {
          return gangster.skills.includes(skill);
        });
      });
    },
    hasGangsters() {
      return ArrayNotEmpty(this.gangsters);
    },
    hasSkills() {
      return ArrayNotEmpty(this.activeSkills);
    },
  },
  methods: {
    filterGangsters(selectedSkills) {
      this.activeSkills = selectedSkills;
    },
  },
  // created() {
  //   this.$store.dispatch('gangsters/loadGangsters');
  // },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.list-button {
  display: flex;
  justify-content: right;
}
</style>
