<template>
  <div class="wrapper page-wrapper">
    <the-header></the-header>
    <div class="wrapper main-wrapper">
      <div class="main-container">
        <router-view></router-view>
      </div>
    </div>
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

.main-wrapper {
}

.main-container {
  width: 100%;
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 2rem; 
  display: flex;
  flex-direction: column;
  align-items: center;
}

// @media (max-width: 768px) {
//   .main-wrapper{
//     width: 600px;
//   }
// }
</style>
