<template>
    <tr>


        <!--  DATE  -->
        <th>
            {{data.when.date}}
            <br>
            {{data.when.time}}
        </th>


        <!--   used buffer solution   -->
        <td>
            <div v-for="item in data.usedBufferSolution" :key="item">{{item}}</div>
        </td>


        <!--  slope -->
        <td>
            <div class="">
                {{data.slope}}
                <span v-if="getSlopeState" class="icon " style="color:  #6BAE45;font-size: 16px;"><i
                        class="fas fa-check-circle "></i></span>
                <span v-else class="icon " style="color: #D10000;font-size: 16px;"><i
                        class="fas fa-times-circle"></i></span>
            </div>
        </td>


        <!--   offset   -->
        <td>
            {{data.offset}}
            <span v-if="getOffsetState" class="icon " style="color:  #6BAE45;font-size: 16px;">
                <i class="fas fa-check-circle "></i>
            </span>

            <span v-else class="icon " style="color: #D10000;font-size: 16px;">
                <i class="fas fa-times-circle"></i>
            </span>
        </td>


        <!--        user        -->
        <td>{{data.user}}</td>
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

    tr > td {
        font-size: 13px;
        line-height: 18px;
        padding: 20px 20px 10px 0px;
    }

    tr > th {
        font-size: 16px;
        line-height: 19px;
        font-style: normal;
        font-weight: normal;
        padding: 20px 20px 10px 0px;
    }
</style>