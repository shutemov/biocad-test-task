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
  font-style: normal;
  font-weight: normal;
}

body{
    margin:0;
    padding: 0;
}

  @media (max-width: 700px) {
    #app {
      /*form*/
      padding: 6.0px 5.0px 20.0px 5.0px;
      /*padding:0px;*/
      box-sizing: border-box;
    }
  }
</style>
