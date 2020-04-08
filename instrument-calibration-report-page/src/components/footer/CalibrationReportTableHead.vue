<template>
    <tr>
        <th v-for="th in this.tHeadData" :key="th.id" v-html="th" />
    </tr>
</template>

<script>
    export default {
        name: "CalibrationReportTableHead",


        props: {
            tHeadData: {
                type: Array,
                default: function () {
                    return [
                        'Data',
                        'Used Buffer Solution',
                        'Slope, % <br> Norm 95-100',
                        'Offset, mV <br> Norm ± (0-20)',
                        'User',
                    ]
                }
            }
        }
    }
</script>

<style scoped>

    tr > th {
        /*form*/
        margin-left: 20px;
        vertical-align: top;
        padding: 0px 20px 20px 0px;

        /*font*/
        font-size: 13px;
        font-style: normal;
        line-height: 15px;
        color: #939DA6;
    }

    tr > th:first-child {
        width: 100px;
    }

</style>