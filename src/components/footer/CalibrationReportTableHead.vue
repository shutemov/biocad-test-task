<template>
    <tr class="report-header-item">

        <th class="report-header-item__th" v-for="th in this.tHeadData" :key="th.id">
            <div class="report-header-item__cell-text" v-html="th"></div>
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

    .report-header-item__th {
        color: #939DA6;
        font-weight: normal;
        vertical-align: top;
        font-size: 13px;
    }

</style>