<template>
    <tr class="report-body-item">

        <!--  Date  -->
        <th class="report-body-item__date-cell">
            {{data.when.date}}
            <br>
            {{data.when.time}}
        </th>


        <!--   Used buffer solution   -->
        <td class="report-body-item__used-buffer-solution-cell">
            <div style="width: 220px;">
                <div v-for="item in data.usedBufferSolution" :key="item.id">{{item}}</div>
            </div>
        </td>


        <!--  Slope -->
        <td>
            <div class="report-body-item__slope-cell">

                <div class="report-body-item__slope-cell__text">{{data.slope}}</div>

                <span v-if="getSlopeState"
                      class="report-body-item__slope-cell__positive-icon">
                    <i class="fas fa-check-circle "></i>
                </span>
                <span v-else
                      class="report-body-item__slope-cell__negative-icon">
                    <i class="fas fa-times-circle"></i>
                </span>
            </div>
        </td>


        <!--   Offset   -->
        <td>
            <div class="report-body-item__offset-cell">
                <span style="width:50px;">{{data.offset}}</span>

                <span v-if="getOffsetState" style="color:  #6BAE45;font-size: 16px;">
                    <i class="fas fa-check-circle "></i>
                </span>
                <span v-else style="color: #D10000;font-size: 16px;">
                    <i class="fas fa-times-circle"></i>
                </span>
            </div>
        </td>


        <!--        User        -->
        <td class="report-body-item__user-cell">{{data.user}}</td>

    </tr>
</template>

<script>
    export default {
        name: "CalibrationReportBodyItem",


        props: {

            data: {
                type: Object,
                default: function () {
                    return {
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
                        slope: 98.1,
                        offset: -0.3,
                        user: 'Петров Иван Геннадьевич'
                    }
                },
            }

        },


        data() {
            return {}
        },

        computed: {

            //SLOPE VALIDATOR
            getSlopeState() {
                let slope = this.data.slope
                return slope <= 100 && slope >= 95;
            },


            //OFFSET VALIDATOR
            getOffsetState() {
                let offset = this.data.offset
                return offset >= -20 && offset <= 20;
            }
        }
    }

</script>

<style scoped>

    td,th{
        /*form*/
        padding-top: 20px;
        padding-bottom: 20px;
    }

    td{
        /*form*/
        padding-left: 20px;
        /*font*/
        font-size: 13px;
        line-height: 15px;
    }

    th{
        /*font*/
        font-weight: normal;
    }

    .report-body-item__slope-cell,
    .report-body-item__offset-cell {
        /*form*/
        display: flex;
        flex-direction: row;
        align-items: center
    }

    .report-body-item__used-buffer-solution-cell{
      /*font*/
        line-height: 17px;
    }

    .report-body-item__slope-cell__text {
        /*form*/
        width: 50px;
    }

    .report-body-item__slope-cell__positive-icon {
        /*font*/
        color: #6BAE45;
        font-size: 16px;
    }

    .report-body-item__slope-cell__negative-icon {
        /*font*/
        color: #D10000;
        font-size: 16px;
    }
</style>