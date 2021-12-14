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
          <router-link to="/gangsters">Gangsters</router-link>
        </li>
        <li>
          <router-link to="/gangster-registration">Register</router-link>
        </li>
        <li>
          <router-link to="/jobs">Jobs</router-link>
        </li>
        <li>
          <router-link to="/job-registration">New Job</router-link>
        </li>
        <li>
          <router-link to="/login">Log In</router-link>
        </li>
        <li>
          <router-link to="/signup">Sign Up</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 80px;
  display: flex;
  background-color: rgb(109, 99, 150);
  justify-content: center;
  align-items: center;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin: 0;
}

.logo {
  margin: 0;
  padding: 0;
}

header a {
  text-decoration: none;
  color: pink;
  margin: 0 0.25rem;
  padding: 0.5rem 0.75rem;
  display: inline-block;
  border: 1px solid transparent;
  border-radius: 0.3rem;
}

.logo a {
  color: white;
  margin: 0;
  padding: 0;
}

ul a:hover {
  color: lightsalmon;
  border: 1px solid lightsalmon;
  /* box-shadow: 1px 1px 10px rgba(255, 160, 122, 0.33); */
}

a:active,
a.router-link-active,
a.router-link-active:hover {
  color: pink;
  border: 1px solid pink;
  /* box-shadow: 1px 1px 10px rgba(255, 192, 193, 0.33); */
}

.logo a:active,
.logo a:hover,
.logo a.router-link-active,
.logo a.router-link-active:hover {
  color: white;
  border-color: transparent;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0, 0.5rem;
}
</style>
