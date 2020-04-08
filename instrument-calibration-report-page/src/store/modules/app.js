import {SEARCH_DEVICE_BY_ID} from '../actions'
import {SET_FOUND_DEVICE, SET_REPORT_TYPE} from "@/store/mutations";


const state = {

    //Mock devices
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
            MOL: 'Петров Иван Генадьевич',
            territory: 'г.Санкт-Петербург(Нойдорф)',
            serialNumber: 'B715976163',
            GUID: '0000-0000-0000-0000-0000',
            bimsID: '1111-1111-1111-1111-1111',
            tam: 'А-0000000',
        }
    ],

    // Mock calibration type data
    calibrationCase: {

        headReportTableData: [
            'Data',
            'Used Buffer Solution',
            'Slope, % <br> Norm 95-100',
            'Offset, mV <br> Norm ± (0-20)',
            'User',
        ],

        bodyReportTableData: [
            {
                when: {
                    date: '04.10.19',
                    time: '10:23'
                },
                usedBufferSolution: [
                    'В1: № 2000460789536: pH 1.09',
                    'В2: № 2000460789536: pH 2.00',
                    'В3: № 2000460789536: pH 4.01',
                    'В4: № 2000460789536: pH 7.00',
                    'В5: № 2000460789536: pH 9.21',
                ],
                slope: 98.1,
                offset: -0.3,
                user: 'Иванов Генадий Петрович'
            },
            {
                when: {
                    date: '04.10.19',
                    time: '10:23'
                },
                usedBufferSolution: [
                    'В1: № 2000460789536: pH 1.09',
                    'В2: № 2000460789536: pH 2.00',
                    'В3: № 2000460789536: pH 4.01',
                    'В4: № 2000460789536: pH 7.00',
                    'В5: № 2000460789536: pH 9.21',
                ],
                slope: 96,
                offset: -0.3,
                user: 'Петров Иван Генадьевич'
            },
            {
                when: {
                    date: '04.10.19',
                    time: '10:23'
                },
                usedBufferSolution: [
                    'В1: № 2000460789536: pH 1.09',
                    'В2: № 2000460789536: pH 2.00',
                    'В3: № 2000460789536: pH 4.01',
                    'В4: № 2000460789536: pH 7.00',
                    'В5: № 2000460789536: pH 9.21',
                ],
                slope: 96,
                offset: -0.3,
                user: 'Петров Генадий Иванович '
            },
            {
                when: {
                    date: '04.10.19',
                    time: '10:23'
                },
                usedBufferSolution: [
                    'В1: № 2000460789536: pH 1.09',
                    'В2: № 2000460789536: pH 2.00',
                    'В3: № 2000460789536: pH 4.01',
                    'В4: № 2000460789536: pH 7.00',
                    'В5: № 2000460789536: pH 9.21',
                ],
                slope: 90.1,
                offset: -0.3,
                user: 'Генадьев Иван Петрович'
            }
        ]

    },

    // Mock unit name component data
    unitName: {
        title: 'Аналитические весы OHAUS Adventurer АХ324 (B715976163)'
    },

    // Value is assigned by mutation [SET_FOUND_DEVICE]
    foundDevice: undefined,

    // Value is assigned by mutation [SET_REPORT_TYPE]
    reportType: undefined,

}

const getters = {

    getFoundDevice: state => state.foundDevice,

    getReportType: state => state.reportType,

    getHeadReportTableData: state => state.calibrationCase.headReportTableData,

    getBodyReportTableData: state => state.calibrationCase.bodyReportTableData,

    getUnitNameData: state => state.unitName.title,

}

const actions = {

    /*
    * SEARCH DEVICE IN DB BY 'GUID', 'BimsID', 'Tam'
    */
    [SEARCH_DEVICE_BY_ID]({commit, state}, deviceId) {

        const deviceCandidate = state.devices.find(device => {
            return device.GUID === deviceId || device.bimsID === deviceId || device.tam === deviceId;
        })

        if (deviceCandidate) {
            commit(SET_FOUND_DEVICE, deviceCandidate)
        }
    }
}

const mutations = {

    /*
    * SET DEVICE IF HE FOUND IN DB
    */
    [SET_FOUND_DEVICE](state, device) {
        state.foundDevice = device
    },

    /*
    * SET SELECTED REPORT TYPE
    */
    [SET_REPORT_TYPE](state, reportType) {
        state.reportType = reportType
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}