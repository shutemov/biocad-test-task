(function(t){function e(e){for(var r,n,s=e[0],l=e[1],c=e[2],d=0,u=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(r=!1)}r&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},i={index:0},o=[];function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0160":function(t,e,a){},"034f":function(t,e,a){"use strict";var r=a("85ec"),i=a.n(r);i.a},"340d":function(t,e,a){"use strict";var r=a("5e36"),i=a.n(r);i.a},"429d":function(t,e,a){},"443c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r,i=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("insrument-calibration-report")],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container"},[a("div",{staticClass:"head"},[a("filter-devices",{staticClass:"filter-devices"})],1),a("div",{staticClass:"body"},[a("div",{staticClass:"left-side "},[a("div",{staticClass:"left-side__content"},[a("unit-name",{attrs:{title:this.unitNameTitle}}),a("report-filters",{staticClass:"report-filter"})],1),a("button",{staticClass:"generate-button",on:{click:t.generate}},[t._v(" Generate report ")])]),a("div",{staticClass:"right-side"},[a("device-info",{staticClass:"device-info",attrs:{device:t.getDevice}})],1)]),a("div",{staticClass:"footer-block"},[a("report-table",{attrs:{title:t.reportTable.reportType,"t-head":t.reportTable.tHeadReportTableData,"t-body":t.reportTable.tBodyReportTableData}})],1)])},l=[],c=a("2909"),p=a("5530"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-devices"},[t._m(0),a("div",{staticClass:"filter-devices__search"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.deviceId,expression:"deviceId"}],staticClass:"filter-devices__input",attrs:{type:"text",placeholder:"Input ID"},domProps:{value:t.deviceId},on:{input:function(e){e.target.composing||(t.deviceId=e.target.value)}}}),a("button",{staticClass:"filter-devices__button",on:{click:function(e){return t.search(t.deviceId)}}},[t._v("Search")])])])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-devices__title"},[a("span",{staticClass:"filter-devices__text"},[t._v("Enter inventory number, guid or bims id")])])}],f=a("2f62"),v="SEARCH_DEVICE_BY_ID",b={name:"FilterDevices",data:function(){return{deviceId:void 0}},methods:Object(p["a"])({},Object(f["b"])([v]),{search:function(t){t?this[v](t):alert("You did not enter device ID")}})},m=b,h=(a("957a"),a("2877")),y=Object(h["a"])(m,d,u,!1,null,"033f8f24",null),C=y.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"unit-name"},[a("svg",{attrs:{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("g",{attrs:{"clip-path":"url(#clip0)"}},[a("path",{attrs:{d:"M22.3506 10.0006C21.8935 10.0006 21.5228 9.62745 21.5228 9.16724V5.83414C21.5228 5.37393 21.8935 5.00082 22.3506 5.00082C22.8078 5.00082 23.1784 5.37393 23.1784 5.83414V9.16732C23.1783 9.62745 22.8078 10.0006 22.3506 10.0006Z",fill:"#FFA000"}}),a("path",{attrs:{d:"M22.3506 6.66736C23.7221 6.66736 24.8339 5.54813 24.8339 4.1675C24.8339 2.78686 23.7221 1.66763 22.3506 1.66763C20.9791 1.66763 19.8673 2.78686 19.8673 4.1675C19.8673 5.54813 20.9791 6.66736 22.3506 6.66736Z",fill:"#FFC107"}}),a("path",{attrs:{d:"M19.0395 8.33398H25.6617C26.1188 8.33398 26.4894 8.70709 26.4894 9.1673V20.8333C26.4894 21.2935 26.1188 21.6666 25.6617 21.6666H19.0395C18.5824 21.6666 18.2117 21.2935 18.2117 20.8333V9.16722C18.2117 8.70701 18.5824 8.33398 19.0395 8.33398Z",fill:"#FFD54F"}}),a("path",{attrs:{d:"M35.2042 21.6666H4.53041C2.96135 21.6716 1.52576 20.7784 0.82865 19.3633L0.0886247 17.8718C-0.115705 17.4599 0.0502887 16.9592 0.459491 16.7535C0.868616 16.5478 1.36598 16.7149 1.57038 17.1268L2.31041 18.6184C2.72885 19.4668 3.58954 20.0023 4.53049 19.9999H35.2043C36.1459 20.003 37.0073 19.4672 37.426 18.6184L38.166 17.1268C38.3704 16.7149 38.8677 16.5478 39.2769 16.7535C39.6861 16.9591 39.8521 17.4598 39.6478 17.8718L38.9078 19.3633C38.2102 20.779 36.7739 21.6723 35.2042 21.6666Z",fill:"#CFD8DC"}}),a("path",{attrs:{d:"M7.45078 24.9997C6.99362 24.9997 6.62299 24.6266 6.62299 24.1664V20.8332C6.62299 20.373 6.99362 19.9999 7.45078 19.9999C7.90794 19.9999 8.27858 20.373 8.27858 20.8332V24.1664C8.2785 24.6266 7.90794 24.9997 7.45078 24.9997Z",fill:"#CFD8DC"}}),a("path",{attrs:{d:"M32.2838 24.9997C31.8267 24.9997 31.4561 24.6266 31.4561 24.1664V20.8332C31.4561 20.373 31.8267 19.9999 32.2838 19.9999C32.741 19.9999 33.1116 20.373 33.1116 20.8332V24.1664C33.1115 24.6266 32.741 24.9997 32.2838 24.9997Z",fill:"#CFD8DC"}}),a("path",{attrs:{d:"M39.651 24.5331L36.522 30.8328H3.21254L0.0835735 24.5331C-0.0386518 24.2776 -0.0262353 23.9775 0.11671 23.7332C0.272305 23.488 0.539649 23.3378 0.828566 23.3332H38.906C39.1949 23.3378 39.4623 23.488 39.6178 23.7332C39.7608 23.9775 39.7732 24.2776 39.651 24.5331Z",fill:"#607D8B"}}),a("path",{attrs:{d:"M39.6178 37.9324C39.4622 38.1775 39.1949 38.3277 38.906 38.3324H0.828566C0.539649 38.3277 0.272227 38.1775 0.11671 37.9324C-0.0262353 37.688 -0.0386518 37.388 0.0835735 37.1324L3.21254 30.8328H36.522L39.651 37.1324C39.7732 37.388 39.7608 37.6879 39.6178 37.9324Z",fill:"#455A64"}}),a("path",{attrs:{d:"M17.384 34.9992H5.79517C5.33801 34.9992 4.96738 34.6261 4.96738 34.1659C4.96738 33.7057 5.33801 33.3326 5.79517 33.3326H17.3839C17.8411 33.3326 18.2117 33.7057 18.2117 34.1659C18.2117 34.6261 17.8412 34.9992 17.384 34.9992Z",fill:"#B0BEC5"}}),a("path",{attrs:{d:"M24.0061 34.9992H22.3506C21.8934 34.9992 21.5228 34.6261 21.5228 34.1659C21.5228 33.7057 21.8934 33.3326 22.3506 33.3326H24.0061C24.4633 33.3326 24.8339 33.7057 24.8339 34.1659C24.8339 34.6261 24.4633 34.9992 24.0061 34.9992Z",fill:"#B0BEC5"}}),a("path",{attrs:{d:"M28.9727 34.9992H27.3172C26.86 34.9992 26.4894 34.6261 26.4894 34.1659C26.4894 33.7057 26.86 33.3326 27.3172 33.3326H28.9727C29.4299 33.3326 29.8005 33.7057 29.8005 34.1659C29.8005 34.6261 29.4299 34.9992 28.9727 34.9992Z",fill:"#B0BEC5"}}),a("path",{attrs:{d:"M33.9394 34.9992H32.2838C31.8267 34.9992 31.4561 34.6261 31.4561 34.1659C31.4561 33.7057 31.8267 33.3326 32.2838 33.3326H33.9394C34.3965 33.3326 34.7672 33.7057 34.7672 34.1659C34.7672 34.6261 34.3965 34.9992 33.9394 34.9992Z",fill:"#B0BEC5"}})]),a("defs",[a("clipPath",{attrs:{id:"clip0"}},[a("rect",{attrs:{width:"39.7351",height:"40",fill:"white"}})])])]),a("div",{staticClass:"device-title"},[t._v(" "+t._s(this.title)+" ")]),a("div",{staticClass:"info-tooltip"},[a("span",{staticClass:"has-tooltip-right",staticStyle:{"font-size":"22px",color:"#535353"},attrs:{"data-tooltip":this.tooltipData}},[a("i",{staticClass:"fas fa-info-circle"})])])])},g=[],T={name:"UnitName",props:{title:{type:String,default:function(){return"You can find unit by ID"}},tooltipData:{type:String,default:function(){return"You can copy the blue code of the device just by clicking on it!"}}}},H=T,D=(a("8526"),Object(h["a"])(H,_,g,!1,null,"76e4f7a2",null)),O=D.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"report-filter"},[t._m(0),a("div",{staticClass:"report-filter__checkradio",staticStyle:{display:"flex","flex-direction":"column","margin-top":"10px"}},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.reportType,expression:"reportType"}],attrs:{id:"calibrationRadio",type:"radio",name:"reportTypeRadio",value:"Calibration",checked:"checked"},domProps:{checked:t._q(t.reportType,"Calibration")},on:{change:[function(e){t.reportType="Calibration"},t.setReportType]}}),a("label",{attrs:{for:"calibrationRadio"}},[t._v("Calibration")])]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.reportType,expression:"reportType"}],staticClass:"is-checkradio is-info",attrs:{id:"measuringRadio",type:"radio",name:"reportTypeRadio",value:"Measuring"},domProps:{checked:t._q(t.reportType,"Measuring")},on:{change:[function(e){t.reportType="Measuring"},t.setReportType]}}),a("label",{attrs:{for:"measuringRadio"}},[t._v("Measuring")])]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.reportType,expression:"reportType"}],staticClass:"is-checkradio is-info",attrs:{id:"usingRadio",type:"radio",name:"reportTypeRadio",value:"Using"},domProps:{checked:t._q(t.reportType,"Using")},on:{change:[function(e){t.reportType="Using"},t.setReportType]}}),a("label",{attrs:{for:"usingRadio"}},[t._v("Using")])])])])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("select",{staticClass:"report-filter__select"},[a("option",[t._v("1 day")]),a("option",{attrs:{selected:""}},[t._v("1 mounth")]),a("option",[t._v("6 mounth")]),a("option",[t._v("1 year")])])}],w="SET_FOUND_DEVICE",B="SET_REPORT_TYPE",j={name:"ReportFilters",data:function(){return{reportType:void 0}},methods:Object(p["a"])({},Object(f["d"])([B]),{setReportType:function(){console.log(this.reportType),this[B](this.reportType)}})},x=j,I=(a("ceb1"),Object(h["a"])(x,R,S,!1,null,"369996a1",null)),E=I.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"device-info"},t._l(t.updateInfo,(function(e){return a("div",{key:e.id,staticClass:"infoItem"},[a("span",{staticClass:"deviceProp",staticStyle:{color:"gray"}},[t._v(t._s(e.deviceProperty))]),t._v(": "),e.isCopied?a("b",{staticClass:"propValue",staticStyle:{color:"#5f9de4"},on:{click:function(a){return t.copy(e.value)}}},[t._v(t._s(e.value))]):a("b",{staticClass:"propValue"},[t._v(t._s(e.value))])])})),0)},U=[],k={name:"DeviceInfo",props:{device:{type:Object,default:function(){return{typeOfEquipment:"Весы",workStatus:"Готов к работе",title:"Аналитические весы",producer:"Ohaus",model:"AX-123",responsibleUnit:"Группа обслуживания лабораторного оборудования",operationalUnit:"Химико-аналитическая лаборатория 2.0",MOL:"Петров Петр Петрович",territory:"г.Санкт-Петербург(Нойдорф)",serialNumber:"B715976163",GUID:"508b2a71-662e-4983-ae0c-3cb0c1cd21c5",bimsID:"49db8db1-585f-4b9e-bbf0-8a59698edc8b",tam:"А-001234"}}}},data:function(){return{}},computed:{updateInfo:function(){return[{deviceProperty:"Тип оборудования",value:this.device.typeOfEquipment},{deviceProperty:"Статус",value:this.device.workStatus},{deviceProperty:"Изготовитель",value:this.device.producer},{deviceProperty:"Модель",value:this.device.model},{deviceProperty:"Ответственное подразделение (ремонт)",value:this.device.responsibleUnit},{deviceProperty:"Эксплуатационное подразделение",value:this.device.operationalUnit},{deviceProperty:"МОЛ",value:this.device.MOL},{deviceProperty:"Территория",value:this.device.territory},{deviceProperty:"Серийный номер",value:this.device.serialNumber},{deviceProperty:"GUID",value:this.device.GUID,isCopied:!0},{deviceProperty:"Bims ID",value:this.device.bimsID,isCopied:!0},{deviceProperty:"Tam",value:this.device.tam,isCopied:!0}]}},methods:{copy:function(t){navigator.clipboard.writeText(t).then((function(){alert("Code was copied "+t)})).catch((function(t){console.log("[ERROR] COPY",t)}))}}},M=k,N=(a("340d"),Object(h["a"])(M,P,U,!1,null,"0880eb8c",null)),F=N.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"report"},[a("table",{staticClass:"report-table__table"},[a("caption",{staticClass:"report-table__caption"},[a("b",[t._v(t._s(t.title))])]),a("thead",{staticClass:"report-table__thead"},[a("calibration-report-table-head",{attrs:{"t-head-data":this.tHead}})],1),a("tbody",{staticClass:"report-table__tbody"},t._l(this.tBody,(function(t){return a("calibration-report-table-body-item",{key:t.id,attrs:{data:t}})})),1)])])},$=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"report-body-item"},[a("th",{staticClass:"report-body-item__date-cell"},[t._v(" "+t._s(t.data.when.date)+" "),a("br"),t._v(" "+t._s(t.data.when.time)+" ")]),a("td",{staticClass:"report-body-item__used-buffer-solution-cell"},[a("div",{staticStyle:{width:"220px"}},t._l(t.data.usedBufferSolution,(function(e){return a("div",{key:e.id},[t._v(t._s(e))])})),0)]),a("td",[a("div",{staticClass:"report-body-item__slope-cell"},[a("div",{staticClass:"report-body-item__slope-cell__text"},[t._v(t._s(t.data.slope))]),t.getSlopeState?a("span",{staticClass:"report-body-item__slope-cell__positive-icon"},[a("i",{staticClass:"fas fa-check-circle "})]):a("span",{staticClass:"report-body-item__slope-cell__negative-icon"},[a("i",{staticClass:"fas fa-times-circle"})])])]),a("td",[a("div",{staticClass:"report-body-item__offset-cell"},[a("span",{staticStyle:{width:"50px"}},[t._v(t._s(t.data.offset))]),t.getOffsetState?a("span",{staticStyle:{color:"#6BAE45","font-size":"16px"}},[a("i",{staticClass:"fas fa-check-circle "})]):a("span",{staticStyle:{color:"#D10000","font-size":"16px"}},[a("i",{staticClass:"fas fa-times-circle"})])])]),a("td",{staticClass:"report-body-item__user-cell"},[t._v(t._s(t.data.user))])])},L=[],Z={name:"CalibrationReportBodyItem",props:{data:{type:Object,default:function(){return{when:{date:"04.10.19",time:"10:23"},usedBufferSolution:["В1: № 2000460789536: pH 1.09","В2: № 2000460789536: pH 2.00","В3: № 2000460789536: pH 4.01","В4: № 2000460789536: pH 7.00","В5: № 2000460789536: pH 9.21"],slope:98.1,offset:-.3,user:"Петров Иван Геннадьевич"}}}},data:function(){return{}},computed:{getSlopeState:function(){var t=this.data.slope;return t<=100&&t>=95},getOffsetState:function(){var t=this.data.offset;return t>=-20&&t<=20}}},q=Z,G=(a("71b9"),Object(h["a"])(q,A,L,!1,null,"95e96da8",null)),Y=G.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"report-header-item"},t._l(this.tHeadData,(function(e){return a("th",{key:e.id,staticClass:"report-header-item__content",domProps:{innerHTML:t._s(e)}})})),0)},X=[],J={name:"CalibrationReportTableHead",props:{tHeadData:{type:Array,default:function(){return["Data","Used Buffer Solution","Slope, % <br> Norm 95-100","Offset, mV <br> Norm ± (0-20)","User"]}}}},K=J,Q=(a("5bba"),Object(h["a"])(K,z,X,!1,null,"41ff757f",null)),W=Q.exports,tt={name:"ReportTable",components:{calibrationReportTableBodyItem:Y,calibrationReportTableHead:W},props:{title:{type:String,required:!0,default:function(){return"Calibration report"}},tHead:{type:Array,default:function(){return["Data","Used Buffer Solution","Slope, % <br> Norm 95-100","Offset, mV <br> Norm ± (0-20)","User"]}},tBody:{type:Array,default:function(){return[{when:{date:"04.10.19",time:"10:23"},usedBufferSolution:["В1: № 2000460789536: pH 1.09","В2: № 2000460789536: pH 2.00","В3: № 2000460789536: pH 4.01","В4: № 2000460789536: pH 7.00","В5: № 2000460789536: pH 9.21","В5: № 2000460789536: pH 9.21","В5: № 2000460789536: pH 9.21"],slope:98.1,offset:-.3,user:"Петров Иван Геннадьевич"},{when:{date:"04.10.19",time:"10:23"},usedBufferSolution:["В1: № 2000460789536: pH 1.09","В2: № 2000460789536: pH 2.00","В3: № 2000460789536: pH 4.01","В4: № 2000460789536: pH 7.00","В5: № 2000460789536: pH 9.21"],slope:80.1,offset:-20.3,user:"Иванов Геннадий Петрович"}]}}},data:function(){return{}}},et=tt,at=(a("6f44"),Object(h["a"])(et,V,$,!1,null,null,null)),rt=at.exports,it={name:"InsrumentCalibrationReportPage",components:{filterDevices:C,unitName:O,reportFilters:E,deviceInfo:F,reportTable:rt},data:function(){return{reportTable:{reportType:void 0,headReportTableData:[],bodyReportTableData:[]},unitNameTitle:void 0}},created:function(){this.reportTable.reportType=this.$store.getters.getReportType,this.reportTable.tHeadReportTableData=this.getTableHeadData,this.reportTable.tBodyReportTableData=this.getTableBodyData,this.unitNameTitle=this.$store.getters.getUnitNameData},computed:Object(p["a"])({},Object(f["c"])(["getFoundDevice","getHeadReportTableData","getBodyReportTableData"]),{getDevice:function(){return this.getFoundDevice},getTableHeadData:function(){return Object(c["a"])(this.getHeadReportTableData)},getTableBodyData:function(){return Object(c["a"])(this.getBodyReportTableData)}}),methods:Object(p["a"])({},Object(f["c"])(["getReportType"]),{generate:function(){var t=this.getReportType();t?this.reportTable.reportType=this.getReportType()+" report":alert("Choose report type option")}})},ot=it,nt=(a("6589"),Object(h["a"])(ot,s,l,!1,null,null,null)),st=nt.exports,lt={name:"App",components:{insrumentCalibrationReport:st}},ct=lt,pt=(a("034f"),Object(h["a"])(ct,o,n,!1,null,null,null)),dt=pt.exports,ut=a("206f"),ft=a.n(ut),vt=(a("7db0"),a("ade3")),bt={devices:[{id:0,typeOfEquipment:"Весы",workStatus:"Готов к работе",title:"Аналитические весы",producer:"Ohaus",model:"AX-123",responsibleUnit:"Группа обслуживания лабораторного оборудования",operationalUnit:"Химико-аналитическая лаборатория 2.0",MOL:"Иванов Иван Иванович",territory:"г.Санкт-Петербург(Нойдорф)",serialNumber:"B715976163",GUID:"508b2a71-662e-4983-ae0c-3cb0c1cd21c5",bimsID:"49db8db1-585f-4b9e-bbf0-8a59698edc8b",tam:"А-001234"},{id:1,typeOfEquipment:"Весы",workStatus:"Готов к работе",title:"Аналитические весы",producer:"Ohaus",model:"AX-123",responsibleUnit:"Группа обслуживания лабораторного оборудования",operationalUnit:"Химико-аналитическая лаборатория 2.0",MOL:"Петров Иван Генадьевич",territory:"г.Санкт-Петербург(Нойдорф)",serialNumber:"B715976163",GUID:"0000-0000-0000-0000-0000",bimsID:"1111-1111-1111-1111-1111",tam:"А-0000000"}],calibrationCase:{headReportTableData:["Data","Used Buffer Solution","Slope, % <br> Norm 95-100","Offset, mV <br> Norm ± (0-20)","User"],bodyReportTableData:[{when:{date:"04.10.19",time:"10:23"},usedBufferSolution:["В1: № 2000460789536: pH 1.09","В2: № 2000460789536: pH 2.00","В3: № 2000460789536: pH 4.01","В4: № 2000460789536: pH 7.00","В5: № 2000460789536: pH 9.21"],slope:98.1,offset:-.3,user:"Иванов Генадий Петрович"},{when:{date:"04.10.19",time:"10:23"},usedBufferSolution:["В1: № 2000460789536: pH 1.09","В2: № 2000460789536: pH 2.00","В3: № 2000460789536: pH 4.01","В4: № 2000460789536: pH 7.00","В5: № 2000460789536: pH 9.21"],slope:98.1,offset:-.3,user:"Петров Иван Генадьевич"},{when:{date:"04.10.19",time:"10:23"},usedBufferSolution:["В1: № 2000460789536: pH 1.09","В2: № 2000460789536: pH 2.00","В3: № 2000460789536: pH 4.01","В4: № 2000460789536: pH 7.00","В5: № 2000460789536: pH 9.21"],slope:98.1,offset:-.3,user:"Петров Генадий Иванович "},{when:{date:"04.10.19",time:"10:23"},usedBufferSolution:["В1: № 2000460789536: pH 1.09","В2: № 2000460789536: pH 2.00","В3: № 2000460789536: pH 4.01","В4: № 2000460789536: pH 7.00","В5: № 2000460789536: pH 9.21"],slope:90.1,offset:-.3,user:"Генадьев Иван Петрович"}]},unitName:{title:"Аналитические весы OHAUS Adventurer АХ324 (B715976163)"},foundDevice:void 0,reportType:void 0},mt={getFoundDevice:function(t){return t.foundDevice},getReportType:function(t){return t.reportType},getHeadReportTableData:function(t){return t.calibrationCase.headReportTableData},getBodyReportTableData:function(t){return t.calibrationCase.bodyReportTableData},getUnitNameData:function(t){return t.unitName.title}},ht=Object(vt["a"])({},v,(function(t,e){var a=t.commit,r=t.state,i=r.devices.find((function(t){return t.GUID===e||t.bimsID===e||t.tam===e}));i&&a(w,i)})),yt=(r={},Object(vt["a"])(r,w,(function(t,e){t.foundDevice=e})),Object(vt["a"])(r,B,(function(t,e){t.reportType=e})),r),Ct={state:bt,getters:mt,actions:ht,mutations:yt};i["a"].use(f["a"]);var _t=!1,gt=new f["a"].Store({modules:{app:Ct},strict:_t});i["a"].use(ft.a),i["a"].use(f["a"]),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(dt)},store:gt}).$mount("#app")},5738:function(t,e,a){},"5bba":function(t,e,a){"use strict";var r=a("9f3d"),i=a.n(r);i.a},"5e36":function(t,e,a){},6589:function(t,e,a){"use strict";var r=a("5738"),i=a.n(r);i.a},"6ea4":function(t,e,a){},"6f44":function(t,e,a){"use strict";var r=a("429d"),i=a.n(r);i.a},"71b9":function(t,e,a){"use strict";var r=a("443c"),i=a.n(r);i.a},8526:function(t,e,a){"use strict";var r=a("0160"),i=a.n(r);i.a},"85ec":function(t,e,a){},"957a":function(t,e,a){"use strict";var r=a("6ea4"),i=a.n(r);i.a},"9f3d":function(t,e,a){},ceb1:function(t,e,a){"use strict";var r=a("d939"),i=a.n(r);i.a},d939:function(t,e,a){}});
//# sourceMappingURL=index.26983a61.js.map