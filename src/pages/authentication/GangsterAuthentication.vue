<template>
  <section>
    <base-card class="container">
      <div class="form-block">
        <form @submit.prevent="submitForm">
          <div class="form-input">
            <label for="email">E-mail</label>
            <input type="email" id="email" v-model.trim="email.val" />
          </div>
          <div class="form-input">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password.val" />
          </div>
          <div class="form-action">
            <div v-if="loginMode" class="form-action">
              <base-button mode="flat">Sign in</base-button>
              <p @click="switchMode">or <a href="#">Create an account</a></p>
            </div>
            <div v-else class="form-action">
              <base-button mode="flat">Create an account</base-button>
              <p @click="switchMode">or <a href="#">Sign in</a></p>
            </div>
          </div>
        </form>
      </div>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: {
        val: '',
        isValid: true,
      },
      password: {
        val: '',
        isValid: true,
      },
      loginMode: true,
    };
  },
    methods: {
        switchMode() {
            this.loginMode = !this.loginMode;
        },
    },

};
</script>

<style scoped>
.container {
  margin: 1rem auto;
}

.form-block {
  border: 1px solid gray;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-input {
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
}

.form-action {
  display: flex;
  justify-content: flex-start;
}

/* .form-action a:hover{
  color: orange;
} */

a:visited,
a:link {
    text-decoration: none;
    color: blue;
}

label {
  font-weight: bold;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.invalid p {
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  color: red;
}
</style>
