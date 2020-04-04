<template>
    <div class="notification" id="body-block-device-info">
        <div v-for="(item,index) in 12" :key="'item_'+index">{{index}}</div>
    </div>
</template>

<script>
    export default {
        name: "DeviceInfo",

        data(){
            return{
          
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
    }
</style>