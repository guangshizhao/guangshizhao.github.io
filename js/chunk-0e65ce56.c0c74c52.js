(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e65ce56"],{"0c10":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-form",{ref:"form1",attrs:{"lazy-validation":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{label:"取消原因",rules:[e.rules.required]},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                            取消原因: "),a("span",{staticStyle:{color:"red"}},[e._v("*")])]},proxy:!0}]),model:{value:e.item.cancelReason,callback:function(t){e.$set(e.item,"cancelReason",t)},expression:"item.cancelReason"}})],1)],1)],1)],1)],1)},i=[],s=(a("d5b3"),{name:"CancelTask",data:function(){return{rules:{required:function(e){return!!e||"必填项"}}}},props:["item"],methods:{validate:function(){return 1==this.$refs.form1.validate()},resetValid:function(){this.$refs.form1.resetValidation(),this.$refs.form1.reset()}}}),o=s,n=a("6691"),l=Object(n["a"])(o,r,i,!1,null,"058eafcc",null);t["a"]=l.exports},edaa:function(e,t,a){"use strict";a.r(t);var r,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("layContentHeader",{attrs:{title:"持续改善",buttons:e.headerBtns}},[a("v-text-field",{staticStyle:{width:"440px"},attrs:{label:"输入改善单编号、负责人、问题来源、状态","hide-details":"","single-line":"",primary:"",clearable:""},on:{"click:clear":e.clearMessage},scopedSlots:e._u([{key:"append-outer",fn:function(){return[a("v-icon",{on:{click:function(t){return e.doSearch()}}},[e._v("search")])]},proxy:!0}]),model:{value:e.searchfx,callback:function(t){e.searchfx=t},expression:"searchfx"}})],1),a("layContent",[a("dataTable",{ref:"childDataTable",attrs:{headers:e.headers,sort:e.sort,DataSource:e.DataSource,hideOperation:!0,formatFields:e.formatFields,total:e.total},on:{rowDbClick:e.rowDbClick,initialize:e.initTable}}),a("contentModal",{attrs:{title:e.title,IsShow:e.IsShow,width:"1100"},on:{modalClosed:function(t){return e.modalClosed()},modalComfirmed:function(t){return e.modalComfirmed()}}},[a("improveApplyDetail",{ref:"addOrUpdate",attrs:{item:e.detailForUpdate}})],1),a("contentModal",{attrs:{title:"查看详情",IsShow:e.IsShowForSee,width:"1100",isDetails:!0},on:{modalClosed:function(t){return e.modalClosedForSee()}}},[a("improveApplyReportDetailSee",{ref:"See",attrs:{item:e.detailForUpdate}})],1),a(e.currentView,{ref:"componentForm",tag:"component",attrs:{PreviewType:e.PreviewType,objectId:e.objectId},on:{modalComfirmed:e.formComfirmed}}),a("contentModal",{attrs:{title:"取消原因",IsShow:e.IsShowCancelTask,width:"1100"},on:{modalComfirmed:function(t){return e.modalComfirmedCancelTask()},modalClosed:function(t){return e.modalClosedCancelTask()}}},[a("CancelTask",{ref:"CancelTask",attrs:{item:e.detailForUpdate}})],1),a("distribute-user",{attrs:{title:"分配负责人",IsShow:e.IsShowDistribute,allowActive:!1,width:1400},on:{modalClosed:function(t){return e.modalClosedUser()},modalComfirmed:function(t){return e.modalComfirmedUser()}}},[a("simpleDataTable",{ref:"childDataTable1",attrs:{headers:e.userHeaders,items:e.userDataSource,hideOperation:!0,hideHeaders:!1,total:e.total2},on:{selectChangeForSave:e.selectChangeForSave,chooseAssignedUser:e.chooseAssignedUser}})],1)],1)],1)},s=[],o=a("97a3"),n=(a("4634"),a("e6d1"),a("de90"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-dialog",{attrs:{"max-width":"1100px",persistent:!0,scrollable:""},model:{value:e.IsShow,callback:function(t){e.IsShow=t},expression:"IsShow"}},[a("v-card",[a("v-card-title",{staticClass:"primary"},[a("span",{staticClass:"headline",staticStyle:{color:"#fff"}},[e._v("分配负责人")])]),a("v-card-text",[e._t("default")],2),a("v-card-actions",{staticClass:"marginbottom"},[a("v-spacer"),a("v-btn",{staticStyle:{"margin-right":"30px"},attrs:{color:"primary"},on:{click:function(t){return e.modalComfirmed()}}},[e._v("一键分配")]),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.modalClosed()}}},[e._v("关闭")])],1)],1)],1)],1)}),l=[],d={name:"distributeUser",props:["IsShow"],methods:{modalClosed:function(){this.$emit("modalClosed")},modalComfirmed:function(){this.$emit("modalComfirmed")}}},c=d,u=a("6691"),m=Object(u["a"])(c,n,l,!1,null,"45f2bb37",null),p=m.exports,f=a("52d6"),h=a("0c10"),v=a("7300"),b=a("5873"),g=a("ddf2"),S=a("80ea"),w=a("ae0a"),x=a("652a"),O=a("1269"),T=a("a7fe"),I=new x["a"],y=function(e){function t(){var e,a;Object(v["a"])(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return a=Object(b["a"])(this,(e=Object(g["a"])(t)).call.apply(e,[this].concat(i))),Object(o["a"])(Object(S["a"])(a),"__name","ImproveApply"),Object(o["a"])(Object(S["a"])(a),"code",I.charField({require:!0,fieldName:"改善单编号",rules:[function(e){return!!e||"必填项"}]})),Object(o["a"])(Object(S["a"])(a),"generationName",I.charField({editable:!1,fieldName:"生成方式"})),Object(o["a"])(Object(S["a"])(a),"source",I.comboBoxField(T["a"],{require:!0,fieldName:"问题来源",format:function(e){if(null!=e&&null!=e.dname)return e.dname}})),Object(o["a"])(Object(S["a"])(a),"subject",I.charField({editable:!1,fieldName:"改善主题",visible:!0})),Object(o["a"])(Object(S["a"])(a),"equipmentNameList",I.charField({editable:!1,fieldName:"改善设备",visible:!0})),Object(o["a"])(Object(S["a"])(a),"reason",I.charField({editable:!1,fieldName:"改善原因",visible:!0})),Object(o["a"])(Object(S["a"])(a),"actualStartDate",I.dateField({require:!0,fieldName:"任务发起时间",format:function(e){if(e)return e.substring(0,10)}})),Object(o["a"])(Object(S["a"])(a),"actualEndDate",I.dateField({require:!0,fieldName:"任务结束时间",format:function(e){if(e)return e.substring(0,10)}})),Object(o["a"])(Object(S["a"])(a),"initiatorName",I.charField({editable:!1,fieldName:"发起人",visible:!0})),Object(o["a"])(Object(S["a"])(a),"assignedUserName",I.charField({editable:!1,fieldName:"负责人",visible:!0})),Object(o["a"])(Object(S["a"])(a),"status",I.comboBoxField(T["a"],{require:!0,fieldName:"状态",visible:!1,format:function(e){if(null!=e&&null!=e.dname)return e.dname}})),Object(o["a"])(Object(S["a"])(a),"statusName",I.charField({editable:!1,fieldName:"任务状态"})),a}return Object(w["a"])(t,e),t}(O["a"]),F=a("d5b3"),U=a("8333"),C=a("a2a7"),j=a("f05f"),D=a("681f"),$=a("531b"),M=a("d0da"),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("improveApplySee",{attrs:{item:e.improveApply}}),a("v-container",{staticStyle:{backgraound:"white"},attrs:{"grid-list-md":""}},[a("v-layout",{staticStyle:{padding:"0 20px"},attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("p",{staticClass:"title"},[e._v("改善报告")])])],1),a("v-layout",{staticStyle:{padding:"0 20px"},attrs:{row:"",wrap:""}},[e.improveReport.improveTeamViewModelList[0]?a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[e._v("\n        改善小组成员\n      ")]):e._e(),a("v-flex",{attrs:{xs12:""}},[e.improveReport.improveTeamViewModelList[0]?a("simpleDataTable",{ref:"improveTeamRef",attrs:{headers:e.improveTeamHeader,hideHeaders:!1,items:e.improveReport.improveTeamViewModelList,hideOperation:!0}}):e._e()],1)],1),a("v-layout",{staticStyle:{padding:"0 20px"},attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[e.improveReport.problemDescription?a("v-text-field",{attrs:{label:"问题描述",disabled:""},model:{value:e.improveReport.problemDescription,callback:function(t){e.$set(e.improveReport,"problemDescription",t)},expression:"improveReport.problemDescription"}}):e._e()],1),e.improveReport.documentViewModelList.length>0?a("v-flex",{attrs:{xs12:""}},[a("v-btn",{on:{click:function(t){return e.downloadDocument()}}},[e._v("下载")])],1):e._e()],1),a("v-layout",{staticStyle:{padding:"0 20px"},attrs:{row:"",wrap:""}},[e.improveReport.improveStepViewModelList[0]?a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[e._v("\n        操作层面\n      ")]):e._e(),a("v-flex",{attrs:{xs12:""}},[e.improveReport.improveStepViewModelList[0]?a("simpleDataTable",{ref:"improveStepRef",attrs:{headers:e.improveStepHeader,hideHeaders:!1,items:e.improveReport.improveStepViewModelList,hideOperation:!0}}):e._e()],1)],1),a("v-layout",{staticStyle:{padding:"0 20px"},attrs:{row:"",wrap:""}},[e.improveReport.preventiveStepViewModelList[0]?a("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[e._v("\n        系统层面\n      ")]):e._e(),a("v-flex",{attrs:{xs12:""}},[e.improveReport.preventiveStepViewModelList[0]?a("simpleDataTable",{ref:"preventiveStepRef",attrs:{headers:e.preventiveStepHeader,hideHeaders:!1,items:e.improveReport.preventiveStepViewModelList,hideOperation:!0}}):e._e()],1)],1),e.improveReport.standardMethod?a("v-layout",{staticStyle:{padding:"0 20px"},attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-textarea",{attrs:{disabled:"",label:"标准化"},model:{value:e.improveReport.standardMethod,callback:function(t){e.$set(e.improveReport,"standardMethod",t)},expression:"improveReport.standardMethod"}})],1)],1):e._e()],1)],1)},N=[],A=a("ef3e"),V=a("ceaa"),R={name:"improveApplyReportDetailSee",data:function(){return{improveReport:{problemDescription:"",standardMethod:"",documentViewModelList:[],improveTeamViewModelList:[],preventiveStepViewModelList:[],improveStepViewModelList:[]},improveApply:{},improveTeamHeader:[{text:"工号",align:"center",sortable:!1,value:"jobNumber"},{text:"姓名",align:"center",value:"userName",sortable:!1},{text:"所属部门",align:"center",value:"organizations",sortable:!1},{text:"联系方式",align:"center",value:"phone",sortable:!1},{text:"邮箱",align:"center",value:"mail",sortable:!1},{text:"团队角色",align:"center",value:"teamRole",sortable:!1}],improveStepHeader:[{text:"原因分析",align:"center",value:"reasonAnalysis",sortable:!1},{text:"提出人",align:"center",value:"raiseUserName",sortable:!1},{text:"提出时间",align:"center",value:"raiseTime",sortable:!1},{text:"改善措施",align:"center",value:"improveAction",sortable:!1},{text:"执行人",align:"center",value:"executionUserName",sortable:!1},{text:"执行时间",align:"center",value:"executionTime",sortable:!1},{text:"改善效果",align:"center",value:"improveResult",sortable:!1},{text:"验收人",align:"center",value:"acceptanceUserName",sortable:!1},{text:"验收时间",align:"center",value:"acceptanceTime",sortable:!1}],preventiveStepHeader:[{text:"原因分析",align:"center",value:"reasonAnalysis",sortable:!1},{text:"提出人",align:"center",value:"raiseUserName",sortable:!1},{text:"提出时间",align:"center",value:"raiseTime",sortable:!1},{text:"预防措施",align:"center",value:"preventiveAction",sortable:!1},{text:"执行人",align:"center",value:"executionUserName",sortable:!1},{text:"执行时间",align:"center",value:"executionTime",sortable:!1},{text:"预防效果",align:"center",value:"preventiveResult",sortable:!1},{text:"验收人",align:"center",value:"acceptanceUserName",sortable:!1},{text:"验收时间",align:"center",value:"acceptanceTime",sortable:!1}],documentViewModelList:[]}},components:{simpleDataTable:A["a"],improveApplySee:V["a"]},created:function(){},methods:{downloadDocument:function(){var e=this,t=document.createElement("a");t.href=e.improveReport.documentViewModelList[0].document.newestFilePath,t.download=e.improveReport.documentViewModelList[0].document.dname,t.click()},init:function(e){var t=this;e&&(t.$Server.queryObjectById("ImproveApply",e).then((function(e){t.improveApply=e.data.data,t.improveApply.startTime=t.improveApply.startTime.substring(0,10),t.improveApply.endTime=t.improveApply.endTime.substring(0,10),t.improveApply.createdTime=t.improveApply.createdTime.substring(0,10)})),t.$Server.queryAll("ImproveReport",null,{improveApplyID:e}).then((function(e){e.datas.length>0&&(t.improveReport=e.datas[0],t.improveReport.preventiveStepViewModelList.forEach((function(e){e.raiseTime=e.raiseTime.substring(0,10),e.executionTime=e.executionTime.substring(0,10),e.acceptanceTime=e.acceptanceTime.substring(0,10)})),t.improveReport.improveStepViewModelList.forEach((function(e){e.raiseTime=e.raiseTime.substring(0,10),e.executionTime=e.executionTime.substring(0,10),e.acceptanceTime=e.acceptanceTime.substring(0,10)})))}),(function(e){})))}}},_=R,L=Object(u["a"])(_,k,N,!1,null,null,null),J=L.exports,P=a("8af4"),H=new U["a"](new y),q={name:"improveApply",data:function(){var e=this;return{objId:"",initObject:{id:"",code:"",initiator:"",initiatorName:"",assignedUser:"",assignedUserName:"",source:"",startTime:"",endTime:"",actualStartDate:"",actualEndDate:"",improveType:"",subject:"",reason:"",equipmentList:[],status:"",userViewModel1:{},userViewModel2:{}},userDataSource:[],IsShowDistribute:!1,total2:1,userHeaders:[{text:"改善单编号",value:"code",sortable:!1,align:"center"},{text:"改善主题",value:"subject",align:"center",sortable:!1},{text:"发起人",value:"initiatorName",align:"center",sortable:!1},{text:"分配人员",value:"assignedUser",sortable:!1,fieldType:"comboboxField",IsMultiple:!1,align:"center",comboboxSelect:"userList",itemtext:"uname",itemvalue:"id"}],IsShowCancelTask:!1,searchfx:"",sort:!0,total:1,DataSource:[],title:"",IsShow:!1,IsAddOp:!0,detailForUpdate:{},IsShowForSee:!1,titleForSee:"",headerBtns:[{disabled:!this.$per("ImproveApply","c"),text:"添加",icon:"self_add",click:function(){return e.tableAdd()}},{disabled:!this.$per("ImproveApply","u"),text:"编辑",icon:"self_edit",click:function(){return e.tableEdit()}},{disabled:!this.$per("ImproveApply","d"),text:"删除",icon:"self_delete",click:function(){return e.tableDelete()}},{disabled:!1,text:"分配负责人",icon:"self_look",click:function(){return e.chooseAssignedUser(1,10)}},{disabled:!this.$per("ImproveApply","exe"),text:"执行",icon:"self_execute",click:function(){return e.excuteTask()}},{disabled:!this.$per("ImproveApply","cancel"),text:"取消",icon:"self_cancel",click:function(){return e.cancelTask()}}],currentView:"",processKey:window.process.ImproveApply,PreviewType:1,objectId:"",IsShowForSeeResult:!1,flag:!0}},computed:{headers:function(){var e=H.formatGridHeader();return!0===this.sort&&e.unshift({text:"序号",align:"center",sortable:!1}),e},formatFields:function(){return H.getFormatFields()}},components:{contentModal:C["a"],dataTable:j["a"],improveApplyDetail:M["a"],improveApplyReportForm:P["a"],improveApplySee:V["a"],CancelTask:h["a"],DistributeUser:p,simpleDataTable:f["a"],improveApplyReportDetailSee:J},created:function(){},mounted:function(){},methods:(r={showResult:function(){var e=this;if(1!=e.$refs.childDataTable.getCheckItems().length)F["a"].alert("请选择一项作为你查看的对象");else{var t=e.$refs.childDataTable.getCheckItems()[0];"已完成"==t.status.dname?(e.detailForUpdate=Object.assign({},t),e.IsShowForSeeResult=!0):F["a"].alert("只有对已完成的持续改善任务才能查看！")}},formComfirmed:function(){this.initTable()}},Object(o["a"])(r,"showResult",(function(){this.IsShowDistribute=!0})),Object(o["a"])(r,"selectChangeForSave",(function(e){var t=JSON.parse(JSON.stringify(e));this.$Server.batchUpdate(H.getModelName(),[t]).then((function(e){e.success||F["a"].alert("分配负责人错误")}),(function(e){return F["a"].alert("分配负责人错误")}))})),Object(o["a"])(r,"modalComfirmedUser",(function(){var e=this;if(this.userDataSource.length>0){var t=[],a=sessionStorage.getItem("userId");t.push({editAssignedUser:a,code:"一键分配保养人员"}),this.$Server.batchUpdate(H.getModelName(),t).then((function(t){if(t.success){var a=e.$refs.childDataTable1.getPagination();e.chooseAssignedUser(a.page,a.rowsPerPage),F["a"].alert("负责人分配成功","success")}}),(function(e){return F["a"].alert("分配负责人失败")}))}})),Object(o["a"])(r,"modalClosedUser",(function(){this.IsShowDistribute=!1,this.initTable()})),Object(o["a"])(r,"chooseAssignedUser",(function(e,t){if(this.isFirstChoose){var a=this;this.$Server.queryAll(H.getModelName(),{page:e,rowsPerPage:t},{generation:1,status:"未开始"}).then((function(e){a.total2=e.page.total,a.userDataSource=e.datas,a.IsShowDistribute=!0}))}else this.isFirstChoose=!0})),Object(o["a"])(r,"cancelTask",(function(){var e=this,t=e.$refs.childDataTable.getCheckItems();1!=t.length?F["a"].alert("请选择一项作为你取消的对象"):"进行中"==t[0].status.dname?t[0].assignedUser!==sessionStorage.getItem("userId")?F["a"].alert("您不是该任务的负责人，不能取消"):(e.detailForUpdate=JSON.parse(JSON.stringify(t[0])),e.$refs.CancelTask.resetValid(),e.IsShowCancelTask=!0):F["a"].alert("只有对进行中的任务才能取消！")})),Object(o["a"])(r,"modalComfirmedCancelTask",(function(){var e=this;1==e.$refs.CancelTask.validate()?(e.cofirmCancel(e.detailForUpdate),e.IsShowCancelTask=!1):F["a"].alert("验证错误")})),Object(o["a"])(r,"modalClosedCancelTask",(function(){var e=this;e.IsShowCancelTask=!1})),Object(o["a"])(r,"cofirmCancel",(function(e){var t=this;$["a"].http(window.processForUrl.getUrlForInstanceId(e.id),"get","",{success:function(a){a.data&&a.data.data&&a.data.data.id?$["a"].http(window.processForUrl.getUrlForInstance(a.data.data.id),"Delete","",{success:function(a){e.status.dvalue=3,t.$Server.addOrUpdate(H.getModelName(),e,!0).then((function(e){e.success&&(t.initTable(),F["a"].alert("取消成功","success"))}),(function(e){F["a"].alert(e)}))},error:function(e){F["a"].alert(e)}}):(e.status.dvalue=3,t.$Server.addOrUpdate(H.getModelName(),e,!0).then((function(e){e.success&&(t.initTable(),F["a"].alert("取消成功","success"))}),(function(e){F["a"].alert(e)})))},error:function(e){F["a"].alert(e)}})})),Object(o["a"])(r,"getQueryStringArgs",(function(e){if(e&&e.length>0){var t=e.length>0?e.substring(1):"",a={},r=t.length?t.split("&"):[],i=null,s=null,o=null,n=0,l=r.length;for(n=0;n<l;n++)i=r[n].split("="),s=decodeURIComponent(i[0]),o=decodeURIComponent(i[1]),s.length&&(a[s]=o);return a}return{}})),Object(o["a"])(r,"excuteTask",(function(){var e=this;if(1!=e.$refs.childDataTable.getCheckItems().length)F["a"].alert("请选择一项作为你执行的对象");else{var t=e.$refs.childDataTable.getCheckItems()[0],a=sessionStorage.getItem("userId");e.objectId=t.id,"未开始"==t.status.dname?a===t.assignedUser?$["a"].http(window.processForUrl.getUrlForFirst(e.processKey),"get","",{success:function(t){var a=t.data.data,r=t.data.data.formKey,i={};r.indexOf("?")>-1&&(i=e.getQueryStringArgs(r.substring(r.indexOf("?"),r.length)),r=r.substring(0,r.indexOf("?")));var s=e.$getFrom("baseForm");s&&-1!=s&&(e.currentView=s,setTimeout((function(){e.$refs.componentForm.modalOpen(r,i,a)}),200))}}):F["a"].alert("这条任务的负责人不是你"):F["a"].alert("只有对未开始的持续改善才能执行！")}})),Object(o["a"])(r,"tableAdd",(function(){this.resetForm(),this.IsAddOp=!0,this.$refs.addOrUpdate.init(),this.detailForUpdate=JSON.parse(JSON.stringify(this.initObject)),this.title="添加持续改善任务",this.IsShow=!0,this.detailForUpdate.assignedUserName=sessionStorage.getItem("uname"),this.detailForUpdate.assignedUser=sessionStorage.getItem("userId"),this.detailForUpdate.initiatorName=sessionStorage.getItem("uname"),this.detailForUpdate.userViewModel1=[JSON.parse(sessionStorage.getItem("userViewModel"))],this.detailForUpdate.userViewModel2=[JSON.parse(sessionStorage.getItem("userViewModel"))],this.detailForUpdate.initiator=sessionStorage.getItem("userId"),this.detailForUpdate.startTime=this.$Utils.getLocalTime(),this.$refs.addOrUpdate.resetValid()})),Object(o["a"])(r,"tableEdit",(function(){var e=this;if(e.resetFormValidation(),e.IsAddOp=!1,e.title="编辑持续改善任务",1!=e.$refs.childDataTable.getCheckItems().length)F["a"].alert("请选择一项作为你修改的对象");else{var t=e.$refs.childDataTable.getCheckItems()[0];"手动"==t.generationName?"未开始"==t.status.dname?(e.$refs.addOrUpdate.init(),e.detailForUpdate=JSON.parse(JSON.stringify(t)),e.detailForUpdate.userViewModel1=[e.detailForUpdate.userViewModel1],e.detailForUpdate.userViewModel2=[e.detailForUpdate.userViewModel2],e.IsShow=!0):F["a"].alert("只有对未开始的持续改善任务才能编辑！"):F["a"].alert("只有对手动的持续改善任务才能编辑！")}})),Object(o["a"])(r,"doSearch",(function(){var e=this.$refs.childDataTable.getPagination();1==e.page?this.initTable(e):this.$refs.childDataTable.setPage(1)})),Object(o["a"])(r,"clearMessage",(function(){this.searchfx="",this.doSearch()})),Object(o["a"])(r,"initTable",(function(e){var t=this;e&&e.page||(e=this.$refs.childDataTable.getPagination()),t.$refs.childDataTable.unCheckItems(),t.$Server.queryAll(H.getModelName(),{page:e.page,rowsPerPage:e.rowsPerPage},{searchfx:t.searchfx}).then((function(e){t.$refs.childDataTable.unCheckItems(),t.DataSource=e.datas,t.total=e.page.total,t.DataSource&&t.DataSource.length>0&&t.DataSource.forEach((function(e){e.status&&e.status.dname&&("未开始"==e.status.dname||"已取消"==e.status.dname)?e.statusName=t.$Utils.setStart(e.status.dname):e.status&&e.status.dname&&"进行中"==e.status.dname?e.statusName=t.$Utils.setRed(e.status.dname):e.status&&e.status.dname&&"已完成"==e.status.dname&&(e.statusName=t.$Utils.setSuccess(e.status.dname))}))}),(function(e){}))})),Object(o["a"])(r,"rowDbClick",(function(e){this.$refs.See.init(e.id),this.$refs.See.improveReport={problemDescription:"",standardMethod:"",documentViewModelList:[],improveTeamViewModelList:[],preventiveStepViewModelList:[],improveStepViewModelList:[]},this.IsShowForSee=!0})),Object(o["a"])(r,"detailClose",(function(){this.IsShowForSee=!1})),Object(o["a"])(r,"modalComfirmed",(function(){var e=this;1==e.$refs.addOrUpdate.validate()&&e.flag?(e.flag=!1,e.detailForUpdate.userViewModel1[0]&&(e.detailForUpdate.userViewModel1=e.detailForUpdate.userViewModel1[0]),e.detailForUpdate.userViewModel2[0]&&(e.detailForUpdate.userViewModel2=e.detailForUpdate.userViewModel2[0]),e.detailForUpdate.generation=0,e.$Server.addOrUpdate(H.getModelName(),e.detailForUpdate,!e.IsAddOp).then((function(t){t.success&&(e.IsShow=!1,e.initTable(),F["a"].alert("保存成功","success"),e.detailForUpdate=JSON.parse(JSON.stringify(e.initObject))),e.flag=!0}),(function(t){F["a"].alert(t),e.flag=!0}))):F["a"].alert("验证不通过")})),Object(o["a"])(r,"modalClosed",(function(){this.IsShow=!1,this.detailForUpdate=JSON.parse(JSON.stringify(this.initObject))})),Object(o["a"])(r,"resetFormValidation",(function(){this.$refs.addOrUpdate.$refs.form.resetValidation()})),Object(o["a"])(r,"resetForm",(function(){this.$refs.addOrUpdate.$refs.form.resetValidation()})),Object(o["a"])(r,"modalClosedForSee",(function(){this.IsShowForSee=!1})),Object(o["a"])(r,"cofirmDelete",(function(){var e=this,t=this.$refs.childDataTable.getCheckItems();e.$Server.batchDelete(H.getModelName(),t).then((function(){e.IsComfirmShow=!1,e.initTable()}),(function(t){e.IsComfirmShow=!1,F["a"].alert(t)}))})),Object(o["a"])(r,"tableDelete",(function(){var e=this;if(e.$refs.childDataTable.getCheckItems().length<=0)F["a"].alert("请选中需要删除的项");else{for(var t=e.$refs.childDataTable.getCheckItems(),a=0;a<t.length;a++)if(0!==t[a].status.dvalue)return void F["a"].alert("只有未开始的任务才能删除");D["a"].confirm("确定删除所选持续改善?","提示",500,(function(){e.cofirmDelete()}),(function(){}))}})),r)},E=q,B=Object(u["a"])(E,i,s,!1,null,null,null);t["default"]=B.exports}}]);