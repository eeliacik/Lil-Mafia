<template>
  <header>
    <nav>
      <ul>
        <h1>
          <router-link to="/">Lil'Mafia</router-link>
        </h1>
        <p>Free Agent Gangsters Hub</p>
      </ul>
      <ul>
        <li>
          <router-link to="/gangsters">Gangsters</router-link>
        </li>
        <li>
          <router-link to="/jobs">Jobs</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  display: flex;
  background-color: aquamarine;
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

header a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
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
