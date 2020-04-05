<template>
    <div class="notification" id="body-block-device-info">
        <div v-for="(infoItem,index) in deviceInfo" :key="'device_'+index">
            <span class="deviceProp" style="color:gray">{{infoItem.deviceProperty}}</span>:
            <b class="propValue" >{{infoItem.value}}</b>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DeviceInfo",

        data() {
            return {
                deviceInfo: [
                    {deviceProperty: 'Тип оборудования', value: 'Весы'},
                    {deviceProperty: 'Статус', value: 'Готов к работе'},
                    {deviceProperty: 'Изготовитель', value: 'Ohaus'},
                    {deviceProperty: 'Модель', value: 'AX-123'},
                    {deviceProperty: 'Ответственное подразделение (ремонт)',value: 'Группа обслуживания лабораторного оборудования'},
                    {deviceProperty: 'Эксплуатационное подразделение', value: 'Химико-аналитическая лаборатория 2.0'},
                    {deviceProperty: 'МОЛ', value: 'Иванов Иван Иванович'},
                    {deviceProperty: 'Территория', value: 'г.Санкт-Петербург(Нойдорф)'},
                    {deviceProperty: 'Серийный номер', value: 'B715976163'},
                    {deviceProperty: 'GUID', value: '508b2a71-662e-4983-ae0c-3cb0c1cd21c5'},
                    {deviceProperty: 'Bims ID', value: '49db8db1-585f-4b9e-bbf0-8a59698edc8b'},
                    {deviceProperty: 'Tam', value: 'А-001234'},
                ]
            }
        }
    }
</script>

<style scoped>


    #body-block-device-info {
        border: 1px solid;
        margin-left: 30px;
        width: 550px;
        height: 330px;
        font-size: 14px;
        font-family: "TT Norms Regular";
        font-style: normal;
        font-weight: 500;
        line-height: 17px;
    }
</style>