<template>
  <div id="app">
    <nav class="navbar">
      <router-link class="nav-link" to="/">Alert</router-link>
      <router-link class="nav-link" to="/dropdown">Dropdown</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  background-color: #333;
  padding: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.nav-link:hover {
  background-color: #555;
}
</style>
