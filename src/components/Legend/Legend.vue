<template>
  <div class='legend'>
    <p>Legend</p>
    <ColorStepper
      style="margin-bottom:4px"
      :colors="gradient"
      :maxValue="maxValue"></ColorStepper>
    <div class='linkcont'>
      <a href='https://data.nsw.gov.au/data/dataset/covid-19-cases-by-location/resource/21304414-1ff1-4243-a5d2-f52778048b29' target="_blank">Data source (Data.NSW)</a>
    </div>
    <div class='linkcont'>
      <a href='https://github.com/domsleee/covid-heatmap' target="_blank">github repo</a>
    </div>
  </div>
</template>

<script>
import { LegendDefs } from '../LegendDefs';
import ColorStepper from '../ColorStepper/ColorStepper';
export default {
  name: 'Legend',
  components: { ColorStepper },
  props: {
  },
  data: function() {
    return {
      gradient: LegendDefs.LEGEND_GRADIENT,
      maxValue: LegendDefs.MAX_CASES
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
div.legend {
  /*border: 1px solid #999;*/
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding: 0 5px;
  position: absolute;
  z-index:500;
  top: 60px;
  right: 10px;
  background: #bbb;
  border-radius: 5px;
  width: 200px;
  min-height: 100px;
  padding-bottom: 0.75em;
}

div.legend p {
  margin: 8px 0;
  font-size: 24px;
  font-weight: bold;
}

a {
  text-align: center;
  text-decoration: none;
}

div.linkcont {
  text-align:left;
  margin-left: 4px;
}

</style>