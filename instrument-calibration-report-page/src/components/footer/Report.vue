<template>
    <table class="table">


        <!--        CAPTION         -->
        <caption class="title"
                 style="text-align: left;font-family: 'TT Norms Regular';font-size: 16px;line-height: 19px;font-style: normal;">
            <b>Calibration report</b></caption>


        <!--        TABLE HEAD      -->
        <thead>
        <tr>
            <th>Data</th>
            <th>Used buffer solution</th>
            <th>
                Slope, %
                <br>
                Norm 95-100
            </th>
            <th>
                Offset, mV
                <br>
                Norm ± (0-20)
            </th>
            <th>User</th>
        </tr>
        </thead>


        <!--        TABLE BODY      -->
        <tbody>
            <report-item></report-item>
        </tbody>
    </table>
</template>

<script>
    import reportItem from './ReportItem'

    export default {
        name: "Report",
        components: {
            reportItem
        }
    }
</script>

<style scoped>
    table {
        width: 100%;
    }

    th {
        font-size: 13px;
        line-height: 15px;
        color: #939DA6 !important;
        width: 200px;
    }



    tbody > tr > td {
        font-size: 13px;
        line-height: 15px;
    }
</style>