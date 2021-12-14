<template>
  <div>
    <section>
      <base-card>
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
            :rate="gangster.hourlyRate"
          ></gangster-item>
        </ul>
        <p v-else>No Gangster Found!</p>
      </base-card>
    </section>
  </div>
</template>

<script>
import GangsterItem from '../../components/gangsters/GangsterItem.vue';

import { ArrayIsEmpty } from '../../utilities/array';

export default {
  components: { GangsterItem },
  data() {
    return {
      // filteredGangsters: [],
      activeSkills: ['blackmail', 'bully', 'kidnap', 'pickpocket'],
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
        // if (
        //   this.activeSkills.includes('blackmail') &&
        //   gangster.skills.includes('blackmail')
        // ) {
        //   return true;
        // }
        // if (
        //   this.activeSkills.includes('bully') &&
        //   gangster.skills.includes('bully')
        // ) {
        //   return true;
        // }
        // if (
        //   this.activeSkills.includes('kidnap') &&
        //   gangster.skills.includes('kidnap')
        // ) {
        //   return true;
        // }
        // if (
        //   this.activeSkills.includes('pickpocket') &&
        //   gangster.skills.includes('pickpocket')
        // ) {
        //   return true;
        // }
        // return false;
      });
    },
    hasGangsters() {
      return ArrayIsEmpty(this.gangsters);
    },
    hasSkills() {
      return ArrayIsEmpty(this.activeSkills);
    },
  },
  methods: {
    filterGangsters(selectedSkills) {
      this.activeSkills = selectedSkills;
    },
  },
  created() {
    this.$store.dispatch('gangsters/loadGangsters');
    console.log(this.gangsters);
  },
};
</script>

<style scoped>
.container {
  margin: 1rem auto;
}

ul {
  padding: 0;
  list-style: none;
}

.list-button {
  display: flex;
  justify-content: right;
}
</style>
