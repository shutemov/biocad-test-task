<template>
    <div class="device-info">
        <div class="device-info__item" v-for="itemInfo in updateInfo" :key="itemInfo.id">

            <span class="device-info__property">{{itemInfo.deviceProperty}}</span>:

            <b v-if="itemInfo.isCopied"
               class="device-info__property-value_is-copied"
               @click="copy(itemInfo.value)"
            >{{itemInfo.value}}</b>

            <b v-else class="device-info__property-value">{{itemInfo.value}}</b>

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
                        typeOfEquipment: 'Весы',
                        workStatus: 'Готов к работе',
                        title: 'Аналитические весы',
                        producer: 'Ohaus',
                        model: 'AX-123',
                        responsibleUnit: 'Группа обслуживания лабораторного оборудования',
                        operationalUnit: 'Химико-аналитическая лаборатория 2.0',
                        MOL: 'Иванов Иван Иванович',
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
                        console.log('Code was copied ' + code)
                    })
                    .catch(err => {
                        console.log('[ERROR] COPY', err);
                    });
            }
        }
    }
</script>

<style scoped>

    /*Analog line-height*/

    .device-info__item {
        /*form*/
        margin-top: 5px;
        letter-spacing: 0.25px;
        text-align: left;
    }

    .device-info__item:first-child {
        /*form*/
        margin-top: 0px;
    }

    /*------------------*/

    .device-info {
        /*form*/
        box-sizing: border-box;
        padding: 20px 18px 20px 18px;
        width: 550px;
        height: 100%;
        background-color: #F7F7F7;
        border-radius: 5px;

        /*font*/
        font-size: 14px;
        font-style: normal;
        line-height: 17px;
    }

    .device-info__property {
        color: #8c8c8c;
        font-weight: lighter;
        letter-spacing: 0.2px;
    }

    .device-info__property-value {
        color: #444651;
    }

    .device-info__property-value_is-copied {
        cursor: pointer;
        color: #5f9de4;
    }

    @media screen and (max-width: 700px) {

        /*  Analog line-height  */
        .device-info__item {
            margin-top: 6px;
        }

        .device-info__item:first-child {
            margin-top: 0px;
        }

        /*  ------------------  */
        .device-info {
            width: 100%;
            height: auto;
        }
    }
</style>