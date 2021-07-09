<template>
  <div>
    <Legend />
    <div :class="{hidden: loaded}" class="loading-background" style="">
      <div id="spinner" class='flex-child loading'></div>
    </div>
    <div id="map" class="map"></div>
  </div>
</template>

<script>
import '../assets/css/assembly.css'
import { go, getMode } from './go';
import Legend from './Legend/Legend.vue'

export default {
  name: 'HelloWorld',
  components: {
    Legend
  },
  data: function() {
    return {loaded: false};
  },
  mounted() {
    this.$nextTick(function () {
      if (getMode() == 'gmaps') {
        let gmapsScript = document.createElement('script');
        const key = process.env.VUE_APP_KEY_OVERRIDE == null ? 'AIzaSyCdh-fHBN8bfpc_7Au1DnBJSnlWeNIdC68' : process.env.VUE_APP_KEY_OVERRIDE;
        gmapsScript.setAttribute('src', `https://maps.googleapis.com/maps/api/js?v=3.44.12&key=${key}`)
        document.head.appendChild(gmapsScript);
      }

      const initialize = async() => {
        await go();
        console.log('loaded...', this);
        this.loaded = true;
      }
      window.onload = initialize.bind(this);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import 'https://api.mapbox.com/mapbox-assembly/v0.20.0/assembly.min.css'; */

div.loading-background {
  background:rgba(0,0,0,.1)!important;
  z-index:1;
  width:100%;
  height:100vh;
  position:absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
}


div.hidden {
  display:none;
}

.map {
  z-index: 0;
}

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
