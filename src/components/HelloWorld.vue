<template>
  <div id="map" class="map"></div>
</template>

<script>
import { go } from './go';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    let gmapsScript = document.createElement('script');
    const key = process.env.VUE_APP_KEY_OVERRIDE == null ? 'AIzaSyCdh-fHBN8bfpc_7Au1DnBJSnlWeNIdC68' : process.env.VUE_APP_KEY_OVERRIDE;
    gmapsScript.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${key}`)
    document.head.appendChild(gmapsScript);
    async function initialize() {
      await go();
    }
    window.onload = initialize;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
