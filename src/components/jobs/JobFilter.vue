<template>
  <div>
    <h3>Available Jobs</h3>
    <span class="filter-item">
      <input
        id="blackmail"
        type="checkbox"
        name="skills"
        value="blackmail"
        v-model="skills"
        @change="setFilter"
      />
      <label for="blackmail">Blackmail</label>
    </span>
    <span class="filter-item">
      <input
        id="bully"
        type="checkbox"
        name="skills"
        value="bully"
        v-model="skills"
        @change="setFilter"
      />
      <label for="bully">Bully</label>
    </span>
    <span class="filter-item">
      <input
        id="kidnap"
        type="checkbox"
        name="skills"
        value="kidnap"
        v-model="skills"
        @change="setFilter"
      />
      <label for="kidnap">Kidnap</label>
    </span>
    <span class="filter-item">
      <input
        id="pickpocket"
        type="checkbox"
        name="skills"
        value="pickpocket"
        v-model="skills"
        @change="setFilter"
      />
      <label for="pickpocket">Pickpocket</label>
    </span>
  </div>
</template>

<script>
export default {
  emits: ['get-skills'],
  data() {
    return {
      skills: ['blackmail', 'bully', 'kidnap', 'pickpocket'],
    };
  },
  methods: {
    setFilter() {
      const selectedSkills = this.skills;
      this.$emit('get-skills', selectedSkills);
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 0.5rem;
}

.filter-item {
  margin: 0.5rem;
}

.filter-item label,
.filter-item input {
  vertical-align: middle;
}

.filter-item label {
  margin: 0.25rem;
}

.filter-item input {
  margin: 0.25rem;
  height: 1.15rem;
  width: 1.15rem;
}
</style>
