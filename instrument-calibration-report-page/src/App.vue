<template>
  <div class="section" id="app">
    <insrument-calibration-report></insrument-calibration-report>
  </div>
</template>

<script>
import insrumentCalibrationReport from './components/InsrumentCalibrationReportPage.vue'

export default {
  name: 'App',
  components: {
    insrumentCalibrationReport
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "TT Norms Regular";
}
</style>
