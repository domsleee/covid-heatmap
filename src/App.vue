<template>
  <hello-world />
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
@import url('https://fonts.googleapis.com/css?family=Roboto');

html, body {
  font-family: 'Roboto', sans-serif;
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

.floatingEl {
  color: white;
  position: absolute;
  background: #424242;
  display: inline-block;
  left: 0;
  top: 0;
  width: 200px;
  padding: 5px;
  font-size: 1em;
  border-radius: 5px;
  min-height: 100px;
  opacity: 0.95;
}

/* change background and tip color to green */
.myFloatingEl .mapboxgl-popup-content {
  font-family: 'Roboto', sans-serif;
  color: white;
  background: #424242;
  width: 200px;
  opacity: 0.95;
  min-height: 100px;
  line-height: 1.2em;
  font-size: 15px;
  padding: 0.5em;
}
.myFloatingEl .mapboxgl-popup-tip {
  border-top-color: #424242;
  border-bottom-color: #424242;
  opacity: 0.95;
}

</style>
