<template>
  <form class="form-contianer" @submit.prevent="submitForm">
    <div class="form-item" :class="{ invalid: !this.title.isValid }">
      <label class="form-label" for="title">Title</label>
      <input
        class="form-input"
        id="title"
        type="text"
        v-model.trim="title.val"
        @blur="clearValidationError('title')"
      />
      <p v-show="!this.title.isValid">Please enter the job title</p>
    </div>
    <div class="form-item" :class="{ invalid: !this.terr.isValid }">
      <label class="form-label" for="territory">Territory</label>
      <input
        class="form-input"
        id="territory"
        type="text"
        v-model.trim="terr.val"
        @blur="clearValidationError('terr')"
      />
      <p v-if="!this.terr.isValid">Please enter the territory</p>
    </div>
    <div class="form-description" :class="{ invalid: !this.desc.isValid }">
      <label class="form-label" for="description">Description</label>
      <textarea
        class="form-input"
        id="description"
        rows="5"
        v-model.trim="desc.val"
        @blur="clearValidationError('desc')"
      />
      <p v-if="!this.desc.isValid">Please enter the job description</p>
    </div>
    <div
      class="form-skills"
      :class="{ invalid: !this.skills.isValid }"
      @change="clearValidationError('skills')"
    >
    <div class="form-label">Skills</div>
      <div class="skills-container">
        <div class="checkbox-wrapper">
          <label class="checkbox-container" for="blackmail">
            <input
              type="checkbox"
              name="skills"
              value="blackmail"
              id="blackmail"
              v-model="skills.val"
            />
            <span class="checkbox-label">Blackmail</span>
          </label>
        </div>
        <div class="checkbox-wrapper">
          <label class="checkbox-container" for="bully">
            <input
              type="checkbox"
              name="skills"
              value="bully"
              id="bully"
              v-model="skills.val"
            />
            <span class="checkbox-label">Bully</span>
          </label>
        </div>
        <div class="checkbox-wrapper">
          <label class="checkbox-container" for="delivery">
            <input
              type="checkbox"
              name="skills"
              value="delivery"
              id="delivery"
              v-model="skills.val"
            />
            <span class="checkbox-label">Delivery</span>
          </label>
        </div>
        <div class="checkbox-wrapper">
          <label class="checkbox-container" for="escort">
            <input
              type="checkbox"
              name="skills"
              value="escort"
              id="escort"
              v-model="skills.val"
            />
            <span class="checkbox-label">Escort</span>
          </label>
        </div>
        <div class="checkbox-wrapper">
          <label class="checkbox-container" for="kidnap">
            <input
              type="checkbox"
              name="skills"
              value="kidnap"
              id="kidnap"
              v-model="skills.val"
            />
            <span class="checkbox-label">Kidnap</span>
          </label>
        </div>
        <div class="checkbox-wrapper">
          <label class="checkbox-container" for="launder">
            <input
              type="checkbox"
              name="skills"
              value="launder"
              id="launder"
              v-model="skills.val"
            />
            <span class="checkbox-label">Launder</span>
          </label>
        </div>
        <div class="checkbox-wrapper">
          <label class="checkbox-container" for="pickpocket">
            <input
              type="checkbox"
              name="skills"
              value="pickpocket"
              id="pickpocket"
              v-model="skills.val"
            />
            <span class="checkbox-label">Pickpocket</span>
          </label>
        </div>
        <div class="checkbox-wrapper">
          <label class="checkbox-container" for="robbery">
            <input
              type="checkbox"
              name="skills"
              value="robbery"
              id="robbery"
              v-model="skills.val"
            />
            <span class="checkbox-label">Robbery</span>
          </label>
        </div>
        <div class="checkbox-wrapper">
          <label class="checkbox-container" for="smuggle">
            <input
              type="checkbox"
              name="skills"
              value="smuggle"
              id="smuggle"
              v-model="skills.val"
            />
            <span class="checkbox-label">Smuggle</span>
          </label>
        </div>
      </div>
      <p v-show="!this.skills.isValid">
        Please choose at least one of the skills above
      </p>
    </div>
    <div class="form-action">
      <div class="create-button" @click="submitForm">CREATE</div>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['add-job'],
  data() {
    return {
      title: {
        val: '',
        isValid: true,
      },
      terr: {
        val: '',
        isValid: true,
      },
      desc: {
        val: '',
        isValid: true,
      },
      skills: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    clearValidationError(name) {
      this[name].isValid = true;
      this.formIsValid = true;
    },
    textValidation(input) {
      if (this[input].val === '') {
        this[input].isValid = false;
        this.formIsValid = false;
      }
    },
    arrayValidation(input) {
      if (this[input].val.length === 0) {
        this[input].isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.formIsValid = true;
      this.textValidation('title');
      this.textValidation('terr');
      this.textValidation('desc');
      this.arrayValidation('skills');

      if (!this.formIsValid) {
        return;
      }
      const formData = {
        title: this.title.val,
        territory: this.terr.val,
        description: this.desc.val,
        skills: this.skills.val,
        bids: [{gangsterId: 'take this!', price: 0, status: 'zzz'}],
      };

      this.$emit('add-job', formData);

      
    },
  },
};
</script>

<style lang="scss">
.create-button {
  background-color: var(--lm-secondary-color-dark);
  color: var(--theme-color-light);
  padding: 0.3rem 0.6rem;
  border-radius: 0.2rem;
  font-size: 0.9rem;
  &:hover {
    background-color: var(--lm-secondary-color);
    cursor: pointer;
  }
}
</style>

