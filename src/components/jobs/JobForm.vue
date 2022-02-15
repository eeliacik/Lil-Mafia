<template>
  <form @submit.prevent="submitForm">
    <div class="form-block" :class="{ invalid: !this.title.isValid }">
      <label for="title">Title</label>
      <input
        id="title"
        type="text"
        v-model.trim="title.val"
        @blur="clearValidationError('title')"
      />
      <p v-if="!this.title.isValid">* Please enter the job title</p>
    </div>
    <div class="form-block" :class="{ invalid: !this.terr.isValid }">
      <label for="territory">Territory</label>
      <input
        id="territory"
        type="text"
        v-model.trim="terr.val"
        @blur="clearValidationError('terr')"
      />
      <p v-if="!this.terr.isValid">* Please enter the territory</p>
    </div>
    <div class="form-block" :class="{ invalid: !this.desc.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="desc.val"
        @blur="clearValidationError('desc')"
      />
      <p v-if="!this.desc.isValid">* Please enter the job description</p>
    </div>
    <div
      class="form-block"
      :class="{ invalid: !this.skills.isValid }"
      @change="clearValidationError('skills')"
    >
      <h4>Skills</h4>
      <div class="skill-checkbox">
        <input
          type="checkbox"
          name="skills"
          value="blackmail"
          id="blackmail"
          v-model="skills.val"
        />
        <label for="blackmail">Blackmail</label>
      </div>
      <div class="skill-checkbox">
        <input
          type="checkbox"
          name="skills"
          value="bully"
          id="bully"
          v-model="skills.val"
        />
        <label for="bully">Bully</label>
      </div>
      <div class="skill-checkbox">
        <input
          type="checkbox"
          name="skills"
          value="kidnap"
          id="kidnap"
          v-model="skills.val"
        />
        <label for="kidnap">Kidnap</label>
      </div>
      <div class="skill-checkbox">
        <input
          type="checkbox"
          name="skills"
          value="launder"
          id="launder"
          v-model="skills.val"
        />
        <label for="launder">Launder</label>
      </div>
      <div class="skill-checkbox">
        <input
          type="checkbox"
          name="skills"
          value="pickpocket"
          id="pickpocket"
          v-model="skills.val"
        />
        <label for="pickpocket">Pickpocket</label>
      </div>
      <div class="skill-checkbox">
        <input
          type="checkbox"
          name="skills"
          value="smuggle"
          id="smuggle"
          v-model="skills.val"
        />
        <label for="smuggle">Smuggle</label>
      </div>
      <p v-if="!this.skills.isValid">
        * Please choose at least one of the skills above
      </p>
    </div>
    <button>Create Job</button>
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

      this.$router.replace('/myjobs');
    },
  },
};
</script>

<style scoped>
.form-block {
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
}

.form-block h4 {
  margin: 0;
  font-weight: bold;
}

.form-block label {
  font-weight: bold;
}
.skill-checkbox {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.skill-checkbox input {
  margin: 0;
  height: 1.15rem;
  width: 1.15rem;
}

.skill-checkbox label {
  margin-left: 0.25rem;
  font-weight: normal;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

p {
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  color: red;
}
</style>
