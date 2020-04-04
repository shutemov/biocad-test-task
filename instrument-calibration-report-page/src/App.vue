<template>
  <div id="app">
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
