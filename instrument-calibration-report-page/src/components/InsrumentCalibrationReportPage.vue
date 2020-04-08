<template>
    <div class="main-container">

        <!--  HEAD BLOCK  -->
        <div class="head">
                <filter-devices class="filter-devices"></filter-devices>
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
    import reportTable from '@/components/footer/ReportTable'
    import {mapGetters} from "vuex";


    export default {
        name: 'InsrumentCalibrationReportPage',


        components: {
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


        created() {

            // Get initional state for table

            this.reportTable.reportType = this.$store.getters.getReportType
            this.reportTable.tHeadReportTableData = this.getTableHeadData
            this.reportTable.tBodyReportTableData = this.getTableBodyData

            // Get initional state for UnitName
            this.unitNameTitle = this.$store.getters.getUnitNameData

        },

        computed: {

            ...mapGetters(['getFoundDevice', 'getHeadReportTableData', 'getBodyReportTableData']),

            getDevice() {
                return this.getFoundDevice
            },

            getTableHeadData() {
                return [...this.getHeadReportTableData]
            },

            getTableBodyData() {
                return [...this.getBodyReportTableData]
            }

        },

        methods: {

            ...mapGetters(['getReportType']),

            generate() {
                let reportType = this.getReportType()

                if (!reportType) {
                    alert('Choose report type option')
                    return
                }

                //set the selected item for generation report
                this.reportTable.reportType = this.getReportType() + ' report'
            }
        }
    }
</script>

<style>

    .main-container {
        width: auto;
        padding-left: 50px;
    }

    /*margin of global elements*/

    .main-container > .head, .body {
        margin-top: 30px;
    }

    .footer-block {
        /*form*/
        margin-top: 50px;
    }

    /*---*/

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
        flex-direction: column;
        justify-content: space-between;
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

    @media (max-width: 700px) {

        .main-container {
            /*form*/
            /*box-sizing: border-box;*/
            width: 100%;
            padding: 0px;
        }

        .head {
            /*form*/
            margin-top: 30px;
            width: 100%;
        }

        .body {
            /*form*/
            display: flex;
            flex-direction: column-reverse;
            width: 100%;
        }

        .left-side{
            /*form*/
            margin-top: 30px;
        }

        .right-side {
            /*form*/
            margin-left: 0px;
        }

        .generate-button {
            /*form*/
            width: 100%;
            margin-top: 30px;
        }
    }


</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
