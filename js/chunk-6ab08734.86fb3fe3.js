(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ab08734"],{"35dd":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("layContentHeader",{attrs:{title:"备件统计"}}),a("div",{attrs:{fluid:""}},[a("div",{staticClass:"box"},[a("v-layout",{staticClass:"box-header flex-header",staticStyle:{height:"50px",overflow:"hidden"},attrs:{"align-center":""}},[a("v-flex",{staticStyle:{flex:"unset"}},[a("span",{staticStyle:{display:"block","padding-left":"22px","font-size":"18px"}},[e._v("时间:")])]),a("v-flex",{staticClass:"width280",staticStyle:{flex:"unset"}},[a("datePicker",{attrs:{required:!1,prependIcon:"star",locale:"zh-cn"},model:{value:e.beginTime,callback:function(t){e.beginTime=t},expression:"beginTime"}})],1),a("v-flex",{staticStyle:{flex:"unset"}},[a("span",{staticStyle:{display:"block",padding:"0px 15px","font-size":"18px"}},[e._v("到")])]),a("v-flex",{staticClass:"width280",staticStyle:{flex:"unset"}},[a("datePicker",{attrs:{required:!1,prependIcon:"star",locale:"zh-cn"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}})],1),a("v-flex",{staticStyle:{flex:"unset"}},[a("v-btn",{staticClass:"btn-0",attrs:{small:"",depressed:""},on:{click:e.doSearch}},[e._v("查询")]),a("v-btn",{staticClass:"btn-0",attrs:{small:"",depressed:""},on:{click:e.showMessage}},[e._v(e._s(e.btnMessage))])],1)],1)],1),a("div",{staticClass:"box-wrap",staticStyle:{"margin-top":"-2px"}},[a("div",{staticClass:"box flex1 bg-fff"},[e._m(0),a("div",{staticClass:"flex-header"},[a("div",{staticClass:"label-title"},[e._v("统计类容:")]),a("div",{staticClass:"width120"},[a("v-select",{staticClass:"self-select",attrs:{items:e.sparesContentList,"item-text":"name","item-value":"name"},on:{change:e.changeOne},model:{value:e.sparesContent,callback:function(t){e.sparesContent=t},expression:"sparesContent"}})],1),a("div",{staticClass:"label-title"},[e._v("统计维度:")]),a("div",{staticClass:"width120"},[a("v-select",{staticClass:"self-select",attrs:{items:e.sparesTypeList,"item-text":"name","item-value":"name"},on:{change:e.changeOne},model:{value:e.sparesType,callback:function(t){e.sparesType=t},expression:"sparesType"}})],1)]),e._m(1)]),a("div",{staticClass:"box flex1"},[e._m(2),a("div",{staticClass:"flex-header"},[a("div",{staticClass:"label-title"},[e._v("统计维度:")]),a("div",{staticClass:"width120"},[a("v-select",{attrs:{items:e.sparesTypeList,"item-text":"name","item-value":"name"},on:{change:e.changeTwoMethod},model:{value:e.consumeMethod,callback:function(t){e.consumeMethod=t},expression:"consumeMethod"}})],1),a("div",{staticClass:"label-title"},[e._v(e._s(e.consumeMethod)+":")]),a("div",{staticClass:"width120"},[a("v-select",{attrs:{items:e.consumeTypeList,"item-text":"name","item-value":"value"},on:{change:e.changeTwo},model:{value:e.consumeType,callback:function(t){e.consumeType=t},expression:"consumeType"}})],1)]),a("div",{staticStyle:{width:"100%",height:"300px",padding:"10px 0px 0px 10px"},attrs:{id:"echart_two"}})]),a("div",{staticClass:"box flex1 bg-fff"},[e._m(3),a("div",{staticClass:"flex-header"},[a("div",{staticClass:"label-title"},[e._v("备件:")]),a("div",{staticClass:"width120"},[a("v-select",{attrs:{items:e.cunsumeList,"item-text":"name","item-value":"id"},on:{change:e.changeThree},model:{value:e.sparePartsId,callback:function(t){e.sparePartsId=t},expression:"sparePartsId"}})],1),a("div",{staticClass:"label-title"},[e._v("时间维度:")]),a("div",{staticClass:"width120"},[a("v-select",{staticClass:"mar-l10",attrs:{items:e.timeTypeList,"item-text":"name","item-value":"name"},on:{change:e.changeThree},model:{value:e.timeType,callback:function(t){e.timeType=t},expression:"timeType"}})],1)]),a("div",{staticStyle:{width:"100%",height:"300px",padding:"10px 0px 0px 10px"},attrs:{id:"echart_three"}})])]),a("div",{staticClass:"box-wrap mar-t22"},[a("div",{staticClass:"box flex1 bg-fff"},[a("div",{staticClass:"box-header flex-header"},[a("div",{staticClass:"title-0"},[e._v("预警统计")]),a("v-btn",{staticClass:"btn-0",attrs:{small:"",depressed:""},on:{click:function(t){return e.seeDetail()}}},[e._v("查看更多")]),a("v-btn",{staticClass:"btn-0",attrs:{small:"",depressed:""},on:{click:function(t){return e.purchase()}}},[e._v("采购")])],1),a("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"echart_four"}})]),a("div",{staticClass:"box flex1"},[e._m(4),a("div",{staticClass:"flex-header"},[a("div",{staticClass:"label-title"},[e._v("是否超期:")]),a("div",{staticClass:"width120"},[a("v-select",{attrs:{items:e.overContentList,"item-text":"name","item-value":"name"},on:{change:e.changeFive},model:{value:e.overContent,callback:function(t){e.overContent=t},expression:"overContent"}})],1),a("div",{staticClass:"label-title"},[e._v("超期时间:")]),a("div",{staticClass:"width120"},[a("v-select",{directives:[{name:"show",rawName:"v-show",value:"已超期"==e.overContent,expression:"overContent=='已超期'"}],attrs:{items:e.overTimeList,"item-text":"name","item-value":"name"},on:{change:e.changeFive},model:{value:e.overTime,callback:function(t){e.overTime=t},expression:"overTime"}})],1)]),a("div",{staticClass:"flex-header"},[a("div",{staticClass:"label-title"},[e._v("统计类容:")]),a("div",{staticClass:"width120"},[a("v-select",{attrs:{items:e.sparesContentList,label:"统计内容","item-text":"name","item-value":"id"},on:{change:e.changeFive},model:{value:e.stopContent,callback:function(t){e.stopContent=t},expression:"stopContent"}})],1)]),a("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"echart_five"}})]),a("div",{staticClass:"box flex1 bg-fff"},[e._m(5),a("div",{staticClass:"box-wrap justify-around mar-t10 mar-b10"},[a("div",{staticClass:"data-item"},[a("p",{staticClass:"title-2 color3"},[e._v(e._s(e.acceptTotal))]),a("p",[e._v("总入库检验批次数")])]),a("div",{staticClass:"data-item"},[a("p",{staticClass:"title-2 color-b"},[e._v(e._s(e.passTotal))]),a("p",[e._v("合格批次")])]),a("div",{staticClass:"data-item"},[a("p",{staticClass:"title-2 color-b"},[e._v(e._s(e.passRate)+"%")]),a("p",[e._v("合格率")])]),a("div",{staticClass:"data-item"},[a("p",{staticClass:"title-2  color-y"},[e._v(e._s(e.notPassTotal))]),a("p",[e._v("未通过批次")])])]),a("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"echart_six"}})])])]),a("warnSparePartsDetail",{ref:"warnDetail",attrs:{IsShow:e.IsShow,DataSource:e.source},on:{detailClosed:e.detailClosed}}),a("contentModal",{attrs:{title:"添加购置任务",IsShow:e.IsPurchase,width:"1100"},on:{modalClosed:function(t){return e.modalClosed()},modalComfirmed:function(t){return e.modalComfirmed()}}},[a("spPurchaseDetail",{ref:"spPurchaseDetail",attrs:{spPurchaseTaskModal:e.spPurchaseTask}})],1)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box-header flex-header bg-fff"},[a("div",{staticClass:"title-0"},[e._v("备件数量/金额统计")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box-wrap"},[a("div",{staticClass:"flex5"},[a("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"echart_one"}})]),a("div",{staticClass:"flex5"},[a("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"echart_childone"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box-header flex-header"},[a("div",{staticClass:"title-0"},[e._v("备件消耗统计")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box-header flex-header bg-fff"},[a("div",{staticClass:"title-0"},[e._v("消耗频次统计")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box-header flex-header"},[a("div",{staticClass:"title-0"},[e._v("呆滞统计")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box-header flex-header"},[a("div",{staticClass:"title-0"},[e._v("入库检验结果统计")])])}],n=(a("cc1d"),a("7cfd"),a("bada"),a("de90"),a("40c5"),a("ebec"),a("4634"),a("1d53")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"1000px",persistent:!0,scrollable:""},model:{value:e.IsShow,callback:function(t){e.IsShow=t},expression:"IsShow"}},[a("v-card",[a("v-card-title",{staticClass:"primary"},[a("span",{staticClass:"headline",staticStyle:{color:"#fff"}},[e._v(e._s(e.title))])]),a("v-card-text",[a("dataTable",{ref:"childDataTable",attrs:{headers:e.headers,hideHeaders:!1,sort:!0,items:e.DataSource,allowActive:!1,hideOperation:!0}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.detailClosed()}}},[e._v("关闭")])],1)],1)],1)},o=[],l=a("f855"),c={name:"warnSparePartsDetail",data:function(){return{title:"备件预警统计详情",headers:[{text:"序号",align:"center",sortable:!1},{text:"备件编号",align:"center",sortable:!1,value:"code"},{text:"备件名称",align:"center",sortable:!1,value:"name"},{text:"库存量",align:"center",sortable:!1,value:"inventory"},{text:"安全库存推荐值",align:"center",sortable:!1,value:"safeCount"}],FormatFields:{}}},computed:{total:function(){return this.DataSource&&this.DataSource.length>0?this.DataSource.length:1}},components:{dataTable:l["a"]},methods:{initialize:function(){},detailClosed:function(){this.$emit("detailClosed")},initPage:function(){}},props:["DataSource","IsShow"]},u=c,d=a("6691"),h=Object(d["a"])(u,r,o,!1,null,null,null),p=h.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"grid-list-md":""}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[e._v("基本信息")]),a("v-flex",{attrs:{xs4:""}},[a("v-text-field",{attrs:{label:"购置单编号",rules:[function(e){return!0}]},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n            购置单编号\n          ")]},proxy:!0}]),model:{value:e.spPurchaseTaskModal.purchaseCode,callback:function(t){e.$set(e.spPurchaseTaskModal,"purchaseCode",t)},expression:"spPurchaseTaskModal.purchaseCode"}})],1),a("v-flex",{attrs:{xs4:""}},[a("datePicker",{attrs:{label:"最迟到货时间",required:!0,rules:[function(e){return e&&""!=e||"必填项"}]},model:{value:e.spPurchaseTaskModal.latestTime,callback:function(t){e.$set(e.spPurchaseTaskModal,"latestTime",t)},expression:"spPurchaseTaskModal.latestTime"}})],1),a("v-flex",{attrs:{xs4:""}},[a("selectUser",{ref:"selectUser",attrs:{value:e.spPurchaseTaskModal.applicantName,required:!0,label:"申请人",multiple:!1,initselect:e.spPurchaseTaskModal.selectAssign},on:{changeValue:e.changeValue}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{label:"购置原因"},model:{value:e.spPurchaseTaskModal.reason,callback:function(t){e.$set(e.spPurchaseTaskModal,"reason",t)},expression:"spPurchaseTaskModal.reason"}})],1)],1),a("v-layout",[a("v-flex",{attrs:{xs12:""}},[e._v("\n        采购备件清单：\n      ")])],1),e._l(e.spPurchaseTaskModal.rspsList,(function(t,s){return a("v-layout",{key:s},[a("v-select",{attrs:{label:"备件名称",items:e.sparePartsList,"item-text":"codeName","item-value":"id",disabled:"",rules:[function(e){return!!e||"必填项"}]},on:{change:function(t){return e.comboboxChange(e.item,s)}},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n          备件名称 "),a("span",{staticStyle:{color:"red"}},[e._v("*")])]},proxy:!0}],null,!0),model:{value:t.sparePartsID,callback:function(a){e.$set(t,"sparePartsID",a)},expression:"spare.sparePartsID"}}),a("v-text-field",{attrs:{label:"规格型号",disabled:!e.isModelDisabled[s]},model:{value:t.model,callback:function(a){e.$set(t,"model",a)},expression:"spare.model"}}),a("v-select",{attrs:{label:"供应商",items:e.supplierList,"item-text":"cname","item-value":"id",disabled:!e.isModelDisabled[s]},model:{value:t.supplier,callback:function(a){e.$set(t,"supplier",a)},expression:"spare.supplier"}}),a("v-text-field",{attrs:{label:"数量",rules:[function(e){return!("0"===e)||"数量不能为0"},function(e){return!!e||"数量不能为空"},function(e){return!e||/^(0|[1-9][0-9]*)$/.test(e)||"只能是正整数"}],type:"number"},model:{value:t.purchaseCount,callback:function(a){e.$set(t,"purchaseCount",a)},expression:"spare.purchaseCount"}})],1)}))],2)],1)},f=[],v=a("3596"),x=a("1d18"),b=a("2c75"),g=a("d5b3"),y=a("6bf2"),T=a.n(y),C={name:"spPurchaseDetail",data:function(){return{today:T()(new Date).format("YYYY-MM-DD"),valid:!0,item:{assignName:"",selectAssign:[]},selectedIndex:0,sparePartsList:[],supplierList:[],isModelDisabled:[],rspsList:{}}},components:{datePicker:n["a"],selectUser:x["a"]},methods:{getData:function(){var e=this;e.$Server.queryAll((new b["a"]).__name,null,{deleted:!1}).then((function(t){e.sparePartsList=t.datas})),e.$Server.queryAll("Company",{},{deleted:"false"}).then((function(t){e.supplierList=t.datas.filter((function(e){return e.ctypeName&&e.ctypeName.indexOf("供应商")>-1||void 0==e.ctypeName||null==e.ctypeName}))}))},validate:function(){return this.spPurchaseTaskModal.rspsList.length>=0?!!this.$refs.form.validate()&&(this.rspsList=JSON.parse(JSON.stringify(this.spPurchaseTaskModal.rspsList)),this.rspsList.forEach((function(e){"object"===Object(v["a"])(e.sparePartsID)&&(e.sparePartsID=e.sparePartsID.id)})),!0):(g["a"].alert("至少需要一个备件"),!1)},changeValue:function(e){e.length>0&&(this.spPurchaseTaskModal.applicant=e[0].id,this.spPurchaseTaskModal.applicantName=e[0].uname)},comboboxChange:function(e,t){if(e){var a=this.sparePartsList.find((function(t){return t.id==e}));this.spPurchaseTaskModal.rspsList[t].model=a.model,this.spPurchaseTaskModal.rspsList[t].supplier=a.supplier}},initChange:function(e){var t=this;e.rspsList&&e.rspsList.forEach((function(e){var a=t.sparePartsList.find((function(t){return t.id==e.sparePartsID}));a&&(e.model=a.model,e.supplier=a.supplier)}))},resetValidation:function(){this.$refs.form.resetValidation()},resetForm:function(){this.$refs.form.reset()}},props:["spPurchaseTaskModal"]},S=C,w=(a("c327"),Object(d["a"])(S,m,f,!1,null,"811aa00a",null)),P=w.exports,_=a("a2a7"),L=(a("debc"),{data:function(){return{beginTime:"",endTime:"",echartOne:null,echartChildOne:null,echartTwo:null,echartThree:null,echartFour:null,echartFive:null,echartSix:null,sparesContent:"数量",sparesContentList:[{name:"数量"},{name:"金额"}],sparesType:"ABC类",sparesTypeList:[{name:"ABC类"},{name:"FMR类"}],consumeTypeList:[{name:"A类",value:"A"},{name:"B类",value:"B"},{name:"C类",value:"C"}],consumeAbcTypes:[{name:"A类",value:"A"},{name:"B类",value:"B"},{name:"C类",value:"C"}],consumeFrmTypes:[{name:"F（常用物料）",value:"F（常用物料）"},{name:"M（常用物料）",value:"M（常用物料）"},{name:"R（常用物料）",value:"R（常用物料）"}],consumeType:"A",consumeMethod:"ABC类",cunsumeList:[],sparePartsId:"",timeType:"周",timeTypeList:[{name:"周"},{name:"月"},{name:"年"}],sparesChildType:"",overContent:"已超期",overContentList:[{name:"已超期"},{name:"即将超期"}],overTime:"三个月",overTimeList:[{name:"三个月"},{name:"六个月"},{name:"一年"}],acceptTotal:0,passTotal:0,passRate:0,notPassTotal:0,acceptCodeList:[],purseTaskId:"",IsShow:!1,dataSource:[],source:[],selectSpareParts:{},IsPurchase:!1,spPurchaseTask:{},initObject:{purchaseCode:"",applicant:"",applicantName:"",latestTime:T()(new Date).format("YYYY-MM-DD"),reason:"",rspsList:[]},stopContent:"数量",btnMessage:"显示数据",showMsg:!1,stopMessage:"呆滞数量：台"}},mounted:function(){this.initOne(),this.initTwo(),this.initFour(),this.initFive(),this.initSix()},components:{datePicker:n["a"],warnSparePartsDetail:p,spPurchaseDetail:P,contentModal:_["a"]},methods:{showMessage:function(){1==this.showMsg?(this.showMsg=!1,this.btnMessage="显示数据"):(this.showMsg=!0,this.btnMessage="隐藏数据"),this.initTwo(),this.initThree(),this.initFour(),this.initFive(),this.initSix()},purchase:function(){if(this.selectSpareParts&&this.selectSpareParts.id){this.$refs.spPurchaseDetail.resetValidation(),this.spPurchaseTask=JSON.parse(JSON.stringify(this.initObject));var e=this.selectSpareParts.id;this.spPurchaseTask.rspsList.push({sparePartsID:e}),this.spPurchaseTask.applicantName=sessionStorage.getItem("uname"),this.spPurchaseTask.latestTime=T()(new Date).format("YYYY-MM-DD"),this.spPurchaseTask.applicant=sessionStorage.getItem("userId"),this.spPurchaseTask.userViewModel=[JSON.parse(sessionStorage.getItem("userViewModel"))],this.$refs.spPurchaseDetail.initChange(this.spPurchaseTask),this.IsPurchase=!0}else g["a"].alert("请选择需要采购的备件")},modalComfirmed:function(){var e=this;1==e.$refs.spPurchaseDetail.validate()&&(Array.isArray(e.spPurchaseTask.userViewModel)&&e.spPurchaseTask.userViewModel.length>0&&(e.spPurchaseTask.userViewModel=e.spPurchaseTask.userViewModel[0]),e.$Server.addOrUpdate("SpPurchaseTask",e.spPurchaseTask,!1).then((function(t){t.success&&(e.IsPurchase=!1,e.spPurchaseTask=JSON.parse(JSON.stringify(e.initObject)),g["a"].alert("保存成功","success"))}),(function(e){g["a"].alert(e)})))},modalClosed:function(){this.IsPurchase=!1,this.$refs.spPurchaseDetail.resetValidation()},seeDetail:function(){this.$refs.warnDetail.initPage(),this.source=JSON.parse(JSON.stringify(this.dataSource)),this.IsShow=!0},detailClosed:function(){this.source=[],this.IsShow=!1},doSearch:function(){this.initOne(),this.initTwo(),this.initThree(),this.initFive(),this.initSix()},changeOne:function(){this.initOne()},changeTwo:function(){this.initTwo()},changeTwoMethod:function(){"ABC类"==this.consumeMethod?(this.consumeType="",this.consumeTypeList=this.consumeAbcTypes):(this.consumeType="",this.consumeTypeList=this.consumeFrmTypes),this.initTwo()},changeThree:function(){this.initThree()},changeFive:function(){"数量"==this.stopContent?this.stopMessage="呆滞数量：台":this.stopMessage="呆滞金额：元",this.initFive()},changeSix:function(){this.initSixTwo()},initOne:function(){var e=this;this.$Server.queryAll("SpareStatic",{},{content:"备件数量统计",sparesContent:e.sparesContent,sparesType:e.sparesType,beginTime:e.beginTime,endTime:e.endTime}).then((function(t){var a=t.datas,s=[],i=[];a&&a[0]&&a[0].statisticList&&a[0].statisticList.forEach((function(e){i.push(e.itemName),s.push({name:e.itemName,value:e.itemValue})})),e.initEchartForOne(i,s)}))},initChildOne:function(){var e=this;this.$Server.queryAll("SpareStatic",{},{content:"备件数量统计",sparesContent:e.sparesContent,sparesType:e.sparesType,sparesChildType:e.sparesChildType,beginTime:e.beginTime,endTime:e.endTime}).then((function(t){var a=t.datas,s=[],i=[];a&&a[0]&&a[0].statisticList&&a[0].statisticList.forEach((function(e){i.push(e.itemName),s.push({name:e.itemName.match(/\（(.+)）/)?e.itemName.match(/\（(.+)）/)[1]:e.itemName,value:e.itemValue})})),e.initEchartForChildOne(i,s)}))},initTwo:function(){var e=this;this.$Server.queryAll("SpareStatic",{},{content:"备件消耗统计",consumeType:e.consumeType,consumeMethod:e.consumeMethod,beginTime:e.beginTime,endTime:e.endTime}).then((function(t){var a=[],s=t.datas,i=[],n=[],r=[];s&&s[0]&&s[0].statisticList&&s[0].statisticList.forEach((function(e){a.push({id:e.id,name:e.itemName}),i.push(e.itemName),n.push(e.itemValue),r.push(e.itemKey)})),e.cunsumeList=a,e.initEchartForTwo(i,n,r,e.showMsg)}))},initThree:function(){var e=this;this.$Server.queryAll("SpareStatic",{},{content:"消耗频次统计",sparePartsId:e.sparePartsId,timeType:e.timeType,beginTime:e.beginTime,endTime:e.endTime}).then((function(t){var a=[],s=[],i=[],n=[],r=0,o=0;if(t.datas&&t.datas[0]){var l=t.datas[0];l.statisticList.forEach((function(e){0==a.includes(e.itemName)&&a.push(e.itemName)})),l.statistics.forEach((function(e){0==a.includes(e.itemName)&&a.push(e.itemName)})),l.outList.forEach((function(e){0==a.includes(e.itemName)&&a.push(e.itemName)})),a.sort((function(e,t){return parseInt(e)-parseInt(t)})),a.forEach((function(e){var t=l.statisticList.find((function(t){return t.itemName==e}));t&&t.itemValue?(s.push(t.itemValue),r+=parseInt(t.itemValue)):s.push(0);var a=l.statistics.find((function(t){return t.itemName==e}));a&&a.itemValue?(i.push(a.itemValue),r+=parseInt(a.itemValue)):i.push(0);var o=l.outList.find((function(t){return t.itemName==e}));o&&o.itemValue?(n.push(o.itemValue),r+=parseInt(o.itemValue)):n.push(0)})),o=void 0!=l.total&&null!=l.total&&0!=l.total?Math.round(r/l.total):Math.round(r/a.length)}e.initEchartForThree(a,s,i,n,o,e.showMsg)}))},initFour:function(){var e=this;this.$Server.queryAll("SpareStatic",{},{content:"预警统计"}).then((function(t){var a=[],s=[],i=[];if(t.datas&&t.datas[0]){var n=t.datas[0];n.sparePartsList&&(e.dataSource=n.sparePartsList,i=n.sparePartsList.length>7?n.sparePartsList.slice(0,7):n.sparePartsList,i.reverse(),i.forEach((function(e){a&&a.length<7&&(a.push(e.codeName),s.push(e.inventory))})))}e.initEchartForFour(a,s,e.showMsg)}))},initFive:function(){var e=this;this.$Server.queryAll("SpareStatic",{},{content:"呆滞统计",overContent:e.overContent,overTime:e.overTime,beginTime:e.beginTime,endTime:e.endTime,stopContent:e.stopContent}).then((function(t){var a=[],s=[],i=[];if(t.datas&&t.datas[0]){var n=t.datas[0];n.statisticList&&n.statisticList.forEach((function(e){a.push(e.itemName),s.push(e.itemValue),i.push(e.itemKey)}))}e.initEchartForFive(a,s,i,e.stopMessage,e.showMsg)}))},initSix:function(){var e=this;this.$Server.queryAll("SpareStatic",{},{content:"入库检验结果统计",beginTime:e.beginTime,endTime:e.endTime}).then((function(t){var a=[],s=[],i=[];if(e.acceptCodeList=[],t.datas&&t.datas[0]){var n=t.datas[0];if(n.statisticList&&n.statisticList[0]){var r=n.statisticList[0];e.acceptTotal=r.itemName,e.passTotal=r.itemValue,e.passRate=r.itemKey}if(n.statistics&&n.statistics[0]){var o=n.statistics[0];e.notPassTotal=o.itemName}n.notPassList&&n.notPassList.forEach((function(t){e.acceptCodeList.push({name:t.itemName,id:t.itemValue})})),n.outList&&n.outList.forEach((function(e){a.push(e.itemName),s.push(e.itemValue),i.push(e.itemKey)}))}e.initEchartForSix(a,s,i,e.showMsg)}))},initSixTwo:function(){var e=this;this.$Server.queryAll("SpareStatic",{},{content:"入库检验结果统计",purseTaskId:e.purseTaskId,beginTime:e.beginTime,endTime:e.endTime}).then((function(t){var a=[],s=[];if(t.datas&&t.datas[0]){var i=t.datas[0];i.outList&&i.outList.forEach((function(e){a.push(e.itemName),s.push(e.itemValue)}))}e.initEchartForSix(a,s,e.showMsg)}))},initEchartForChildOne:function(e,t){var a=this;a.echartChildOne=this.$echarts.init(document.getElementById("echart_childone")),a.echartChildOne.setOption({color:["#1C88F1","#81BDEF","#E2E4EB","#487de9","#ff614b","#2146f3","#1fcf88"],tooltip:{trigger:"item"},grid:{left:"0",right:"0",bottom:"0",containLabel:!0},series:[{name:"ABC类",type:"pie",radius:["25%","40%"],center:["50%","40%"],label:{show:!0,textStyle:{color:"#b7b8bd"}},labelLine:{length:5,length2:8,smooth:!0,lineStyle:{color:"#b7b8bd"}},data:t}]})},initEchartForOne:function(e,t){var a=this;a.echartOne=this.$echarts.init(document.getElementById("echart_one")),a.echartOne.setOption({color:["#1fcf88","#487de9","#ff614b","#2146f3"],tooltip:{trigger:"item"},series:[{name:"ABC类",type:"pie",radius:["40%","55%"],center:["50%","40%"],label:{show:!0,textStyle:{color:"#b7b8bd",fontSize:15}},labelLine:{lineStyle:{color:"#b7b8bd"}},data:t}]}),a.echartOne.on("mouseover",(function(e){a.sparesChildType=e.name,a.initChildOne()}))},initEchartForTwo:function(e,t,a,s){var i=this;i.echartTwo=this.$echarts.init(document.getElementById("echart_two")),this.echartTwo.setOption({tooltip:{trigger:"axis",axisPointer:{type:"cross"}},grid:{bottom:"80px"},legend:{data:["消耗数量","消耗率"],right:"40px"},xAxis:[{type:"category",data:e,axisLabel:{interval:0,rotate:30,formatter:function(e){return e&&e.length>10?e.substring(0,10)+"...":e}}}],yAxis:[{type:"value",interval:10},{type:"value",min:0,max:1,axisLabel:{formatter:function(e){return 100*e+"%"}}}],series:[{name:"消耗数量",color:"#BEB6D7",type:"bar",barMaxWidth:window.infoConfig.barMaxWidth,data:t,itemStyle:{normal:{label:{show:s,position:"top",textStyle:{fontSize:15}}}}},{name:"消耗率",type:"line",yAxisIndex:1,data:a}]})},initEchartForThree:function(e,t,a,s,i,n){var r=this;r.echartThree=this.$echarts.init(document.getElementById("echart_three")),r.echartThree.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["维修消耗","保养消耗","其他"],right:"40px"},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:e,axisLabel:{interval:0}}],yAxis:[{type:"value"}],series:[{color:"#FF7052",name:"维修消耗",type:"bar",barMaxWidth:window.infoConfig.barMaxWidth,stack:"1",data:t,markLine:{silent:!0,lineStyle:{color:"red"},data:[{yAxis:i}]},itemStyle:{normal:{label:{show:n,position:"inside",textStyle:{fontSize:15}}}}},{color:"#2DC76D",name:"保养消耗",type:"bar",stack:"1",barMaxWidth:window.infoConfig.barMaxWidth,data:a,itemStyle:{normal:{label:{show:n,position:"inside",textStyle:{fontSize:15}}}}},{color:"#787993",name:"其他",type:"bar",stack:"1",barMaxWidth:window.infoConfig.barMaxWidth,data:s,itemStyle:{normal:{label:{show:n,position:"inside",textStyle:{fontSize:15}}}}}]})},initEchartForFour:function(e,t,a){var s="",i=this;i.echartFour=this.$echarts.init(document.getElementById("echart_four"));var n={grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},legend:{data:["库存量"],right:"40px"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:e,axisLabel:{formatter:function(e){return e?e.length>10?e.substring(0,10)+"...":e:""}}},series:[{name:"库存量",color:"#a6b9c5",type:"bar",itemStyle:{normal:{color:function(e){var t=e.dataIndex;return 0!=s.toString().length&&t==s?"#FE8463":new i.$echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#233FCB"},{offset:1,color:"#CE03FA"}])},label:{show:a,position:"right",textStyle:{fontSize:15,fontWeight:"bold",color:"#7B7D89"}}}},data:t}]};i.echartFour.setOption(n),i.echartFour.on("click",(function(e){if(0==s.toString().length){s=e.dataIndex;var t=e.name;i.selectSpareParts&&i.selectSpareParts.codeName&&i.selectSpareParts.codeName==t?i.selectSpareParts={}:i.selectSpareParts=i.dataSource.find((function(e){return e.codeName==t})),i.echartFour.setOption(n)}else if(s==e.dataIndex)s="",i.selectSpareParts={},i.echartFour.setOption(n);else{s=e.dataIndex;var a=e.name;i.selectSpareParts&&i.selectSpareParts.codeName&&i.selectSpareParts.codeName==a?i.selectSpareParts={}:i.selectSpareParts=i.dataSource.find((function(e){return e.codeName==a})),i.echartFour.setOption(n)}i.$refs.spPurchaseDetail.getData()}))},initEchartForFive:function(e,t,a,s,i){var n=this;n.echartFive=this.$echarts.init(document.getElementById("echart_five")),this.echartFive.setOption({tooltip:{trigger:"axis",axisPointer:{type:"cross"}},grid:{},legend:{data:["呆滞数量","呆滞率"],right:40},xAxis:[{type:"category",data:e,axisLabel:{interval:0,formatter:function(e){return e&&e.length>10?e.substring(0,10)+"...":e},rotate:30}}],yAxis:[{type:"value",interval:10},{type:"value",min:0,max:1,splitLine:{show:!1},axisLabel:{formatter:function(e){return 100*e+"%"}}}],series:[{name:"呆滞数量",color:"#D2D3D1",type:"bar",barMaxWidth:window.infoConfig.barMaxWidth,data:t,itemStyle:{normal:{label:{show:i,position:"top",textStyle:{fontSize:15,color:"#fff"}}}}},{name:"呆滞率",type:"line",yAxisIndex:1,data:a}]})},initEchartForSix:function(e,t,a,s){var i=this;i.echartSix=this.$echarts.init(document.getElementById("echart_six")),i.echartSix.setOption({color:["#ccd8e7","#4a7fbb"],tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{},legend:{data:["验收未通过数量","未通过率"],right:40},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"},axisLabel:{interval:0,formatter:function(e){return e&&e.length>10?e.substring(0,10)+"...":e},rotate:30}}],yAxis:[{type:"value",minInterval:1},{type:"value",max:1,splitLine:{show:!1},axisLabel:{formatter:function(e){return 100*e+"%"}}}],series:[{color:"#F7C89C",name:"验收未通过数量",type:"bar",barMaxWidth:window.infoConfig.barMaxWidth,data:t,itemStyle:{normal:{label:{show:s,position:"top",textStyle:{fontSize:15}}}}},{name:"未通过率",type:"line",yAxisIndex:1,data:a}]})}}}),M=L,k=(a("465c"),a("9d97"),Object(d["a"])(M,s,i,!1,null,"046c25be",null));t["default"]=k.exports},"3e2b":function(e,t,a){},"465c":function(e,t,a){"use strict";var s=a("3e2b"),i=a.n(s);i.a},"8ede":function(e,t,a){},"935f":function(e,t,a){},"9d97":function(e,t,a){"use strict";var s=a("935f"),i=a.n(s);i.a},c327:function(e,t,a){"use strict";var s=a("8ede"),i=a.n(s);i.a},ebec:function(e,t,a){"use strict";var s=a("8cac"),i=a("8941"),n=a("ff04"),r=a("2137");a("6af6")("match",1,(function(e,t,a,o){return[function(a){var s=e(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,s):new RegExp(a)[t](String(s))},function(e){var t=o(a,e,this);if(t.done)return t.value;var l=s(e),c=String(this);if(!l.global)return r(l,c);var u=l.unicode;l.lastIndex=0;var d,h=[],p=0;while(null!==(d=r(l,c))){var m=String(d[0]);h[p]=m,""===m&&(l.lastIndex=n(c,i(l.lastIndex),u)),p++}return 0===p?null:h}]}))}}]);