<template>
    <div class="report-table">

        <!--  TABLE  -->
        <table class="report-table__table">

            <!--  CAPTION  -->
            <caption class="report-table__caption">
                <b>{{title}} report</b>
            </caption>


            <!--  TABLE HEAD  -->
            <thead class="report-table__thead">
            <calibration-report-table-head :t-head-data="this.tHead"/>
            </thead>


            <!--   TABLE BODY  -->
            <tbody class="report-table__tbody">
            <calibration-report-table-body-item
                    v-for="data in this.tBody"
                    :data="data"
                    :key="data.id"/>
            </tbody>
        </table>
    </div>
</template>

<script>

    import calibrationReportTableBodyItem from './CalibrationReportBodyItem'
    import calibrationReportTableHead from './CalibrationReportTableHead'

    export default {
        name: "ReportTable",


        components: {
            calibrationReportTableBodyItem, calibrationReportTableHead
        },


        props: {

            //Caption of the ReportTable
            title: {
                type: String,
                required: true
            },

            //Titles columns ReportTable
            tHead: {
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
            },

            //Data for TableBodyItem
            tBody: {
                type: Array,
                default: function () {
                    return [
                        {
                            when: {
                                date: '04.10.19',
                                time: '10:23'
                            },
                            usedBufferSolution: [
                                'В1: № 2000460789536: pH 1.09',
                                'В2: № 2000460789536: pH 2.00',
                                'В3: № 2000460789536: pH 4.01',
                                'В4: № 2000460789536: pH 7.00',
                                'В5: № 2000460789536: pH 9.21',
                                'В5: № 2000460789536: pH 9.21',
                                'В5: № 2000460789536: pH 9.21',
                            ],
                            slope: 98.1,
                            offset: -0.3,
                            user: 'Петров Иван Геннадьевич'
                        },
                        {
                            when: {
                                date: '04.10.19',
                                time: '10:23'
                            },
                            usedBufferSolution: [
                                'В1: № 2000460789536: pH 1.09',
                                'В2: № 2000460789536: pH 2.00',
                                'В3: № 2000460789536: pH 4.01',
                                'В4: № 2000460789536: pH 7.00',
                                'В5: № 2000460789536: pH 9.21',
                            ],
                            slope: 80.1,
                            offset: -20.3,
                            user: 'Иванов Геннадий Петрович'
                        },
                    ]
                }
            }
        },


        data() {
            return {}
        }

    }
</script>

<style>
    table {
        width: 100%;
    }

    tbody > tr {
        border-bottom: 1px solid #E9E9E9;
    }

    table > tbody > tr:last-child {
        border-bottom: none;
    }
    
    caption {
        /*font*/
        text-align: left;
        font-size: 16px;
        line-height: 19px;
        font-style: normal;
    }


    .report-table {
        /*form*/
        padding: 40px;
        overflow: hidden;
        overflow-x: scroll;
        background: #FFFFFF;
        border: 1px dashed #939DA6;
        box-sizing: border-box;
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.15);
    }


</style>