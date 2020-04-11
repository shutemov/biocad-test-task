<template>
    <tr class="report-body-item">

        <!--  Date  -->
        <th class="report-body-item__th">
            <span class="date-cell">
                   {{data.when.date}}
                    <br>
                   {{data.when.time}}
            </span>
        </th>


        <!--   Used buffer solution   -->
        <td class="report-body-item__td">
            <div class="used-buffer-solution-cell">
                <span class="used-buffer-solution-cell__text" v-for="item in data.usedBufferSolution" :key="item.id">{{item}}<br></span>
            </div>
        </td>


        <!--  Slope -->
        <td class="report-body-item__td">
            <div class="slope-cell">

                <div class="report-body-item__text">{{data.slope}}</div>

                <span v-if="getSlopeState" class="report-body-item__icon positive-icon">
                    <i class="fas fa-check-circle "></i>
                 </span>
                <span v-else class="report-body-item__icon negative-icon">
                    <i class="fas fa-times-circle"></i>
                </span>

            </div>
        </td>


        <!--   Offset   -->
        <td class="report-body-item__td">
            <div class="offset-cell">
                <div class="report-body-item__text ">{{data.offset}}</div>

                <span v-if="getOffsetState" class="positive-icon">
                    <i class="fas fa-check-circle "></i>
                </span>
                <span v-else class="negative-icon">
                    <i class="fas fa-times-circle"></i>
                </span>
            </div>
        </td>


        <!--        User        -->
        <td class="report-body-item__td">
            <span class="user-cell">{{data.user}}</span>
        </td>

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

    .report-body-item{
        border-bottom: 1px solid #E9E9E9;
        vertical-align: top;
    }

    .report-body-item:last-child {
        border-bottom: none;
    }

    .report-body-item__td {
        font-size: 13px;
        line-height: 15px;
        letter-spacing: 0.3px;
    }

    .report-body-item__th,
    .report-body-item__td {
        height: auto;
        padding-top: 22px;
        padding-bottom: 13px;
    }

    .report-body-item__th {
        width: 117px;
        font-weight: normal;
    }

    .date-cell {
        letter-spacing: 0.9px;
    }

    .slope-cell {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 96px;
    }

    .offset-cell {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 114px;
    }

    .used-buffer-solution-cell {
        width: 200px;
    }

    .user-cell {
        /*width: 300px;*/
    }

    .used-buffer-solution-cell__text {
        line-height: 17px;
        letter-spacing: 0.1px;
    }

    .report-body-item__text {
        width: 50px;
    }

    .positive-icon {
        color: #6BAE45;
        font-size: 16px;
    }

    .negative-icon {
        color: #D10000;
        font-size: 16px;
    }


</style>