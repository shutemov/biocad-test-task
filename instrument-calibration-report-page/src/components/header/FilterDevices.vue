<template>
    <div class="filter-devices">
        <div style="text-align: start;">
            <span id="filter-devices-title">Enter inventory number, guid or bims id</span>
        </div>

        <div class="field" id="filter-devices-input">
            <div class="control">
                <input class="input is-small" type="text" placeholder="Input ID" v-model="deviceId">
            </div>
            <button class="button is-dark" @click="search(deviceId)">Search</button>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import {SEARCH_DEVICE_BY_ID} from "@/store/actions";

    export default {
        name: "FilterDevices",


        data() {
            return {
                deviceId: undefined,
            }
        },


        computed: {
            ...mapGetters(['getFoundDevice']),
            check() {
                return this.getFoundDevice
            }
        },


        methods: {
            ...mapActions([SEARCH_DEVICE_BY_ID]),

            search(deviceId) {
                console.log('[method] search', deviceId)
                this[SEARCH_DEVICE_BY_ID](deviceId)
                this.deviceId = ""
            }
        }

    }
</script>

<style scoped>
    .filter-devices {
        /*border: 1px solid;*/
        width: 320px;
        height: 90px;
        /*margin-top: 30px;*/
        /*margin-left: 50px;*/
    }

    #filter-devices-title {
        height: 24px;

        /* Subheading Mobile */


        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;

        /* identical to box height, or 150% */

        letter-spacing: 0.16px;
        font-feature-settings: 'pnum' on, 'lnum' on;

        /* 8C8C8C */

        color: #8C8C8C;
    }


    .filter-devices button {
        width: 90px;
        height: 40px;
        border-radius: 0
    }

    #filter-devices-input {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;
    }

    #filter-devices-input input {
        width: 210px;
        height: 30px;
    }
</style>