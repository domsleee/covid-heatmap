<template>
  <div>
    <div class='stepper'>
      <template v-for="(color, index) in colors">
        <div
          v-tooltip='calcTooltip(index)'
          class='step'
          :key="color"
          :style="{ background: color, opacity: 0.6 }" />
      </template>
    </div>
    <div class='stepper' style='padding: 0 4px; box-sizing: border-box;'>
      <div class='step' style='text-align: left'>0</div>
      <div class='step' style='text-align: right'>{{maxValue}}+</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorStepper',
  props: {
    colors: Array,
    maxValue: Number
  },
  mounted() {
  },
  methods: {
    calcTooltip(index) {
      const numColors = this.colors.length;
      const l = index;
      const r = index+1;
      const fn = t => `${(this.maxValue*t/numColors).toFixed(1)}`;
      return `${fn(l)} - ${fn(r)}`;
    }
  }

}
</script>

<style scoped>
div.stepper {
  display: inline-flex;
  width: 100%;
}

div.step {
  flex: 1 100%;
  height: 20px;
  min-width: 10px;
  display:inline-block;
}

</style>