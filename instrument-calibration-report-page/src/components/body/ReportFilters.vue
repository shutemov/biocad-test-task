<template>
    <div class="report-filter">

        <select class="report-filter__select">
            <option>1 day</option>
            <option selected>1 mounth</option>
            <option>6 mounth</option>
            <option>1 year</option>
        </select>


        <div class="report-filter__checkradio" style="display: flex;flex-direction: column;margin-top: 10px;">

            <div>
                <input class=""
                       id="calibrationRadio"
                       type="radio"
                       name="reportTypeRadio"
                       value="Calibration"
                       checked="checked"
                       v-model="reportType"
                       @change="setReportType">
                <label for="calibrationRadio">Calibration</label>
            </div>

            <div>
                <input class="is-checkradio is-info"
                       id="measuringRadio"
                       type="radio"
                       name="reportTypeRadio"
                       value="Measuring"
                       v-model="reportType"
                       @change="setReportType">
                <label for="measuringRadio">Measuring</label>
            </div>

            <div>
                <input class="is-checkradio is-info"
                       id="usingRadio"
                       type="radio"
                       name="reportTypeRadio"
                       value="Using"
                       v-model="reportType"
                       @change="setReportType">
                <label for="usingRadio">Using</label>
            </div>
        </div>
    </div>

</template>

<script>
    import {SET_REPORT_TYPE} from "@/store/mutations";
    import {mapMutations} from "vuex";

    export default {
        name: "ReportFilters",


        data() {
            return {
                reportType: undefined,
            }
        },


        methods: {
            ...mapMutations([SET_REPORT_TYPE]),

            setReportType() {
                console.log(this.reportType)
                this[SET_REPORT_TYPE](this.reportType)
            }
        }
    }
</script>

<style scoped>
    .report-filter {

    }

    .report-filter__select {
        /*form*/
        width: 220px;
        height: 30px;
        background: #FFFFFF;
        border: 1px solid #E9E9E9;
        box-sizing: border-box;

        /*font*/
        font-family: "TT Norms Regular";
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.16px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #353535;
    }

</style>