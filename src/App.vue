<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <homepage msg="Welcome Prado, to your Vue App"/>
</template>

<script>
import homepage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    homepage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
