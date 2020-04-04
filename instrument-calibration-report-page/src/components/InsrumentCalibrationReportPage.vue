<template>
    <div id="main-container">

        <!--       HEAD BLOCK        -->
        <filter-devices></filter-devices>

        <!--        BODY  BLOCK      -->
        <div id="body-block">

            <!--            LEFT SIDE              -->
            <div style="border: 1px solid red;">

                <!--        UNIT NAME     -->
                <unit-name></unit-name>

                <!--        REPORT FILTER     -->
                <report-filters></report-filters>

                <!--  GENERATE REPORT BUTTON  -->
                <button class="button is-info" style="margin-top: 30px;">Generate report</button>
            </div>

            <!--            RIGHT SIDE             -->
            <device-info></device-info>

        </div>


    </div>
</template>

<script>
    import filterDevices from '@/components/FilterDevices'
    import unitName from '@/components/UnitName'
    import reportFilters from '@/components/ReportFilters'
    import deviceInfo from '@/components/DeviceInfo'

    export default {
        name: 'InsrumentCalibrationReportPage',
        components: {
            filterDevices, unitName, reportFilters, deviceInfo
        },
        props: {
            msg: String
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
        flex-direction: row;
        border: 1px solid;
        width: auto;
        height: 330px;
        margin-top: 30px;
        margin-left: 50px;
    }


</style>
