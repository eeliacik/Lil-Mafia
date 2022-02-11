<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">
          <h2>Lil'Mafia</h2>
        </router-link>
      </div>
      <ul>
        <li>
          <router-link v-if="userType === 'gangster'" to="/jobs">Jobs</router-link>
        </li>
        <!-- <li>
          <router-link v-if="userType === 'capo'" to="/gangsters">Gangsters</router-link>
        </li> -->
        <li>
          <router-link v-if="userType === 'capo'" to="/myjobs">My Jobs</router-link>
        </li>
        <li>
          <router-link v-if="userType === 'capo'" to="/newjob">New Job</router-link>
        </li>
        <li>
          <router-link v-if="!isAuthenticated" to="/signup">Sign Up</router-link>
        </li>
        <li>
          <router-link v-if="!isAuthenticated" to="/login">Login</router-link>
          <router-link v-else @click="logout" to="/">Logout</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    userType() {
      return this.$store.getters.userType;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
}
</script>

<style scoped>
header {
  width: 100%;
  height: 120px;
  display: flex;
  background-color: rgb(109, 99, 150);
  justify-content: center;
  align-items: center;
}

nav {
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo,
.logo a,
.logo a.router-link-active,
.logo a:hover {
  color: white;
  border: none;
}

a {
  text-decoration: none;
  color: pink;
  margin: 0 5px;
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 2px;
}

a:hover {
  color: lightsalmon;
  border: 1px solid lightsalmon;
}

a:active,
a.router-link-active {
  color: pink;
  border: 1px solid pink;
  /* box-shadow: 1px 1px 10px rgba(255, 192, 193, 0.33); */
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
