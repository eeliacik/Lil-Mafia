<template>
  <section>
    <form @submit.prevent="submitForm">
      <div class="form-block" :class="{ invalid: !this.skills.isValid }" @change="clearValidationError('title')">
        <label for="title">Title</label>
        <input id="title" type="text" v-model.trim="title.val" />
        <p v-if="!this.title.isValid">* Please enter the job title</p>
      </div>
      <div class="form-block" :class="{ invalid: !this.skills.isValid }" @change="clearValidationError('description')">
        <label for="description">Description</label>
        <textarea id="description" rows="5" v-model.trim="desc.val" />
        <p v-if="!this.desc.isValid">* Please enter the job description</p>
      </div>
      <div class="form-block" :class="{ invalid: !this.skills.isValid }" @change="clearValidationError('skills')">
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
            value="pickpocket"
            id="pickpocket"
            v-model="skills.val"
          />
          <label for="pickpocket">Pickpocket</label>
        </div>
        <p v-if="!this.skills.isValid">
          * Please choose at least one of the skills above
        </p>
      </div>
    </form>
  </section>
</template>

<script>
export default {
    data() {
        return {
            title: {
                val: '',
                isValid: ''
            },
            desc: {
                val: '',
                isValid: ''
            },
            skills: {
                val: [],
                isValid: ''
            },
        }
    }
}
</script>


