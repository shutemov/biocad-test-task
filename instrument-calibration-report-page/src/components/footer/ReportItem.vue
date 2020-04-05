<template>
    <tr>


        <!--        DATE        -->
        <th>
            {{mockData.date.date}}
            <br>
            {{mockData.date.time}}
        </th>


        <!--        used buffer solution        -->
        <td>
            <div v-for="item in mockData.usedBufferSolution" :key="item">{{item}}</div>
        </td>


        <!--        slope      (todo will out to computed prop ICON ) -->
        <td>
            <div class="">
                {{mockData.slope}}
                <span v-if="getSlopeState" class="icon " style="color:  #6BAE45;font-size: 16px;"><i
                        class="fas fa-check-circle "></i></span>
                <span v-else class="icon " style="color: #D10000;font-size: 16px;"><i
                        class="fas fa-times-circle"></i></span>
            </div>
        </td>


        <!--        offset      -->
        <td>
            {{mockData.offset}}
            <span v-if="getOffsetState" class="icon " style="color:  #6BAE45;font-size: 16px;"><i
                    class="fas fa-check-circle "></i></span>
            <span v-else class="icon " style="color: #D10000;font-size: 16px;"><i
                    class="fas fa-times-circle"></i></span>
        </td>


        <!--        user        -->
        <td>{{mockData.user}}</td>
    </tr>
</template>

<script>
    export default {
        name: "ReportItem",


        data() {
            return {
                mockData: {
                    date: {
                        date: '04.10.19',
                        time: '10:23'
                    },
                    usedBufferSolution: [
                        'В1: № 2000460789536: pH 1.09',
                        'В2: № 2000460789536: pH 2.00',
                        'В3: № 2000460789536: pH 4.01',
                        'В4: № 2000460789536: pH 7.00',
                        'В5: № 2000460789536: pH 9.21'
                    ],
                    slope: 98.1,
                    offset: -0.3,
                    user: 'Петров Иван Геннадьевич'
                }
            }
        },

        computed: {
            getSlopeState() {
                let slope = this.mockData.slope
                return slope <= 100 && slope >= 95;
            },

            getOffsetState() {
                let offset = this.mockData.offset
                return offset >= -20 && offset <= 20;
            }
        }
    }

</script>

<style scoped>

    tr > td {
        font-size: 13px;
        line-height: 18px;
        padding: 20px 20px 10px 20px;
    }

    tr > th {
        font-size: 16px;
        line-height: 19px;
        font-style: normal;
        font-weight: normal;
        padding: 20px 20px 10px 0px;
    }
</style>