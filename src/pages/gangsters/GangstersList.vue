<template>
  <div>
    <section>
      <base-card>
        <gangster-filter @get-skills="filterGangsters"></gangster-filter>
      </base-card>
    </section>
    <section>
      <base-card>
        <ul v-if="hasGangsters > 0">
          <gangster-item
            v-for="gangster in filteredGangsters"
            :key="gangster.gangsterId"
            :id="gangster.gangsterId"
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
        <p v-if="hasSkill === 0">Please choose at least one of the skills...</p>
      </base-card>
    </section>
  </div>
</template>

<script>
import GangsterFilter from '../../components/gangsters/GangsterFilter.vue';
import GangsterItem from '../../components/gangsters/GangsterItem.vue';
export default {
  components: { GangsterItem, GangsterFilter },
  data() {
    return {
      // filteredGangsters: [],
      activeSkills: ['blackmail', 'bully', 'kidnap', 'pickpocket'],
      gangsters: [
        {
          gangsterId: 'g-001',
          firstName: 'Abdurrahman',
          lastName: 'Kıllanır',
          nickName: 'The Kıll',
          from: 'Yozgat',
          description:
            'I am the one of the most popular free agent gangsters from Yozgat.',
          skills: ['blackmail', 'pickpocket', 'bully'],
          hourlyRate: 100,
        },
        {
          id: 'g-002',
          firstName: 'Faysal',
          lastName: 'Top',
          nickName: 'Top Faysal',
          from: 'Bursa',
          description: 'I am the best kidnapper.',
          skills: ['pickpocket', 'kidnap'],
          hourlyRate: 120,
        },
        {
          id: 'g-003',
          firstName: 'Haldun',
          lastName: 'Soyubozuk',
          nickName: 'The Family Man',
          from: 'Zonguldak',
          description: 'Hello I will punish your enemies.',
          skills: ['bully', 'blackmail'],
          hourlyRate: 120,
        },
      ],
    };
  },
  computed: {
    filteredGangsters() {
      return this.gangsters.filter((gangster) => {
        if (
          this.activeSkills.includes('blackmail') &&
          gangster.skills.includes('blackmail')
        ) {
          return true;
        }
        if (
          this.activeSkills.includes('bully') &&
          gangster.skills.includes('bully')
        ) {
          return true;
        }
        if (
          this.activeSkills.includes('kidnap') &&
          gangster.skills.includes('kidnap')
        ) {
          return true;
        }
        if (
          this.activeSkills.includes('pickpocket') &&
          gangster.skills.includes('pickpocket')
        ) {
          return true;
        }
        return false;
      });
    },
    hasGangsters() {
      return this.gangsters.length;
    },
    hasSkill() {
      return this.activeSkills.length;
    },
  },
  methods: {
    filterGangsters(selectedSkills) {
      this.activeSkills = selectedSkills;
      console.log(this.activeSkills);
      console.log(this.hasSkill);
      console.log(this.hasGangsters)
    },
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
