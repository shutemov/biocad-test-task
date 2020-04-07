<template>
    <div class="report-filter">

        <select class="report-filter__select">
            <option>1 day</option>
            <option selected>1 mounth</option>
            <option>6 mount</option>
            <option>1 year</option>
        </select>


        <div class="field" style="display: flex;flex-direction: column;margin-top: 10px;">

            <div class="field">
                <input class="is-checkradio is-info"
                       id="input1"
                       type="radio"
                       name="exampleRadioNormal"
                       value="Calibration"
                       checked="checked"
                       v-model="reportType"
                       @change="setReportType">
                <label for="input1">Calibration</label>
            </div>

            <div class="field">
                <input class="is-checkradio is-info"
                       id="input2"
                       type="radio"
                       name="exampleRadioNormal"
                       value="Measuring"
                       v-model="reportType"
                       @change="setReportType">
                <label for="input2">Measuring</label>
            </div>

            <div class="field">
                <input class="is-checkradio is-info"
                       id="input3"
                       type="radio"
                       name="exampleRadioNormal"
                       value="Using"
                       v-model="reportType"
                       @change="setReportType">
                <label for="input3">Using</label>
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