import {SEARCH_DEVICE_ITEM_BY_ID} from '../actions'
import {SET_FOUND_DEVICE} from "@/store/mutations";
// import {SET_FOUND_DEVICE} from '../mutations'


const state = {
    devices: [
        {
            id: 0,
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
        },
        {
            id: 1,
            typeOfEquipment: 'Весы',
            workStatus: 'Готов к работе',
            title: 'Аналитические весы',
            producer: 'Ohaus',
            model: 'AX-123',
            responsibleUnit: 'Группа обслуживания лабораторного оборудования',
            operationalUnit: 'Химико-аналитическая лаборатория 2.0',
            MOL: 'Иванов1 Иван1 Иванович1',
            territory: 'г.Санкт-Петербург(Нойдорф)',
            serialNumber: 'B715976163',
            GUID: '508b2a71-662e-4983-ae0c-3cb0c1cd21c51',
            bimsID: '49db8db1-585f-4b9e-bbf0-8a59698edc8b1',
            tam: 'А-0012341',
        }
    ],


    foundDevice: undefined,

}

const getters = {

    getFoundDevice: state => state.foundDevice

}

const actions = {

    [SEARCH_DEVICE_ITEM_BY_ID]({commit, state}, deviceId) {
        const deviceCandidate = state.devices.find(device => {
            return device.GUID === deviceId || device.bimsID === deviceId || device.tam === deviceId;
        })

        if (deviceCandidate) {
            commit(SET_FOUND_DEVICE, deviceCandidate)
        }
    }
}

const mutations = {
    [SET_FOUND_DEVICE](state, device) {
        state.foundDevice = device
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}