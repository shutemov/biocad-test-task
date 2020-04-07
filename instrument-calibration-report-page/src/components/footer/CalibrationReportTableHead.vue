<template>
    <tr>
        <th v-for="th in this.tHeadData" :key="th.id" v-html="th">
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
    tr > th {
        font-size: 16px;
        line-height: 19px;
        font-style: normal;
        font-weight: normal;
        padding: 20px 20px 20px 0px;
    }
</style>