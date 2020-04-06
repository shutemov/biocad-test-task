<template>
    <div class="notification" id="body-block-device-info">
        <div class="infoItem" v-for="(infoItem,index) in updateInfo" :key="'device_'+index">
            <span class="deviceProp" style="color:gray">{{infoItem.deviceProperty}}</span>:

            <b v-if="infoItem.isCopied"
               class="propValue"
               @click="copy(infoItem.value)"
               style="color:#5f9de4;">{{infoItem.value}}</b>

            <b v-else class="propValue">{{infoItem.value}}</b>

        </div>
    </div>
</template>

<script>
    export default {
        name: "DeviceInfo",

        props: {
            device: {
                type: Object,
                default: function () {
                    return {
                        typeOfEquipment: 'Undefined',
                        workStatus: 'Undefined',
                        title: 'Undefined',
                        producer: 'Undefined',
                        model: 'Undefined',
                        responsibleUnit: 'Undefined',
                        operationalUnit: 'Undefined',
                        MOL: 'Undefined',
                        territory: 'Undefined',
                        serialNumber: 'Undefined',
                        GUID: '508b2a71-662e-4983-ae0c-3cb0c1cd21c5',
                        bimsID: 'Undefined',
                        tam: 'Undefined',
                    }
                }
            }
        },

        data() {
            return {
                // deviceInfo: this.updateInfo
            }
        },


        computed: {
            updateInfo() {

                return [...
                    [
                        {deviceProperty: 'Тип оборудования', value: this.device.typeOfEquipment},
                        {deviceProperty: 'Статус', value: this.device.workStatus},
                        {deviceProperty: 'Изготовитель', value: this.device.producer},
                        {deviceProperty: 'Модель', value: this.device.model},
                        {
                            deviceProperty: 'Ответственное подразделение (ремонт)', value: this.device.responsibleUnit
                        },
                        {deviceProperty: 'Эксплуатационное подразделение', value: this.device.operationalUnit},
                        {deviceProperty: 'МОЛ', value: this.device.MOL},
                        {deviceProperty: 'Территория', value: this.device.territory},
                        {deviceProperty: 'Серийный номер', value: this.device.serialNumber},
                        {deviceProperty: 'GUID', value: this.device.GUID, isCopied: true},
                        {deviceProperty: 'Bims ID', value: this.device.bimsID, isCopied: true},
                        {deviceProperty: 'Tam', value: this.device.tam, isCopied: true},
                    ]
                ]
            }
        },


        methods: {
            copy(code) {
                console.log(code)
                navigator.clipboard.writeText(code)
                    .then(() => {
                        alert('code was copied ' + code)
                    })
                    .catch(err => {
                        console.log('Something went wrong', err);
                    });
            }
        }
    }
</script>

<style scoped>
    .infoItem {
        margin-top: 5px;
    }

    .infoItem:first-child {
        margin-top: 0px;
    }

    #body-block-device-info {
        /*border: 1px solid;*/
        /*margin-left: 30px;*/
        /*width: 550px;*/
        height: auto;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 17px;
    }
</style>