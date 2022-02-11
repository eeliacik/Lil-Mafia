<template>
  <section>
    <base-card><h2>Log In</h2></base-card>
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
            <div class="form-action">
              <button @click="login">Log In</button>
              <p>
                New to Lil'Mafia?
                <router-link to="/signup">Sign up</router-link> now.
              </p>
            </div>
          </div>
          <p v-if="isLoading">Signing In...</p>
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
      isLoading: false,
    };
  },
  methods: {
    async login() {
      this.isLoading = true;
      const authData = { email: this.email.val, password: this.password.val };
      this.$store.dispatch('login', authData)
      .then((userType)=> {
        
        console.log('login ' + userType)

        this.$router.push(userType === 'gangster' ? '/jobs' : '/myjobs')
      })
      .catch((error) => {
        console.log(error);
      })
    },
  },
};
</script>

<style scoped>
.form-block {
  border: 1px solid lightgray;
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
  gap: 10px;
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

p {
  margin: 0;
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
