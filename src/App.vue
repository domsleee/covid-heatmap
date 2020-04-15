<template>
  <div>

    <div id="map" class="map"></div>

    <hello-world />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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

.floatingEl {
  position: absolute;
  background: grey;
  display: inline-block;
  left: 0;
  top: 0;
  width: 200px;
  height: 100px;
}
</style>
