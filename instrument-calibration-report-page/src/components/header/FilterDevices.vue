<template>
    <div class="filter-devices">
        <div class="filter-devices__title" style="text-align: start;">
            <span class="filter-devices__text">Enter inventory number, guid or bims id</span>
        </div>

        <div class="filter-devices__search">

            <input class="filter-devices__input" type="text" placeholder="Input ID" v-model="deviceId">

            <button class="filter-devices__button" @click="search(deviceId)">Search</button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    import {SEARCH_DEVICE_BY_ID} from "@/store/actions";

    export default {
        name: "FilterDevices",


        data() {
            return {
                deviceId: undefined,
            }
        },


        methods: {
            ...mapActions([SEARCH_DEVICE_BY_ID]),

            search(deviceId) {

                if (!deviceId) {
                    alert('You did not enter device ID')
                    return
                }

                this[SEARCH_DEVICE_BY_ID](deviceId)
            }
        }

    }
</script>

<style scoped>

    .filter-devices {
        /*form*/
        width: 320px;
        height: 90px;
    }

    .filter-devices__search {
        /*form*/
        margin-top: 16px;
    }

    .filter-devices__input {
        /*form*/
        width: 210px;
        height: 30px;
        background: #FFFFFF;
        border: 1px solid #E9E9E9;
        box-sizing: border-box;

    }

    .filter-devices__button {
        /*form*/
        width: 90px;
        height: 40px;
        background: #353535;
        border: none;
        margin-left: 20px;

        /*font*/
        font-family: "TT Norms Regular";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: white;
    }

    .filter-devices__text {
        /*form*/
        height: 24px;

        /*font*/
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.16px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #8C8C8C;
    }


</style>