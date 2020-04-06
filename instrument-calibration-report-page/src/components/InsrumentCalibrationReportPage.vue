<template>
    <div class="container" id="main-container">

        <!--       HEAD BLOCK        -->
        <div class="columns">
            <div class="column">
                <filter-devices></filter-devices>
            </div>
        </div>

        <!--        BODY  BLOCK      -->
        <div class="columns ">
            <!--            LEFT SIDE              -->
            <div class="column is-two-fifths">

                <!--        UNIT NAME     -->
                <unit-name></unit-name>

                <!--        REPORT FILTER     -->
                <report-filters></report-filters>

                <!--  GENERATE REPORT BUTTON  -->
                <button class="button is-info" style="margin-top: 30px;">Generate report</button>

            </div>

            <!--            RIGHT SIDE             -->
            <div class="column">
                <device-info :device="getDevice"></device-info>
            </div>
        </div>

        <!--        FOOTER BLOCK      -->
        <div class="columns" style="margin-top: 10px;">
            <div class="column">
                <report-app></report-app>
            </div>
        </div>

    </div>
</template>

<script>
    import filterDevices from '@/components/header/FilterDevices'
    import unitName from '@/components/body/UnitName'
    import reportFilters from '@/components/body/ReportFilters'
    import deviceInfo from '@/components/body/DeviceInfo'
    import reportApp from '@/components/footer/Report'
    import {mapGetters} from "vuex";


    export default {
        name: 'InsrumentCalibrationReportPage',
        components: {
            filterDevices, unitName, reportFilters, deviceInfo, reportApp,
        },
        props: {
            msg: String
        },

        data() {
            return {

            }
        },

        computed: {
            ...mapGetters(['getFoundDevice']),

            getDevice(){
                return this.getFoundDevice
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


    #main-container {
        display: flex;
        flex-direction: column;
    }


    #body-block {
        display: flex;
        flex-flow: wrap row;
        /*border: 1px solid;*/
        width: auto;
        /*height: 330px;*/
        margin-top: 30px;
        margin-left: 50px;
    }


</style>
