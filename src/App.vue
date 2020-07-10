<template>
  <div id="app">
    <HomePage />
      <LoginPage />
      <!-- <IssoMenu />
      <HelloWorld /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import IssoMenu from '@/components/IssoMenu'
import LoginPage from './pages/loginPage'
import HomePage from "./pages/homePage"
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // IssoMenu,
    LoginPage,
    HomePage
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
}
</style>
