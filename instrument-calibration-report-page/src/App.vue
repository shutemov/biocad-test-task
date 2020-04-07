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
  /*form*/
  display: flex;
  justify-content: center;
  padding: 30px 50px 100px 50px;

  /*font*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "TT Norms Regular";
}
</style>
