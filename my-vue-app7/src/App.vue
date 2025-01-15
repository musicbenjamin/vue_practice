// App.vue
<template>
  <div id="app">
    <header>
      <h1>Vuex Todo List</h1>
    </header>
    <main>
      <Home />
    </main>
  </div>
</template>

<script>
import Home from '../src/components/Home.vue';

export default {
  components: {
    Home, // Import and register the Home component
  },
};
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

header {
  background-color: #42b983;
  color: white;
  padding: 20px;
}

main {
  padding: 20px;
}
</style>
