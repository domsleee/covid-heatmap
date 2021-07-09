<template>
  <hello-world />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './assets/css/floatingEl.css';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

html, body {
  font-family: 'Roboto', sans-serif!important;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html, body {
  padding: 0; margin: 0; height: 100%; width: 100%;
  overflow: hidden;
}

h2, p {
  text-align: center;
}

.map {
  margin: auto;
  width: 100%;
  height: 100vh;
}

</style>
