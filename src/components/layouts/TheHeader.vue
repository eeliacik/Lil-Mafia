<template>
  <div class="wrapper header-wrapper">
    <div class="header-container">
      <router-link class="logo-container" :to="homeLink">
        <div class="logo">
          <div id="logo-row-1">
            <span id="logo-item-1"></span>
            <span id="logo-item-2"></span>
            <span id="logo-item-3"></span>
          </div>
          <div id="logo-row-2">
            <span id="logo-item-4"></span>
            <span id="logo-item-5"></span>
            <span id="logo-item-6"></span>
          </div>
        </div>
        <div class="logo-text">Lil'Mafia</div>
      </router-link>
      <nav>
        <ul class="navigation-list">
          <li class="navigation-item">
            <router-link v-if="userType === 'gangster'" to="/jobs"
              >Jobs</router-link
            >
          </li>
          <li class="navigation-item">
            <router-link v-if="userType === 'gangster'" to="/myoffers"
              >Offers</router-link
            >
          </li>
          <li class="navigation-item">
            <router-link v-if="userType === 'capo'" to="/myjobs"
              >Jobs</router-link
            >
          </li>
        </ul>
      </nav>
      <div class="auth-container">
        <router-link class="auth-login" v-if="!isAuthenticated" to="/login"
          >Login</router-link
        >
        <router-link class="auth-logout" v-else @click="logout" to="/"
          >Logout</router-link
        >
      </div>
    </div>
    <!-- <div class="header-bar">
      <div class="header-bar-text" v-show="homeLink === '/'">
        <span class="header-bar-front">_</span>
        Header
      </div>
    </div> -->
  </div>
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
    homeLink() {
      if (this.userType === 'gangster') {
        return '/jobs';
      } else if (this.userType === 'capo') {
        return '/myjobs';
      } else {
        return '/';
      }
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style lang="scss">
.header-wrapper {
  background-color: var(--theme-color-dark-2);
  // border-bottom: 0.06rem solid var(--theme-color-light-4);
  box-shadow: 0 0.12rem 0.2rem var(--theme-dark-shadow);
}

.header-container {
  width: 100%;
  max-width: var(--max-width);
  height: var(--header-height);
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
}

// .header-bar {
//   width: 100%;
//   /* background-color: var(--theme-color-dark-2); */
//   border-top: 1px solid var(--theme-color-dark-4);
//   /* border-bottom: 1px solid var(--theme-color-dark-4); */
// }

// .header-bar-front {
//   color: var(--lm-secondary-color-light);
//   font-weight: bold;
// }

// .header-bar-text {
//   color: var(--theme-color-light-4);
//   width: 100%;
//   max-width: var(--max-width);
//   margin: 0;
//   margin-left: auto;
//   margin-right: auto;
//   padding: 1rem;
//   padding-bottom: 0.25rem;
// }

.logo-container {
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  padding: 0 0.6rem;
}

.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#logo-row-1,
#logo-row-2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

#logo-item-1,
#logo-item-3 {
  width: 0.4rem;
  height: 0.6rem;
  border-bottom: 0.1rem solid var(--lm-primary-color-light);
}

#logo-item-2 {
  width: 1rem;
  height: 0.6rem;
  background-color: var(--lm-primary-color-light);
  /* background: linear-gradient(var(--lm-primary-color), var(--lm-primary-color-dark)); */
  border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
}

#logo-item-4,
#logo-item-6 {
  width: 0.45rem;
  height: 0.65rem;
}

#logo-item-5 {
  width: 0.9rem;
  height: 0.65rem;
  /* background-color: var(--lm-secondary-color-light); */
  border-left: 0.15rem solid var(--lm-secondary-color-light);
  border-right: 0.15rem solid var(--lm-secondary-color-light);
  border-bottom: 0.15rem solid var(--lm-secondary-color-light);
  /* background: linear-gradient(var(--theme-color-dark-4), var(--lm-secondary-color-light)); */
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.logo-text {
  color: var(--theme-color-light);
  font-size: 1.5rem;
}

nav {
  margin-right: auto;
  width: 100%;
}

.navigation-list {
  display: flex;
  gap: 0.5rem;
}

.navigation-item a {
  padding: 0.3rem 0.6rem;
  border-radius: 0.3rem;
  color: var(--theme-color-light-2);
  font-size: 0.9rem;
  &:hover {
    background-color: var(--theme-color-dark-3);
    color: var(--lm-primary-color-light);
  }
}

.navigation-item .router-link-active {
  border-bottom: 0.12rem solid var(--lm-primary-color);
  border-radius: 0;
  color: var(--theme-color-light-2);
  &:hover {
    background-color: var(--theme-color-dark-2);
    color: var(--theme-color-light-2);
  }
}

.auth-login,
.auth-logout,
.auth-login:visited,
.auth-logout:visited {
  padding: 0.3rem 0.6rem;
  border-radius: 0.3rem;
  color: var(--theme-color-light-2);
  font-size: 0.9rem;
}

.auth-login:hover {
  background-color: var(--theme-color-dark-3);
  color: var(--lm-primary-color-light);
}

.auth-logout:hover {
  background-color: var(--theme-color-dark-3);
  color: var(--lm-secondary-color-light);
}
</style>
