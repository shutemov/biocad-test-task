<template>
    <div id="report-filter">
        <div class="select">
            <select style="width: 220px;">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
            </select>
        </div>


        <div class="field" style="display: flex;flex-direction: column;margin-top: 10px;">
            <div class="field">
                <input class="is-checkradio is-info" id="exampleRadioNormal" type="radio"
                       name="exampleRadioNormal"
                       checked="checked">
                <label for="exampleRadioNormal">Calibration</label>
            </div>
            <div class="field">
                <input class="is-checkradio is-info" id="exampleRadioNormal1" type="radio"
                       name="exampleRadioNormal"
                       checked="checked">
                <label for="exampleRadioNormal1">Measuring</label>
            </div>

            <div class="field">
                <input class="is-checkradio is-info" id="exampleRadioNormal2" type="radio"
                       name="exampleRadioNormal"
                       checked="checked">
                <label for="exampleRadioNormal2">Using</label>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "ReportFilters"
    }
</script>

<style scoped>
    #report-filter{
        margin-top: 30px;
    }
</style>