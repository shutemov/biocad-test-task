<template>
    <div class="main-container">

        <!--  HEAD BLOCK  -->
        <div class="head">
            <div class="content">
                <filter-devices class="filter-devices"></filter-devices>
            </div>
        </div>

        <!--  BODY  BLOCK   -->
        <div class="body">

            <!--   LEFT SIDE   -->
            <div class="left-side ">

                <div class="left-side__content">

                    <!--  UNIT NAME  -->
                    <unit-name :title="this.unitNameTitle"></unit-name>

                    <!--  REPORT FILTER  -->
                    <report-filters class="report-filter"></report-filters>

                </div>

                <!--  GENERATE REPORT BUTTON  -->
                <button class="generate-button" @click="generate">
                    Generate report
                </button>

            </div>

            <!--  RIGHT SIDE  -->
            <div class="right-side">
                <device-info class="device-info" :device="getDevice"></device-info>
            </div>

        </div>

        <!--        FOOTER BLOCK-->
        <div class="footer-block">
            <report-table
                    :title="reportTable.reportType"
                    :t-head="reportTable.tHeadReportTableData"
                    :t-body="reportTable.tBodyReportTableData"/>
        </div>
    </div>

</template>

<script>
    import filterDevices from '@/components/header/FilterDevices'
    import unitName from '@/components/body/UnitName'
    import reportFilters from '@/components/body/ReportFilters'
    import deviceInfo from '@/components/body/DeviceInfo'
    import reportApp from '@/components/footer/Report'
    import reportTable from '@/components/footer/ReportTable'
    import {mapGetters} from "vuex";


    export default {
        name: 'InsrumentCalibrationReportPage',


        components: {
            filterDevices, unitName, reportFilters, deviceInfo, reportApp,
        },
        props: {
            msg: String
            filterDevices, unitName, reportFilters, deviceInfo, reportTable,
        },


        data() {
            return {
                reportTable: {
                    reportType: undefined,

                    headReportTableData: [],

                    bodyReportTableData: [],
                },

                unitNameTitle: undefined,
            }
        },

        computed: {
            ...mapGetters(['getFoundDevice']),

            getDevice(){
                return this.getFoundDevice
            }

        methods: {

            ...mapGetters(['getReportType']),

            generate() {
                let reportType = this.getReportType()

                if (!reportType) {
                    alert('Choose report type option')
                    return
                }

                //set the selected item for generation report
                this.reportType = this.getReportType()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
<style>

    .main-container {
        width: auto;
        padding-left: 50px;
    }

    .main-container > .head, .body {
        margin-top: 30px;
    }

    .head {
        width: 390px;
        height: 90px;
    }

    .body {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .left-side {
        display: flex;
        width: auto;
        height: auto;
        flex-direction: column;
        justify-content: space-between;
    }

    .left-side__content {
    }

    .report-filter {
        margin-top: 30px;
    }

    .generate-button {
        /*form*/
        width: 180px;
        height: 40px;
        background: #4990E2;
        border-radius: 3px;
        border: none;

        /*font*/
        color: white;
        font-family: "TT Norms Regular";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.16px;
        font-feature-settings: 'pnum' on, 'lnum' on;
    }

    .right-side {
        /*form*/
        margin-left: 30px;
    }

    .device-info {
        /*form*/
        padding: 20px 18px 20px 18px;
        height: 330px;
    }

    .footer-block {
        margin-top: 50px;
    }


</style>
