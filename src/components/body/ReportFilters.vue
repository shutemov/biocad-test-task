<template>
    <div class="report-filter">

        <div class="report-filter__item">
            <select class="select">
                <option>1 day</option>
                <option selected>1 mounth</option>
                <option>6 mounth</option>
                <option>1 year</option>
            </select>
        </div>


        <div class="report-filter__item">
            <div class="check-radio-area">
                <div class="check-radio-area__item">
                    <input type="radio"
                           name="reportTypeRadio"
                           value="Calibration"
                           checked
                           v-model="reportType"
                           @change="setReportType"
                           id="calibrationRadio">
                    <label for="calibrationRadio">Calibration</label>
                </div>

                <div class="check-radio-area__item">
                    <input  type="radio"
                            name="reportTypeRadio"
                            value="Measuring"
                            v-model="reportType"
                            @change="setReportType"
                            id="measuringRadio">
                    <label for="measuringRadio">Measuring</label>
                </div>

                <div class="check-radio-area__item">
                    <input type="radio"
                           name="reportTypeRadio"
                           value="Using"
                           v-model="reportType"
                           @change="setReportType"
                           id="usingRadio">
                    <label for="usingRadio">Using</label>
                </div>
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
    .select {
        /*form*/
        width: 220px;
        height: 30px;
        background: #FFFFFF;
        border: 1px solid #E9E9E9;
        box-sizing: border-box;
        padding-left: 10px;

        /*font*/
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.16px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #353535;
    }

    .check-radio-area {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }

    .check-radio-area > div {
        /*form*/
        margin-top: 10px;
    }


    /*custom checkradio*/

    @supports (-webkit-appearance: none) or (-moz-appearance: none) {
        input[type="radio"] {
            /*form*/
            --active: #fff;
            --active-inner: #4990E2;
            --border: #c1c1c1;
            --border-hover: #275efe;
            --background: #fff;
            -webkit-appearance: none;
            -moz-appearance: none;
            width: 20px;
            height: 20px;
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

            left: 0;
            top: 0;
            position: absolute;
            /*form*/
            display: block;
            content: "";
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: var(--active-inner);
            opacity: var(--o, 0);
            transform: scale(var(--s, 0.7));
        }

        input[type='radio']:checked {
            --o: 1;
            --s: .5;
        }


        input[type="radio"] + label {
            /*form*/
            width: 90%;
            display: inline-block;
            margin-left: 11px;

            /*font*/
            font-size: 14px;
            cursor: pointer;
            font-style: normal;
            font-weight: normal;
            line-height: 20px;
            letter-spacing: 0.16px;
            font-feature-settings: 'pnum' on, 'lnum' on;
            color: #353535;
        }
    }


    @media screen and (max-width: 700px) {
        .select {
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
                width: 80%;
            }
        }


    }


</style>