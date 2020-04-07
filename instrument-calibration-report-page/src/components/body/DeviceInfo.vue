<template>
    <div class="notification body-block-device-info" id="body-block-device-info">
        <div class="infoItem"
             v-for="(itemInfo,index) in updateInfo"
             :key="'device_'+index">


            <!--  display the property of the item  -->
            <span class="deviceProp" style="color:gray">{{itemInfo.deviceProperty}}</span>:

            <!--  if itemInfo has property "isCopied" then add clickListener and styles  -->
            <b v-if="itemInfo.isCopied"
               class="propValue"
               @click="copy(itemInfo.value)"
               style="color:#5f9de4;">{{itemInfo.value}}</b>

            <b v-else class="propValue">{{itemInfo.value}}</b>

        </div>
    </div>
</template>

<script>
    export default {
        name: "DeviceInfo",

        props: {

            //
            device: {
                type: Object,
                default: function () {
                    return {
                        typeOfEquipment: 'Весы',
                        workStatus: 'Готов к работе',
                        title: 'Аналитические весы',
                        producer: 'Ohaus',
                        model: 'AX-123',
                        responsibleUnit: 'Группа обслуживания лабораторного оборудования',
                        operationalUnit: 'Химико-аналитическая лаборатория 2.0',
                        MOL: 'Петров Петр Петрович',
                        territory: 'г.Санкт-Петербург(Нойдорф)',
                        serialNumber: 'B715976163',
                        GUID: '508b2a71-662e-4983-ae0c-3cb0c1cd21c5',
                        bimsID: '49db8db1-585f-4b9e-bbf0-8a59698edc8b',
                        tam: 'А-001234',
                    }
                }
            }
        },


        data() {
            return {}
        },


        created() {

        },

        computed: {

            /*
            * change data when a new device arrives
            */
            updateInfo() {
                return [
                    {deviceProperty: 'Тип оборудования', value: this.device.typeOfEquipment},
                    {deviceProperty: 'Статус', value: this.device.workStatus},
                    {deviceProperty: 'Изготовитель', value: this.device.producer},
                    {deviceProperty: 'Модель', value: this.device.model},
                    {deviceProperty: 'Ответственное подразделение (ремонт)', value: this.device.responsibleUnit},
                    {deviceProperty: 'Эксплуатационное подразделение', value: this.device.operationalUnit},
                    {deviceProperty: 'МОЛ', value: this.device.MOL},
                    {deviceProperty: 'Территория', value: this.device.territory},
                    {deviceProperty: 'Серийный номер', value: this.device.serialNumber},
                    {deviceProperty: 'GUID', value: this.device.GUID, isCopied: true},
                    {deviceProperty: 'Bims ID', value: this.device.bimsID, isCopied: true},
                    {deviceProperty: 'Tam', value: this.device.tam, isCopied: true},
                ]
            },
        },


        methods: {

            /*
            * Сopy a device property value to clipboard if it has an 'isCopied'attribute
            */
            copy(code) {
                navigator.clipboard.writeText(code)
                    .then(() => {
                        alert('code was copied ' + code)
                    })
                    .catch(err => {
                        console.log('[ERROR] COPY', err);
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

    .body-block-device-info {
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