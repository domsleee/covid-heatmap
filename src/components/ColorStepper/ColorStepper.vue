<template>
  <div>
    <div class='stepper'>
      <div
        class='step'
        v-for="color in colors"
        :key="color"
        :style="{ background: color }" />
    </div>
    <div class='stepper' style='padding: 0 4px; box-sizing: border-box;'>
      <div class='step' style='text-align: left'>0</div>
      <div class='step' style='text-align: right'>55+</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorStepper',
  props: {
    colors: Array
  },
  mounted() {
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