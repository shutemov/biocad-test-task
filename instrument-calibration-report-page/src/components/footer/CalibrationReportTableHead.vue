<template>
        <tr class="report-header-item">

            <th class="report-header-item__content"
                v-for="th in this.tHeadData"
                :key="th.id"
                v-html="th">
            </th>

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

    th:not(:first-child){
        /*form*/
        padding-left: 20px;
    }

    .report-header-item__content{
        /*font*/
        color: #939DA6;
        font-weight: normal;
    }
</style>