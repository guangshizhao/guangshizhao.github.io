(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-464658b8"],{"0582":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-tabs",{attrs:{"slider-color":"primary",color:"#f5f5f5",id:"selftabs"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[i("v-tab",[i("img",{attrs:{src:a("e865")}}),e._v(" 保养执行统计 ")]),i("v-tab",[i("img",{attrs:{src:a("e865")}}),e._v(" 人员统计")]),i("v-tab-item",[i("ExecuteStatistics")],1),i("v-tab-item",[i("members-statistics")],1)],1)],1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"box mar-t22"},[a("div",{staticClass:"box-header flex-header",staticStyle:{height:"50px",overflow:"hidden"}},[a("div",{staticClass:"label-title"},[e._v("时间:")]),a("div",{staticClass:"width280"},[a("datePicker",{staticClass:"self-select",attrs:{required:!1,prependIcon:"star",locale:"zh-cn"},model:{value:e.beginTime,callback:function(t){e.beginTime=t},expression:"beginTime"}})],1),a("div",{staticClass:"label-title"},[e._v("到")]),a("div",{staticClass:"width280"},[a("datePicker",{staticClass:"self-select",attrs:{required:!1,prependIcon:"star",locale:"zh-cn"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}})],1),a("v-btn",{staticClass:"btn-0",attrs:{depressed:"",small:""},on:{click:e.doSearch}},[e._v("查询")]),a("v-btn",{staticClass:"btn-0",attrs:{depressed:"",small:""},on:{click:e.showMessage}},[e._v(e._s(e.btnMessage))])],1)]),a("div",{staticClass:"box",staticStyle:{"margin-top":"-2px",background:"#fff"}},[a("div",{staticClass:"box-header flex-header bg-fff",staticStyle:{"border-bottom":"0"}},[a("div",{staticClass:"title-0"},[e._v("保养工单执行统计")]),a("div",{staticClass:"label-title"},[e._v("维度统计：")]),a("div",{staticClass:"width280"},[a("v-select",{staticClass:"self-select",attrs:{items:e.contentTypeList,"item-text":"name","item-value":"value"},on:{change:e.changeOne},model:{value:e.contentType,callback:function(t){e.contentType=t},expression:"contentType"}})],1),a("div",{staticClass:"label-title"},[e._v("维度：")]),!e.contentType||"工厂"!=e.contentType&&"车间"!=e.contentType?e._e():a("div",{staticClass:"width280"},[a("v-select",{staticClass:"self-select",attrs:{items:e.stationTypeList,"item-text":"name","item-value":"id"},on:{change:e.changeOneType},model:{value:e.stationType,callback:function(t){e.stationType=t},expression:"stationType"}})],1)]),a("div",{staticStyle:{float:"right",width:"100%",height:"300px",padding:"10px 0px 0px 10px"},attrs:{id:"echart_one"}})]),a("div",{staticClass:"box mar-t22"},[a("div",{staticClass:"box-header flex-header bg-fff bor-b0"},[a("div",{staticClass:"title-0"},[e._v("保养后维修趋势统计")]),a("div",{staticClass:"label-title"},[e._v("维度统计:")]),a("div",{staticClass:"width280"},[a("v-select",{staticClass:"self-select",attrs:{items:e.contentTypeList,"item-text":"name","item-value":"value"},on:{change:e.changeTwo},model:{value:e.repairContent,callback:function(t){e.repairContent=t},expression:"repairContent"}})],1),a("div",{staticClass:"label-title"},[e._v("维度:")]),"设备"!=e.repairContent?a("div",{staticClass:"width280"},[a("v-select",{staticClass:"self-select",attrs:{items:e.repairStaTypeList,"item-text":"name","item-value":"id"},on:{change:e.changeTwoType},model:{value:e.repairStaType,callback:function(t){e.repairStaType=t},expression:"repairStaType"}})],1):e._e(),a("div",{staticClass:"label-title"},[e._v("时间维度:")]),a("div",{staticClass:"width280"},[a("v-select",{staticClass:"self-select",attrs:{items:e.taskTimeTypeList,"item-text":"name","item-value":"name"},on:{change:e.changeTwoType},model:{value:e.repairTimeType,callback:function(t){e.repairTimeType=t},expression:"repairTimeType"}})],1)]),e._m(0)]),a("div",{staticClass:"box mar-t22"},[a("div",{staticClass:"box-header flex-header bg-fff bor-b0"},[a("div",{staticClass:"title-0"},[e._v("工时统计")]),a("div",{staticClass:"label-title"},[e._v("时间维度:")]),a("div",{staticClass:"width280"},[a("v-select",{staticClass:"self-select",attrs:{items:e.taskTimeTypeList,"item-text":"name","item-value":"name"},on:{change:e.changeThree},model:{value:e.taskTimeType,callback:function(t){e.taskTimeType=t},expression:"taskTimeType"}})],1)]),e._m(1)]),a("executeTaskDetail",{ref:"executeTaskDetail",attrs:{IsShow:e.IsShow,item:e.detailItem},on:{detailClosed:e.detailClosed}}),a("executeTaskTimeDetail",{ref:"executeTaskTimeDetail",attrs:{IsShowTime:e.IsShowTime,executeTime:e.executeTime},on:{detailtimeClosed:e.detailtimeClosed}})],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box-body"},[a("div",{staticStyle:{width:"100%",height:"300px",padding:"10px 0px 0px 10px"},attrs:{id:"echart_two"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box-body",staticStyle:{overflow:"hidden"}},[a("div",{staticStyle:{float:"right",width:"100%",height:"300px",padding:"10px 0px 0px 10px"},attrs:{id:"echart_three"}})])}],l=(a("bada"),a("7cfd"),a("4634"),a("1d53")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"1000px",persistent:!0,scrollable:""},model:{value:e.IsShow,callback:function(t){e.IsShow=t},expression:"IsShow"}},[a("v-card",[a("v-card-title",{staticClass:"primary"},[a("span",{staticClass:"headline",staticStyle:{color:"#fff"}},[e._v(e._s(e.title))])]),a("v-card-text",[a("v-container",{staticStyle:{padding:"0"},attrs:{"grid-list-md":""}},[a("v-layout",[a("v-flex",{attrs:{xs12:"",sm3:""}},[a("p",[e._v("工厂："+e._s(e.item.name))])]),a("v-flex",{attrs:{xs12:"",sm3:""}},[a("p",[e._v("时间："+e._s(e.item.executeTime))])]),a("v-flex",{attrs:{xs12:"",sm3:""}},[a("p",[e._v("计划执行次数："+e._s(e.item.planCount))])]),a("v-flex",{attrs:{xs12:"",sm3:""}},[a("p",[e._v("实际执行次数："+e._s(e.item.actual))])])],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm3:""}},[a("v-select",{attrs:{items:e.statusList,label:"工单状态","item-value":"value","item-text":"name",clearable:"","single-line":""},on:{change:e.changeType},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}})],1)],1)],1),a("dataTable",{ref:"childDataTable",attrs:{headers:e.headers,sort:!0,DataSource:e.dataSource,hideOperation:!0,formatFields:e.FormatFields,total:e.total},on:{initialize:e.initialize}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.detailClosed()}}},[e._v("关闭")])],1)],1)],1)},c=[],d=a("f05f"),m=a("44af"),h=a("8333"),u=new h["a"](new m["a"]),p={name:"executeTaskDetail",data:function(){return{status:"",statusList:[{name:"未开始",value:0},{name:"进行中",value:1},{name:"按时完成",value:2},{name:"超期完成",value:3}],title:"保养工单执行统计详情",headers:[{text:"序号",align:"center",sortable:!1},{text:"工单编号",align:"center",sortable:!1,value:"code"},{text:"设备编号",align:"center",sortable:!1,value:"ecode"},{text:"设备名称",align:"center",sortable:!1,value:"ename"},{text:"预计结束时间",align:"center",sortable:!1,value:"endTime"},{text:"实际结束时间",align:"center",sortable:!1,value:"actualEndDate"},{text:"工单状态",align:"center",sortable:!1,value:"status"}],total:1,currentparams:{},FormatFields:u.getFormatFields(),dataSource:[],params:{}}},components:{dataTable:d["a"]},methods:{detailClosed:function(){this.status="",this.$emit("detailClosed")},initialize:function(e){var t=this;e&&null!=e.page&&(this.currentparam=e);var a=this.currentparam,i=a.page,n=a.rowsPerPage;t.params.status=t.status,this.$Server.queryAll("MainTaskStatic",{page:i,rowsPerPage:n},t.params).then((function(e){e.datas&&e.datas[0]&&e.datas[0].taskList&&(t.dataSource=e.datas[0].taskList,t.total=e.datas[0].taskList.length)}))},changeType:function(){var e=this.currentparam.page;1==e?this.initialize():this.$refs.childDataTable.setPage(1)},doSearch:function(e){this.params=e;var t=this.currentparam.page;1==t?this.initialize():this.$refs.childDataTable.setPage(1)}},props:["IsShow","item"]},f=p,b=a("6691"),v=Object(b["a"])(f,o,c,!1,null,null,null),x=v.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"1100px",persistent:!0,scrollable:""},model:{value:e.IsShowTime,callback:function(t){e.IsShowTime=t},expression:"IsShowTime"}},[a("v-card",[a("v-card-title",{staticClass:"primary"},[a("span",{staticClass:"headline",staticStyle:{color:"#fff"}},[e._v(e._s(e.title))])]),a("v-card-text",[a("v-container",{staticStyle:{padding:"0"},attrs:{"grid-list-md":""}},[a("v-layout",[a("v-flex",{attrs:{xs12:"",sm3:""}},[a("p",[e._v("时间："+e._s(e.executeTime))])])],1)],1),a("div",{staticClass:"headline"},[e._v("工单明细")]),a("dataTable",{ref:"childDataTable",attrs:{headers:e.headers,sort:!0,DataSource:e.dataSource,hideOperation:!0,allowActive:!0,formatFields:e.FormatFields,total:e.total},on:{rowDbClick:e.rowDbClick,initialize:e.initialize}}),a("div",{staticStyle:{"margin-top":"10px",border:"1px dashed rgba(0,0,0,.12)"}}),a("v-layout",[a("v-flex",{attrs:{x12:""}},[a("p",{staticClass:"headline"},[e._v("保养项统计")])])],1),a("v-layout",[a("v-flex",{attrs:{xs12:"",sm3:""}},[a("p",[e._v("工单编号："+e._s(e.item.code))])]),a("v-flex",{attrs:{xs12:"",sm3:""}},[a("p",[e._v("设备编号："+e._s(e.item.ecode))])]),a("v-flex",{attrs:{xs12:"",sm3:""}},[a("p",[e._v("设备名称："+e._s(e.item.ename))])])],1),a("v-layout",[a("div",{staticStyle:{float:"right",width:"1040px",height:"300px",padding:"10px 0px 0px 10px","background-color":"#FFFFFF"},attrs:{id:"echart_seven"}})]),a("div",{staticStyle:{"margin-top":"10px",border:"1px dashed rgba(0,0,0,.12)"}}),a("v-layout",[a("p",{staticClass:"headline"},[e._v("人员工时统计")])]),a("v-layout",[a("div",{staticStyle:{float:"right",width:"1040px",height:"300px",padding:"10px 0px 0px 10px","background-color":"#FFFFFF"},attrs:{id:"echart_eight"}})]),a("v-layout",[a("div",{staticStyle:{float:"right",width:"1040px",height:"300px",padding:"10px 0px 0px 10px","background-color":"#FFFFFF"},attrs:{id:"echart_nine"}})])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.detailtimeClosed()}}},[e._v("关闭")])],1)],1)],1)},g=[],y=new h["a"](new m["a"]),w={name:"executeTaskTimeDetail",data:function(){return{status:"",statusList:[{name:"进行中",value:1},{name:"按时完成",value:2},{name:"超期完成",value:3}],title:"保养工单执行统计详情",headers:[{text:"序号",align:"center",sortable:!1},{text:"工单编号",align:"center",sortable:!1,value:"code"},{text:"设备编号",align:"center",sortable:!1,value:"ecode"},{text:"设备名称",align:"center",sortable:!1,value:"ename"},{text:"保养时间",align:"center",sortable:!1,value:"actaulTime"},{text:"标准保养时间",align:"center",sortable:!1,value:"spendTime"},{text:"保养人",align:"center",sortable:!1,value:"userName"}],total:1,currentparams:{},FormatFields:y.getFormatFields(),dataSource:[],params:{},item:{code:"",ename:"",ecode:""},echartSeven:null,echartEight:null,echartNine:null,standardList:[],standName:"",userName:""}},components:{dataTable:d["a"]},methods:{detailtimeClosed:function(){this.status="",this.standName="",this.userName="",this.dataSource=[],this.params=[],this.standardList=[],this.item={code:"",ename:"",ecode:""},this.initSeven(),this.initEight({content:"人员工时统计详情"}),this.initNine({content:"人员保养项统计详情"}),this.$emit("detailtimeClosed")},initialize:function(e){var t=this;e&&null!=e.page&&(this.currentparam=e);var a=this.currentparam,i=a.page,n=a.rowsPerPage;t.params.status=t.status,this.$Server.queryAll("MainTaskStatic",{page:i,rowsPerPage:n},t.params).then((function(e){e.datas&&e.datas[0]&&e.datas[0].taskList&&(t.dataSource=e.datas[0].taskList,t.total=e.datas[0].taskList.length)}))},changeType:function(){var e=this.currentparam.page;1==e?this.initialize():this.$refs.childDataTable.setPage(1)},doSearch:function(e){this.params=e;var t=this.currentparam.page;1==t?this.initialize():this.$refs.childDataTable.setPage(1)},rowDbClick:function(e){this.standName="",this.userName="",this.item=JSON.parse(JSON.stringify(e)),this.initSeven(),this.initEight({content:"人员工时统计详情"}),this.initNine({content:"人员保养项统计详情"})},initSeven:function(){var e=this;this.$Server.queryAll("MainTaskStatic",{},{content:"工单保养项",taskDetail:e.item.id}).then((function(t){var a=[],i=[],n=[];if(t.datas&&t.datas[0]&&t.datas[0].statisticList){var s=t.datas[0].statisticList;e.standardList=JSON.parse(JSON.stringify(s)),s.forEach((function(e){a.push(e.itemName),i.push(e.itemValue),n.push(e.itemKey)}))}e.initEchartForSeven(a,i,n)}))},initEight:function(e){var t=this;this.$Server.queryAll("MainTaskStatic",{},e).then((function(e){var a=[],i=[],n=0,s=0;if(e.datas&&e.datas[0]&&e.datas[0].statisticList){var r=e.datas[0].statisticList;r.forEach((function(e){a.push(e.itemName),i.push(e.itemValue),n=parseInt(n)+parseInt(e.itemValue)})),s=r[0].itemKey,n/=a.length}t.initEchartForEight(a,i,t.standName,n,s)}))},initNine:function(e){var t=this;this.$Server.queryAll("MainTaskStatic",{},e).then((function(e){var a=[],i=[],n=0,s=0;if(e.datas&&e.datas[0]&&e.datas[0].statisticList){var r=e.datas[0].statisticList;r.forEach((function(e){a.push(e.itemName),i.push(e.itemValue),n=parseInt(n)+parseInt(e.itemValue)})),s=r[0].itemKey,n/=a.length}t.initEchartForNine(a,i,t.userName,n,s)}))},initEchartForSeven:function(e,t,a){var i=this;i.echartSeven=this.$echarts.init(document.getElementById("echart_seven")),this.echartSeven.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["标准工时","实际工时"],right:40},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:{name:"单位：Min",type:"value"},series:[{color:"#1fcf88",name:"标准工时",type:"bar",barMaxWidth:window.infoConfig.barMaxWidth,data:t},{color:"#487de9",name:"实际工时",type:"bar",barMaxWidth:window.infoConfig.barMaxWidth,data:a}]}),i.echartSeven.on("dblclick",(function(e){e.seriesName;var t=e.name;i.standName=t;var a=i.standardList.find((function(e){return e.itemName==t})),n={content:"人员工时统计详情",beginTime:i.params.beginTime,endTime:i.params.endTime,standDetail:a.id};i.initEight(n)}))},initEchartForEight:function(e,t,a,i,n){var s=this;s.echartEight=this.$echarts.init(document.getElementById("echart_eight")),this.echartEight.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},title:{subtext:"保养项："+a,x:"left"},legend:{data:["平均保养时间"],right:40},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:{name:"单位：Min",type:"value",axisLabel:{formatter:"{value}"},max:function(e){return n>i?e.max>n?Math.ceil(e.max):Math.ceil(n):e.max>i?Math.ceil(e.max):Math.ceil(i)}},series:[{color:"#fe6d4b",name:"平均保养时间",type:"bar",barMaxWidth:window.infoConfig.barMaxWidth,data:t,markLine:{symbol:"none",silent:!0,data:[{name:"标准保养时间",yAxis:n,lineStyle:{color:"red"},label:{normal:{position:"end",formatter:"标准保养时间("+n+")",textStyle:{fontSize:10}}}}]}}]}),s.echartEight.on("dblclick",(function(e){var t=e.name,a=s.standardList.find((function(e){return e.itemName==s.standName}));s.userName=t;var i={content:"人员保养项统计详情",beginTime:s.params.beginTime,endTime:s.params.endTime,standDetail:a.id,userName:t};s.initNine(i)}))},initEchartForNine:function(e,t,a,i,n){var s=this;s.echartNine=this.$echarts.init(document.getElementById("echart_nine")),this.echartNine.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},title:{subtext:"保养人员："+a,x:"left"},legend:{data:["平均保养时间"],right:40},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:{name:"单位：Min",type:"value",axisLabel:{formatter:"{value}"},max:function(e){return n>i?e.max>n?Math.ceil(e.max):Math.ceil(n):e.max>i?Math.ceil(e.max):Math.ceil(i)}},series:[{color:"#ffcb99",name:"平均保养时间",type:"bar",barMaxWidth:window.infoConfig.barMaxWidth,data:t,markLine:{symbol:"none",silent:!0,data:[{name:"标准保养时间",yAxis:n,lineStyle:{color:"red"},label:{normal:{position:"end",formatter:"标准保养时间("+n+")",textStyle:{fontSize:10}}}}]}}]})}},props:["IsShowTime","executeTime"]},S=w,O=Object(b["a"])(S,T,g,!1,null,"5b8bfa7a",null),C=O.exports,_=a("6bf2"),k=a.n(_),N={name:"executeStatistics",data:function(){return{contentTypeList:[{name:"工厂",value:"工厂"},{name:"车间/仓库",value:"车间"},{name:"产线/库位",value:"产线"},{name:"设备类型",value:"设备类型"},{name:"设备",value:"设备"}],contentType:"工厂",stationTypeList:[],stationType:"",taskTimeTypeList:[{name:"周"},{name:"月"},{name:"年"}],taskTimeType:"月",beginTime:k()((new Date).setMonth((new Date).getMonth()-1)).format("YYYY-MM-DD"),endTime:k()(new Date).format("YYYY-MM-DD"),echartOne:null,echartTwo:null,echartThree:null,repairStaType:"",repairStaTypeList:[],repairTimeType:"周",repairContent:"工厂",IsShow:!1,contentName:"",detailItem:{},planList:[],IsShowTime:!1,btnMessage:"显示数值",showMsg:!1,executeTime:""}},components:{datePicker:l["a"],executeTaskDetail:x,executeTaskTimeDetail:C},mounted:function(){this.initialize()},methods:{computeTime:function(){var e=this;e.executeTime="",e.beginTime&&e.endTime&&e.endTime.length>0&&e.beginTime.length>0?e.executeTime=e.beginTime+" 到 "+e.endTime:e.beginTime&&e.endTime&&0==e.endTime.length?e.executeTime=e.beginTime:e.beginTime&&0==e.beginTime.length&&e.endTime&&e.endTime.length>0&&(e.executeTime=e.endTime)},showMessage:function(){1==this.showMsg?(this.showMsg=!1,this.btnMessage="显示数值"):(this.showMsg=!0,this.btnMessage="隐藏数值"),this.initOne(),this.initTwo(),this.initThree()},detailClosed:function(){this.IsShow=!1},detailtimeClosed:function(){this.IsShowTime=!1},initialize:function(){this.initOne(),this.initTwo(),this.initThree()},doSearch:function(){this.computeTime(),this.initOne(),this.initTwo(),this.initThree()},changeOne:function(){this.computeTime(),this.stationType="",this.initOne()},changeOneType:function(){this.computeTime(),this.initOne()},changeTwo:function(){this.computeTime(),this.repairStaType="",this.initTwo()},changeTwoType:function(){this.computeTime(),this.initTwo()},changeThree:function(){this.computeTime(),this.initThree()},initOne:function(){var e=this;this.$Server.queryAll("MainTaskStatic",{},{content:"工单执行",contentType:e.contentType,stationType:e.stationType,beginTime:e.beginTime,endTime:e.endTime}).then((function(t){var a=[],i=[],n=[],s=[],r=[],l=[];t.datas&&t.datas[0]&&(e.planList=t.datas[0].planList,t.datas[0].planList.forEach((function(e){a.push(e.itemName),i.push(e.itemValue),l.push({name:e.itemName,id:e.itemKey})})),void 0!=e.stationType&&null!=e.stationType&&0!=e.stationType.length||(e.stationTypeList=l),t.datas[0].actualList.forEach((function(e){n.push(e.itemValue)})),t.datas[0].actualRateList.forEach((function(e){s.push(e.itemValue)})),t.datas[0].completeRateList.forEach((function(e){r.push(e.itemValue)}))),e.initEchartForOne(a,i,n,s,r,e.showMsg)}))},initOneDetail:function(){var e=this;this.$$Server.queryAll("MainTaskStatic",{contentName:e.contentName,contentType:e.contentType,stationType:e.stationType,beginTime:e.beginTime,endTime:e.endTime}).then((function(e){}))},initTwo:function(){var e=this;this.$Server.queryAll("MainTaskStatic",{},{content:"维修趋势",beginTime:e.beginTime,endTime:e.endTime,repairTimeType:e.repairTimeType,repairStaType:e.repairStaType,repairContent:e.repairContent}).then((function(t){var a=[],i=[],n=[],s=[];if(t.datas&&t.datas[0]){var r=t.datas[0];r.mainRepairList&&r.mainRepairList.forEach((function(e){a.push(e.itemName),i.push(e.itemValue)})),t.datas.forEach((function(e){s.push(e.mainRepairList[0].itemKey)})),r.actualList&&r.actualList.forEach((function(e){n.push({id:e.itemValue,name:e.itemName})})),void 0!=e.repairStaType&&null!=e.repairStaType&&0!=e.repairStaType.length||(e.repairStaTypeList=n)}e.initEchartForTwo(a,e.showMsg,e.functionNodname(t.datas),s)}))},initThree:function(){var e=this;this.$Server.queryAll("MainTaskStatic",{},{content:"工时统计",beginTime:e.beginTime,endTime:e.endTime,taskTimeType:e.taskTimeType}).then((function(t){var a=[],i=[],n=[],s=[];if(t.datas&&t.datas.length>0){var r=t.datas[0];r.spendTimeList&&r.spendTimeList.length>0&&r.spendTimeList.forEach((function(e){a.push(e.itemName),i.push(e.itemValue)})),r.taskTimeList&&r.taskTimeList.length>0&&r.taskTimeList.forEach((function(e){n.push(e.itemValue)})),r.subTimeList&&r.subTimeList.length>0&&r.subTimeList.forEach((function(e){s.push(e.itemValue)}))}e.initEchartForThree(a,i,n,s,e.showMsg)}))},initEchartForOne:function(e,t,a,i,n,s){var r=this;r.echartOne=this.$echarts.init(document.getElementById("echart_one")),this.echartOne.setOption({tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}},formatter:function(e){for(var t=e[0].name,a=0;a<e.length;a++)"line"==e[a].componentSubType?t+="<br/>"+e[a].seriesName+" : "+e[a].value+"%":t=t+"<br/>"+e[a].seriesName+" : "+e[a].value;return t}},legend:{right:80,data:["计划执行次数","实际执行次数","实际执行率","正常完成率"]},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"},boundaryGap:!0,axisLabel:{interval:0},axisTick:{alignWithLabel:!0,interval:0}}],yAxis:[{type:"value",name:"执行次数"},{type:"value",name:"执行率/完成率",axisLabel:{show:!0,interval:"auto",formatter:"{value} %"},splitLine:{show:!1}}],series:[{color:"#dee4ed",name:"计划执行次数",type:"bar",barMaxWidth:window.infoConfig.barMaxWidth,data:t,itemStyle:{normal:{label:{show:s,position:"top",textStyle:{color:"#879a87",fontSize:15}}}}},{color:"#a6d0e8",name:"实际执行次数",type:"bar",barMaxWidth:window.infoConfig.barMaxWidth,data:a,itemStyle:{normal:{label:{show:s,position:"top",textStyle:{color:"black",fontSize:15}}}}},{color:"#1567c3",name:"实际执行率",type:"line",yAxisIndex:1,data:i,itemStyle:{normal:{label:{show:s,position:"top",textStyle:{fontSize:15}}}}},{color:"#2db042",name:"正常完成率",type:"line",yAxisIndex:1,data:n,itemStyle:{normal:{label:{show:s,position:"top",textStyle:{fontSize:15}}}}}]}),r.echartOne.on("dblclick",(function(e){r.computeTime();var t=e.seriesName;r.contentName=e.name,"实际执行次数"==t&&(r.IsShow=!0);var a={content:"工单详情",contentName:r.contentName,contentType:r.contentType,stationType:r.stationType,beginTime:r.beginTime,endTime:r.endTime},i=r.planList.find((function(e){return e.itemName==r.contentName})),n={name:r.contentName,executeTime:r.executeTime,planCount:i.itemValue,actual:e.value};r.detailItem=n,r.$refs.executeTaskDetail.doSearch(a)}))},functionNodname:function(e){var t=[];if(e&&e.length>0)for(var a=0;a<e.length;a++){for(var i=[],n=e[a].mainRepairList,s=0;n.length>s;s++)i.push(n[s].itemValue);var r={name:e[a].mainRepairList[0].itemKey,type:"line",data:i,itemStyle:{normal:{label:{show:this.showMsg,position:"top",textStyle:{fontSize:15}}}}};t.push(r)}return t},initEchartForTwo:function(e,t,a,i){var n=this;n.echartTwo=this.$echarts.init(document.getElementById("echart_two"));var s={color:["#2968ae","#ec6941","#22ac38"],tooltip:{trigger:"axis",axisPointer:{show:!0,type:"cross"}},legend:{right:80,data:i},xAxis:{type:"category",data:e},yAxis:{type:"value",name:"维修次数"},series:a};n.echartTwo.setOption(s,!0)},initEchartForThree:function(e,t,a,i,n){var s=this;s.echartThree=this.$echarts.init(document.getElementById("echart_three")),this.echartThree.setOption({color:["#dee4ed","#a6d0e8","#155aa7"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){for(var t=e[0].name,a=0;a<e.length;a++)"line"==e[a].componentSubType?t+="<br/>"+e[a].seriesName+" : "+e[a].value+"%":t=t+"<br/>"+e[a].seriesName+" : "+e[a].value;return t}},legend:{right:80,data:["标准工时","实际工时","工时比率"]},xAxis:[{type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"小时"},{type:"value",axisLabel:{show:!0,interval:"auto",formatter:"{value} %"},splitLine:{show:!1}}],series:[{name:"标准工时",type:"bar",barMaxWidth:window.infoConfig.barMaxWidth,data:t,itemStyle:{normal:{label:{show:n,position:"top",textStyle:{color:"#879a87",fontSize:15}}}}},{name:"实际工时",type:"bar",barMaxWidth:window.infoConfig.barMaxWidth,data:a,itemStyle:{normal:{label:{show:n,position:"top",textStyle:{color:"#a6b9c5",fontSize:15}}}}},{name:"工时比率",type:"line",data:i,yAxisIndex:1,itemStyle:{normal:{label:{show:n,position:"top",textStyle:{fontSize:15}}}}}]}),s.echartThree.on("dblclick",(function(e){s.computeTime();var t=e.seriesName,a=e.name;"实际工时"==t&&(s.IsShowTime=!0);var i={content:"工时详情",taskTimeType:s.taskTimeType,beginTime:s.beginTime,endTime:s.endTime,timeValue:a};s.$refs.executeTaskTimeDetail.doSearch(i)}))}}},L=N,j=(a("4548"),a("f199"),Object(b["a"])(L,s,r,!1,null,"6e94881e",null)),M=j.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"box mar-t22"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-layout",{staticClass:"box-header",staticStyle:{height:"50px",overflow:"hidden"},attrs:{"align-center":""}},[a("v-flex",{staticStyle:{flex:"unset"}},[a("div",{staticClass:"title-0"},[e._v("人员保养统计")])]),a("div",{staticClass:"label-title"},[e._v("维度:")]),a("v-flex",{staticClass:"width280",staticStyle:{flex:"unset"}},[a("v-select",{staticClass:"self-select",attrs:{items:e.items,"item-text":"name","item-value":"value"},model:{value:e.dimension,callback:function(t){e.dimension=t},expression:"dimension"}})],1),a("div",{staticClass:"label-title"},[e._v("时间:")]),a("v-flex",{staticClass:"width280",staticStyle:{flex:"unset"}},[a("datePicker",{attrs:{required:!1,rules:[function(e){return!!e||"必填项"}],prependIcon:"star",locale:"zh-cn"},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}})],1),a("div",{staticClass:"label-title"},[e._v("到")]),a("v-flex",{staticClass:"width280",staticStyle:{flex:"unset"}},[a("datePicker",{attrs:{required:!1,rules:[function(e){return!!e||"必填项"},function(t){return new Date(t)>new Date(e.startTime)||"结束时间应该大于开始时间"}],prependIcon:"star",locale:"zh-cn"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}})],1),a("v-flex",{staticStyle:{flex:"unset"}},[a("v-btn",{staticClass:"btn-0",attrs:{depressed:"",small:""},on:{click:e.doSearch}},[e._v("查询")]),a("v-btn",{staticClass:"btn-0",attrs:{depressed:"",small:""},on:{click:e.handelShowLabel}},[e._v(e._s(e.showLabel?"隐藏数据":"显示数据"))])],1)],1)],1),e._m(0)],1),e._m(1)])},E=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box-body"},[a("div",{staticStyle:{width:"1600px",height:"350px"},attrs:{id:"chat1"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bottom-wrap mar-t22"},[a("div",{staticClass:"b-left box bg-fff"},[a("div",{staticClass:"b-left-h box-header flex-header bg-fff bor-b0"},[a("div",{staticClass:"title-0"},[e._v("人员工时统计")])]),a("div",{staticStyle:{width:"990px",height:"350px"},attrs:{id:"chat2"}})]),a("div",{staticClass:"b-right box",staticStyle:{"margin-left":"-1px"}},[a("div",{staticClass:"box-header flex-header bor-b0"},[a("div",{staticClass:"title-0"},[e._v("保养后维修统计")])]),a("div",{staticStyle:{width:"660px",height:"350px"},attrs:{id:"chat3"}})])])}],D=(a("63ff"),a("f8f9")),I=a("d5b3"),q={name:"membersStatistics",data:function(){return{valid:!0,dimension:"time",startTime:k()((new Date).setMonth((new Date).getMonth()-1)).format("YYYY-MM-DD"),endTime:k()(new Date).format("YYYY-MM-DD"),items:[{name:"时间",value:"time"},{name:"执行次数",value:"number"}],chatOne:"",chatTwo:"",chatThree:"",showLabel:!1,option1:{},option2:{},option3:{}}},components:{datePicker:l["a"]},methods:{handelShowLabel:function(){var e=this;this.showLabel=!this.showLabel,this.option1.series.forEach((function(t){return t.label.show=e.showLabel})),this.chatOne.setOption(this.option1),this.option2.series.forEach((function(t){return t.label.show=e.showLabel})),this.chatTwo.setOption(this.option2),this.option3.series.forEach((function(t){return t.label.show=e.showLabel})),this.chatThree.setOption(this.option3)},doSearch:function(){this.$refs.form.validate()&&this.getChatInfo()},initChat:function(){this.chatOne=this.$echarts.init(document.getElementById("chat1")),this.chatTwo=this.$echarts.init(document.getElementById("chat2")),this.chatThree=this.$echarts.init(document.getElementById("chat3"))},initChatOne:function(e,t,a){var i=this;this.option1={xAxis:{type:"category",data:e,axisLabel:{color:"#8b8f98",rotate:"30"}},yAxis:{type:"value",name:"time"===i.dimension?"时间(小时)":"次数(次)"},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:"time"===i.dimension?["计划保养时间","实际保养时间"]:["计划执行次数","实际执行次数"],right:80},series:[{color:"#dee4ed",name:"time"===i.dimension?"计划保养时间":"计划执行次数",data:t,type:"bar",barMaxWidth:window.infoConfig.barMaxWidth,label:{show:!1,position:"top"}},{color:"#4cbcf0",name:"time"===i.dimension?"实际保养时间":"实际执行次数",data:a,type:"bar",barMaxWidth:window.infoConfig.barMaxWidth,label:{show:!1,position:"top"}}]},this.chatOne.setOption(this.option1)},initChatTwo:function(e,t){this.option2={xAxis:{type:"category",data:e,axisLabel:{color:"#8b8f98",rotate:"30"}},yAxis:{type:"value",name:"工时(小时)"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{right:20,data:["人员工时统计"]},series:[{color:"#dee4ed",name:"人员工时统计",type:"bar",barMaxWidth:window.infoConfig.barMaxWidth,data:t,label:{show:!1,position:"top"},itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},this.chatTwo.setOption(this.option2)},initChatThree:function(e,t){this.option3={xAxis:{type:"category",data:e,axisLabel:{color:"#8b8f98",rotate:"30"}},yAxis:[{type:"value",name:"维修次数"},{type:"value",name:"维修率",boundaryGap:[.2,.2],axisLabel:{formatter:function(e){return 100*e+"%"}},min:0,max:1}],tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["维修数量"],right:80},series:[{color:"#ff7052",name:"维修数量",data:t,type:"bar",barMaxWidth:window.infoConfig.barMaxWidth,label:{show:!1,position:"top"}}]},this.chatThree.setOption(this.option3)},getChatInfo:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(){var t,a,i,n,s,r,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],a=[],i=[],n=[],s=[],r=[],e.next=8,this.$Server.queryAll("MaintainPersonStatistic",null,{queryType:this.dimension,startTime:this.startTime,endTime:this.endTime}).catch(I["a"].alert);case 8:l=e.sent,t=l.datas.map((function(e){return e.userName})),a=l.datas.map((function(e){return e.totalPlanTime})),i=l.datas.map((function(e){return e.totalActualTime})),n=l.datas.map((function(e){return e.repairNumber})),s=l.datas.map((function(e){return e.planExcute})),r=l.datas.map((function(e){return e.actuaExcute})),"time"===this.dimension?this.initChatOne(t,a,i):this.initChatOne(t,s,r),this.initChatTwo(t,i),this.initChatThree(t,n);case 18:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),formatToPie:function(e,t){var a=this,i=e.map((function(e,a){return{name:e,time:t[a]}})),n=i.map((function(e){return a.getObj(e.time,e.name)}));return n},getObj:function(e,t){return{value:e,name:t,label:{formatter:e+"H"}}}},mounted:function(){this.initChat(),this.getChatInfo()}},A=q,$=(a("ab85"),a("9da1"),Object(b["a"])(A,F,E,!1,null,"6eb2db0c",null)),P=$.exports,z={name:"MaintainStatistics",data:function(){return{active:0}},components:{MembersStatistics:P,ExecuteStatistics:M}},W=z,V=(a("2e69"),Object(b["a"])(W,i,n,!1,null,"477eab25",null));t["default"]=V.exports},"0d7a":function(e,t,a){},"1e26":function(e,t,a){},"1e7d":function(e,t,a){},"2e69":function(e,t,a){"use strict";var i=a("7176"),n=a.n(i);n.a},"341e":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var i=a("7300"),n=a("5873"),s=a("ddf2"),r=a("80ea"),l=a("ae0a"),o=a("97a3"),c=a("652a"),d=a("1269"),m=a("a7fe"),h=new c["a"],u=function(e){function t(){var e,a;Object(i["a"])(this,t);for(var l=arguments.length,c=new Array(l),d=0;d<l;d++)c[d]=arguments[d];return a=Object(n["a"])(this,(e=Object(s["a"])(t)).call.apply(e,[this].concat(c))),Object(o["a"])(Object(r["a"])(a),"__name","MaintenancePlan"),Object(o["a"])(Object(r["a"])(a),"id",h.charField({require:!1,visible:!1,fieldName:"id",editable:!1})),Object(o["a"])(Object(r["a"])(a),"code",h.charField({require:!1,visible:!0,fieldName:"保养计划编号",maxLength:36,rules:[function(e){return!e||/^[\w|-]+$/.test(e)||"只能是数字,字母,下划线"}]})),Object(o["a"])(Object(r["a"])(a),"name",h.charField({require:!0,visible:!0,fieldName:"保养计划名称",maxLength:36})),Object(o["a"])(Object(r["a"])(a),"isAutoChinese",h.charField({require:!1,visible:!0,fieldName:"生成方式",editable:!1})),Object(o["a"])(Object(r["a"])(a),"constructByChinese",h.charField({require:!1,visible:!0,fieldName:"生成维度",editable:!1})),Object(o["a"])(Object(r["a"])(a),"startDate",h.dateField({require:!0,editable:!0,fieldName:"计划开始时间",visible:!0,menu:"purchase",format:function(e){if(e)return e.substring(0,10)}})),Object(o["a"])(Object(r["a"])(a),"endDate",h.dateField({require:!0,editable:!0,fieldName:"计划结束时间",visible:!0,menu:"purchase",format:function(e){if(e)return e.substring(0,10)}})),Object(o["a"])(Object(r["a"])(a),"actualStartDate",h.dateField({require:!1,fieldName:"实际开始时间",visible:!0,editable:!1,menu:"purchase",format:function(e){if(e)return e.substring(0,10)}})),Object(o["a"])(Object(r["a"])(a),"actualEndDate",h.dateField({require:!1,fieldName:"实际结束时间",visible:!0,editable:!1,menu:"purchase",format:function(e){if(e)return e.substring(0,10)}})),Object(o["a"])(Object(r["a"])(a),"equipmentViewModelList",h.charField({require:!0,visible:!1,fieldName:"设备列表",editable:!1})),Object(o["a"])(Object(r["a"])(a),"generation",h.charField({require:!0,visible:!1,fieldName:"生成方式",editable:!1})),Object(o["a"])(Object(r["a"])(a),"statusName",h.charField({require:!0,visible:!0,fieldName:"状态",editable:!1})),Object(o["a"])(Object(r["a"])(a),"status",h.comboBoxField(m["a"],{require:!0,visible:!1,editable:!1,fieldName:"状态",bindSource:{parms:{dname:"状态"}},format:function(e){if(null!=e&&null!=e.dname)return e.dname}})),a}return Object(l["a"])(t,e),t}(d["a"])},"44af":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var i=a("7300"),n=a("5873"),s=a("ddf2"),r=a("80ea"),l=a("ae0a"),o=a("97a3"),c=a("652a"),d=a("1269"),m=a("341e"),h=new c["a"],u=function(e){function t(){var e,a;Object(i["a"])(this,t);for(var l=arguments.length,c=new Array(l),d=0;d<l;d++)c[d]=arguments[d];return a=Object(n["a"])(this,(e=Object(s["a"])(t)).call.apply(e,[this].concat(c))),Object(o["a"])(Object(r["a"])(a),"__name","MaintainTask"),Object(o["a"])(Object(r["a"])(a),"code",h.charField({require:!0,fieldName:"保养单编号"})),Object(o["a"])(Object(r["a"])(a),"maintenancePlanId",h.comboBoxField(m["a"],{require:!0,editable:!0,visible:!1,fieldName:"保养计划",bindSource:{text:"name",value:"id",parms:{}}})),Object(o["a"])(Object(r["a"])(a),"planName",h.charField({require:!1,fieldName:"保养计划名称",editable:!1})),Object(o["a"])(Object(r["a"])(a),"ecode",h.charField({require:!1,fieldName:"设备编号",editable:!1})),Object(o["a"])(Object(r["a"])(a),"ename",h.charField({require:!1,fieldName:"设备名称",editable:!1})),Object(o["a"])(Object(r["a"])(a),"eposition",h.charField({require:!1,fieldName:"设备位置",editable:!1})),Object(o["a"])(Object(r["a"])(a),"originalEndDate",h.dateField({fieldName:"原保养时间",editable:!1,visible:!0,format:function(e){if(e)return e.substring(0,10)}})),Object(o["a"])(Object(r["a"])(a),"startTime",h.dateField({fieldName:"保养时间",editable:!1,format:function(e){if(e)return e.substring(0,10)}})),Object(o["a"])(Object(r["a"])(a),"actualStartDate",h.dateField({require:!1,fieldName:"实际保养时间",editable:!1,visible:!0})),Object(o["a"])(Object(r["a"])(a),"actualEndDate",h.dateField({require:!1,fieldName:"实际保养结束时间",editable:!1,visible:!1})),Object(o["a"])(Object(r["a"])(a),"endDate",h.charField({require:!1,fieldName:"保养结束时间",editable:!1,visible:!1})),Object(o["a"])(Object(r["a"])(a),"assignedUser",h.comboBoxField(null,{require:!0,fieldName:"负责人",editable:!0,visible:!1,comboboxSelect:[],text:"uname",value:"id"})),Object(o["a"])(Object(r["a"])(a),"userName",h.charField({require:!1,fieldName:"负责人",editable:!1})),Object(o["a"])(Object(r["a"])(a),"statusName",h.charField({fieldName:"任务状态"})),Object(o["a"])(Object(r["a"])(a),"status",h.comboBoxField(null,{require:!0,fieldName:"任务状态",visible:!1,editable:!1,format:function(e){if(null!=e&&null!=e.dname)return e.dname}})),Object(o["a"])(Object(r["a"])(a),"userList",h.charField({require:!1,visible:!1,editable:!1})),Object(o["a"])(Object(r["a"])(a),"recordList",h.charField({require:!1,visible:!1,editable:!1})),Object(o["a"])(Object(r["a"])(a),"editAssignedUser",h.charField({require:!1,visible:!1})),a}return Object(l["a"])(t,e),t}(d["a"])},4548:function(e,t,a){"use strict";var i=a("fbd9"),n=a.n(i);n.a},7176:function(e,t,a){},"9da1":function(e,t,a){"use strict";var i=a("0d7a"),n=a.n(i);n.a},ab85:function(e,t,a){"use strict";var i=a("1e26"),n=a.n(i);n.a},f199:function(e,t,a){"use strict";var i=a("1e7d"),n=a.n(i);n.a},fbd9:function(e,t,a){}}]);