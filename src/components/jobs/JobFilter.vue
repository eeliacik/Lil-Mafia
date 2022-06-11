<template>
  <div class="filter-container">
    <div class="checkbox-wrapper">
      <label class="checkbox-container" for="blackmail">
        <input
          type="checkbox"
          name="skills"
          value="blackmail"
          id="blackmail"
          v-model="skills"
          @change="setFilter"
        />
        <span class="checkbox-label filter-checkbox-label">Blackmail</span>
      </label>
    </div>
    <div class="checkbox-wrapper">
      <label class="checkbox-container" for="bully">
        <input
          type="checkbox"
          name="skills"
          value="bully"
          id="bully"
          v-model="skills"
          @change="setFilter"
        />
        <span class="checkbox-label filter-checkbox-label">Bully</span>
      </label>
    </div>
    <div class="checkbox-wrapper">
      <label class="checkbox-container" for="kidnap">
        <input
          type="checkbox"
          name="skills"
          value="kidnap"
          id="kidnap"
          v-model="skills"
          @change="setFilter"
        />
        <span class="checkbox-label filter-checkbox-label">Kidnap</span>
      </label>
    </div>
    <div class="checkbox-wrapper">
      <label class="checkbox-container" for="launder">
        <input
          type="checkbox"
          name="skills"
          value="launder"
          id="launder"
          v-model="skills"
          @change="setFilter"
        />
        <span class="checkbox-label filter-checkbox-label">Launder</span>
      </label>
    </div>
    <div class="checkbox-wrapper">
      <label class="checkbox-container" for="pickpocket">
        <input
          type="checkbox"
          name="skills"
          value="pickpocket"
          id="pickpocket"
          v-model="skills"
          @change="setFilter"
        />
        <span class="checkbox-label filter-checkbox-label">Pickpocket</span>
      </label>
    </div>
    <div class="checkbox-wrapper">
      <label class="checkbox-container" for="robbery">
        <input
          type="checkbox"
          name="skills"
          value="robbery"
          id="robbery"
          v-model="skills"
          @change="setFilter"
        />
        <span class="checkbox-label filter-checkbox-label">Robbery</span>
      </label>
    </div>
    <div class="checkbox-wrapper">
      <label class="checkbox-container" for="smuggle">
        <input
          type="checkbox"
          name="skills"
          value="smuggle"
          id="smuggle"
          v-model="skills"
          @change="setFilter"
        />
        <span class="checkbox-label filter-checkbox-label">Smuggle</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['get-skills'],
  data() {
    return {
      skills: [
        'blackmail',
        'bully',
        'kidnap',
        'launder',
        'pickpocket',
        'robbery',
        'smuggle',
      ],
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 0.8rem;
  column-gap: 0.6rem;
  padding: 0.6rem;
}

.filter-checkbox-label:hover {
    background-color: var(--theme-color-dark-3);
}
</style>
