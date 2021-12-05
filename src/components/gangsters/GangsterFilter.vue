<template>
  <div>
    <h2>Find Your Man</h2>
    <span class="filter-block">
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
    <span class="filter-block">
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
    <span class="filter-block">
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
    <span class="filter-block">
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
h2 {
  margin: 0.5rem;
}

.filter-block {
  margin: 0.5rem;
}

.filter-block label,
.filter-block input {
  vertical-align: middle;
}

.filter-block label {
  margin: 0.25rem;
}

.filter-block input {
  margin: 0.25rem;
  height: 1.15rem;
  width: 1.15rem;
}
</style>
