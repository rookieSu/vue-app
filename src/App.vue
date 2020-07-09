<template>
  <div id="app">
    <isso-menu />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import IssoMenu from '@/components/IssoMenu'
export default {
  name: 'App',
  components: {
    HelloWorld,
    IssoMenu
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
