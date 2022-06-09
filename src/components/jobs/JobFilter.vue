<template>
  <div class="filter-container">
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
        id="launder"
        type="checkbox"
        name="skills"
        value="launder"
        v-model="skills"
        @change="setFilter"
      />
      <label for="launder">Launder</label>
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
    <span class="filter-item">
      <input
        id="smuggle"
        type="checkbox"
        name="skills"
        value="smuggle"
        v-model="skills"
        @change="setFilter"
      />
      <label for="smuggle">Smuggle</label>
    </span>
  </div>
</template>

<script>
export default {
  emits: ['get-skills'],
  data() {
    return {
      skills: ['blackmail', 'bully', 'kidnap', 'launder', 'pickpocket', 'smuggle'],
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

<style>

.filter-container {
  padding: 0 0.6rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.filter-item {
  display: flex;
  gap: 0.3rem;
  align-items: center;
}

.filter-item label {
}

.filter-item input {
  margin: 0;
  height: 1.2rem;
  width: 1.2rem;
}
</style>
