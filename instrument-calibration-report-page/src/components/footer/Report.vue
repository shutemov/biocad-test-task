<template>
    <div class="section report">


    <table class="table">


        <!--        CAPTION         -->
        <caption class="title"
                 style="text-align: left;font-size: 16px;line-height: 19px;font-style: normal;">
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
            <report-item v-for="i in 4" :key="i"></report-item>
        </tbody>
    </table>
    </div>
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

        /* white */
    }

    .report{
        background: #FFFFFF;
        overflow: hidden;
        overflow-x: scroll;
        border: 1px dashed #939DA6;
        box-sizing: border-box;
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.15);
    }

    th {
        font-size: 13px;
        line-height: 15px;
        color: #939DA6 !important;
        /*width: 200px;*/
    }

</style>