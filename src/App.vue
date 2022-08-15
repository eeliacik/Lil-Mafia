<template>
  <div class="wrapper page-wrapper">
    <the-header></the-header>
    <div class="wrapper main-wrapper">
      <div class="main-container">
        <router-view></router-view>
      </div>
    </div>
    <base-toast></base-toast>
    <!-- <the-footer></the-footer> -->
  </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
// import TheFooter from './components/layouts/TheFooter.vue';

export default {
  components: {
    TheHeader,
    // TheFooter,
  },
};
</script>

<style lang="scss">
@import './styles/main.scss';
@import 'vue-toastification/dist/index.css';

* {
  box-sizing: border-box;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a,
a:visited,
.router-link,
.router-link:visited {
  text-decoration: none;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.page-wrapper {
  gap: 1rem;
}

// .main-wrapper {}

.main-container {
  width: 100%;
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 480px) {

  .header-container {
    padding: 0;
    gap: 1rem;
  }

  .main-container {
    padding: 0;
  }

  .logo-text {
    font-size: 1.1rem;
  }
}

@media (max-width: 380px) {
  .header-container {
    gap: 1rem;
  }

  .logo-text {
    display: none;
  }
}
</style>
