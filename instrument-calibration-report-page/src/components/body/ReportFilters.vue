<template>
    <div id="report-filter">
        <div class="select">
            <select style="width: 220px;">
                <option>1 day</option>
                <option>1 mounth</option>
                <option>6 mount</option>
                <option>1 year</option>
            </select>
        </div>


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
    #report-filter {
        margin-top: 30px;
    }
</style>