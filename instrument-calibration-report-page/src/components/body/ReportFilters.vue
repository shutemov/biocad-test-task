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
    .report-filter__select {
        /*form*/
        width: 220px;
        height: 30px;
        background: #FFFFFF;
        border: 1px solid #E9E9E9;
        box-sizing: border-box;

        /*font*/
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.16px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #353535;
    }

    .report-filter__checkradio > div {
        /*form*/
        margin-top: 12px;
    }


    /*custom checkradio*/

    @supports (-webkit-appearance: none) or (-moz-appearance: none) {
        input[type="radio"] {
            --active: #fff;
            --active-inner: #4990E2;
            --border: #c1c1c1;
            --border-hover: #275efe;
            --background: #fff;
            -webkit-appearance: none;
            -moz-appearance: none;
            width: 21px;
            height: 21px;
            outline: none;
            display: inline-block;
            vertical-align: top;
            position: relative;
            margin: 0;
            cursor: pointer;
            border-radius: 50%;
            border: 2px solid var(--border);
            background: var(--background);
        }

        input[type="radio"]:after {
            display: block;
            width: 17px;
            height: 17px;
            border-radius: 50%;
            background: var(--active-inner);
            opacity: var(--o, 0);
            transform: scale(var(--s, 0.7));
            content: "";
        }


        input[type="radio"]:checked {
            --o: 1;
            --s: 0.5;
        }

        input[type="radio"] + label {
            /*form*/
            display: inline-block;
            margin-left: 4px;
            /*font*/
            font-size: 14px;
            vertical-align: top;
            cursor: pointer;
            font-style: normal;
            font-weight: normal;
            line-height: 20px;
            letter-spacing: 0.16px;
            font-feature-settings: 'pnum' on, 'lnum' on;
            color: #353535;
        }
    }

    @media (max-width: 700px) {
        .report-filter__select {
            /*form*/
            width: 100%;
        }

        @supports (-webkit-appearance: none) or (-moz-appearance: none) {
            input[type="radio"] {
                /*form*/
                width: 30px;
                height: 30px;
            }

            input[type="radio"]:after {
                /*form*/
                width: 26px;
                height: 26px;
            }


            input[type="radio"] + label {
                /*form*/
                margin-left: 4px;
                margin-top: 5px;
                height: 26px;
                /*font*/
                font-size: 18px;
            }
        }


    }


</style>