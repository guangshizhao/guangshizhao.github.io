(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e503371"],{"0c10":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-form",{ref:"form1",attrs:{"lazy-validation":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{label:"取消原因",rules:[e.rules.required]},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                            取消原因: "),a("span",{staticStyle:{color:"red"}},[e._v("*")])]},proxy:!0}]),model:{value:e.item.cancelReason,callback:function(t){e.$set(e.item,"cancelReason",t)},expression:"item.cancelReason"}})],1)],1)],1)],1)],1)},s=[],n=(a("d5b3"),{name:"CancelTask",data:function(){return{rules:{required:function(e){return!!e||"必填项"}}}},props:["item"],methods:{validate:function(){return 1==this.$refs.form1.validate()},resetValid:function(){this.$refs.form1.resetValidation(),this.$refs.form1.reset()}}}),r=n,l=a("6691"),o=Object(l["a"])(r,i,s,!1,null,"058eafcc",null);t["a"]=o.exports},7683:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("layContentHeader",{attrs:{title:"设备盘点",buttons:e.headerBtns}},[a("v-text-field",{staticStyle:{width:"260px"},attrs:{label:"输入盘点单编号或负责人","hide-details":"","single-line":"",primary:"",clearable:""},on:{"click:clear":e.clearMessage},scopedSlots:e._u([{key:"append-outer",fn:function(){return[a("v-icon",{on:{click:function(t){return e.doSearch()}}},[e._v("search")])]},proxy:!0}]),model:{value:e.searchfx,callback:function(t){e.searchfx=t},expression:"searchfx"}})],1),a("layContent",[a("dataTable",{ref:"childDataTable",attrs:{headers:e.headers,sort:e.sort,DataSource:e.DataSource,hideOperation:!0,formatFields:e.formatFields,total:e.total},on:{rowDbClick:e.rowDbClick,initialize:e.initTable,changeItems:e.changeItems}}),a("contentModal",{attrs:{title:e.title,IsShow:e.IsShow,width:"1100",isDetails:e.isDetails},on:{modalClosed:function(t){return e.modalClosed()},modalComfirmed:function(t){return e.modalComfirmed()}}},[a("EqpInventoryTaskDetail",{ref:"addOrUpdate",attrs:{isView:e.isView,item:e.detailForUpdate}})],1),a(e.currentView,{ref:"componentForm",tag:"component",attrs:{PreviewType:e.PreviewType,objectId:e.objectId},on:{modalComfirmed:e.formComfirmed}}),a("contentModal",{attrs:{title:"盘点任务清单",IsShow:e.IsShowForSpare,width:"1100",eqpInventoryTask:!0,isSubmit:!0},on:{modalClosed:function(t){return e.modalClosedForSpare()},modalSubmit:function(t){return e.modalComfirmedForSpare()},modalStorageClosed:function(t){return e.modalComfirmedForEqp()},modalAutoVoluation:e.modalAutoVoluation}},[a("eqpInventoryProductForm",{ref:"addOrUpdateForSpare",attrs:{item:e.detailForUpdate}})],1),a("contentModal",{attrs:{title:"查看结果",IsShow:e.IsShowForSeeResult,width:"1100",isDetails:!0},on:{modalClosed:function(t){return e.modalClosedForSeeResult()}}},[a("EqpInventoryTaskSeeResult",{ref:"SeeResult",attrs:{id:e.taskId,inventoryType:e.inventoryType}})],1),a("contentModal",{attrs:{title:"取消原因",IsShow:e.IsShowCancelTask,width:"1100"},on:{modalComfirmed:function(t){return e.modalComfirmedCancelTask()},modalClosed:function(t){return e.modalClosedCancelTask()}}},[a("CancelTask",{ref:"CancelTask",attrs:{item:e.detailForUpdate}})],1)],1)],1)},s=[],n=(a("e6d1"),a("4634"),a("de90"),a("0b34"),a("7300")),r=a("5873"),l=a("ddf2"),o=a("80ea"),d=a("ae0a"),c=a("97a3"),u=a("652a"),m=a("1269"),f=a("a7fe"),v=a("d9f7"),h=new u["a"],p=function(e){function t(){var e,a;Object(n["a"])(this,t);for(var i=arguments.length,s=new Array(i),d=0;d<i;d++)s[d]=arguments[d];return a=Object(r["a"])(this,(e=Object(l["a"])(t)).call.apply(e,[this].concat(s))),Object(c["a"])(Object(o["a"])(a),"__name","EqpInventoryTask"),Object(c["a"])(Object(o["a"])(a),"inventoryCode",h.charField({require:!0,fieldName:"盘点单编号",colspan:"md4",rules:[function(e){return!!e||"必填项"}]})),Object(c["a"])(Object(o["a"])(a),"startDate",h.dateField({require:!0,fieldName:"开始日期",colspan:"md4",format:function(e){if(e)return e.substring(0,10)}})),Object(c["a"])(Object(o["a"])(a),"endDate",h.dateField({require:!0,fieldName:"结束日期",colspan:"md4",format:function(e){if(e)return e.substring(0,10)}})),Object(c["a"])(Object(o["a"])(a),"actualStartDate",h.dateField({require:!1,fieldName:"实际开始日期",editable:!1,visible:!1})),Object(c["a"])(Object(o["a"])(a),"actualEndDate",h.dateField({require:!1,fieldName:"实际结束日期",editable:!1,visible:!1})),Object(c["a"])(Object(o["a"])(a),"assignName",h.charField({editable:!1,fieldName:"负责人"})),Object(c["a"])(Object(o["a"])(a),"assignedUser",h.comboBoxField(v["a"],{require:!0,fieldName:"负责人",colspan:"md4",bindSource:{text:"uname",value:"id",parms:""},editable:!1,visible:!1})),Object(c["a"])(Object(o["a"])(a),"inventoryType",h.comboBoxField(f["a"],{require:!1,fieldName:"盘点类型",bindSource:{parms:{dname:"设备盘点类型"}},colspan:"md4",editable:!1,format:function(e){if(null!=e&&null!=e.dname)return e.dname}})),Object(c["a"])(Object(o["a"])(a),"inventoryDimension",h.charField({require:!0,fieldName:"盘点维度",format:function(e){if(null!=e&&null!=e.dname)return e.dname}})),Object(c["a"])(Object(o["a"])(a),"equipTypeList",h.charField({editable:!1,visible:!1})),Object(c["a"])(Object(o["a"])(a),"status",h.comboBoxField(f["a"],{require:!1,fieldName:"任务状态",editable:!1,visible:!1,format:function(e){if(null!=e&&null!=e.dname)return e.dname}})),Object(c["a"])(Object(o["a"])(a),"statusName",h.charField({require:!1,editable:!1,fieldName:"任务状态"})),a}return Object(d["a"])(t,e),t}(m["a"]),b=a("d5b3"),y=a("0c10"),g=a("8333"),x=a("a2a7"),S=a("f05f"),w=a("681f"),T=a("531b"),D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-text-field",{attrs:{disabled:e.isView,label:"盘点单编号",rules:[function(e){return!e||/^[\w|-]+$/.test(e)||"只能是数字,字母,下划线"}]},model:{value:e.item.inventoryCode,callback:function(t){e.$set(e.item,"inventoryCode",t)},expression:"item.inventoryCode"}})],1),a("v-flex",{attrs:{xs4:""}},[e.isView?a("datePicker",{attrs:{disabled:e.isView,label:"开始时间",required:!0},model:{value:e.item.startDate,callback:function(t){e.$set(e.item,"startDate",t)},expression:"item.startDate"}}):a("datePicker",{attrs:{disabled:e.isView,label:"开始时间",required:!0,rules:[function(e){return e&&""!=e||"必填项"},function(t){return!e.item.endDate||new Date(e.item.endDate)>=new Date(e.item.startDate)||"开始时间不能大于结束时间"}]},model:{value:e.item.startDate,callback:function(t){e.$set(e.item,"startDate",t)},expression:"item.startDate"}})],1),a("v-flex",{attrs:{xs4:""}},[e.isView?a("datePicker",{attrs:{disabled:e.isView,label:"结束时间",required:!0},model:{value:e.item.endDate,callback:function(t){e.$set(e.item,"endDate",t)},expression:"item.endDate"}}):a("datePicker",{attrs:{disabled:e.isView,label:"结束时间",required:!0,rules:[function(e){return e&&""!=e||"必填项"},function(t){return new Date(t)>=new Date(e.today)||"结束时间不能小于当前时间"},function(t){return!e.item.startDate||new Date(e.item.endDate)>=new Date(e.item.startDate)||"开始时间不能大于结束时间"}]},model:{value:e.item.endDate,callback:function(t){e.$set(e.item,"endDate",t)},expression:"item.endDate"}})],1),a("v-flex",{attrs:{xs4:""}},[a("selectUser",{ref:"selectUser",attrs:{disabled:e.isView,value:e.item.assignName,required:!0,label:"负责人",multiple:!1,initselect:e.item.assignUserViewModel}})],1),a("v-flex",{attrs:{xs4:""}},[a("v-select",{attrs:{disabled:e.isView,items:e.inventoryTypes,rules:[function(e){return e+="",""!=e||"必填项"}],"return-object":"","item-text":"dname"},on:{change:e.handleTypeChange},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                        盘点类型"),a("span",{staticStyle:{color:"red"}},[e._v("*")])]},proxy:!0}]),model:{value:e.item.inventoryType,callback:function(t){e.$set(e.item,"inventoryType",t)},expression:"item.inventoryType"}})],1),a("v-flex",{attrs:{xs4:""}},[a("v-select",{attrs:{disabled:e.isView||e.isDimensionsDisable,items:e.inventoryDimensions,rules:[function(e){return e+="",""!=e||"必填项"}],"return-object":"","item-text":"dname"},on:{change:e.handleDimensionChange},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n                        盘点维度"),a("span",{staticStyle:{color:"red"}},[e._v("*")])]},proxy:!0}]),model:{value:e.item.inventoryDimension,callback:function(t){e.$set(e.item,"inventoryDimension",t)},expression:"item.inventoryDimension"}})],1)],1)],1),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-flex",{attrs:{xs12:""}},[a("span",{staticStyle:{"font-weight":"bold",width:"100%"}},[e._v("上传附件:")]),e.isView?e._e():a("v-icon",{on:{click:function(t){return e.addUpload()}}},[e._v("add")])],1),a("v-flex",{attrs:{xs12:""}},e._l(e.item.documentList,(function(t,i){return a("v-layout",{key:t.id,attrs:{row:"",wrap:""}},[e.isView?[t.documentViewModel&&t.documentViewModel.dname?a("v-flex",{attrs:{xs12:""}},[a("view-file",{attrs:{documentViewModel:t.documentViewModel}})],1):e._e()]:[a("v-flex",{attrs:{xs9:""}},[a("fileUploader",{ref:"uploadFile",refInFor:!0,attrs:{label:"上传附件",multiple:!1,fileNames:t.documentViewModel&&t.documentViewModel.dname,uploadBase64:!1,userVersion:t},on:{formData:e.getFormData},model:{value:t.documentViewModel,callback:function(a){e.$set(t,"documentViewModel",a)},expression:"doc.documentViewModel"}})],1),a("v-flex",{attrs:{xs3:""}},[a("v-icon",{on:{click:function(t){return e.deleteItem(i)}}},[e._v("delete")])],1)]],2)})),1)],1)],1),e.isView?e._e():a("v-btn",{staticClass:"primary",attrs:{small:""},on:{click:e.handldTaskDistribute}},[e._v("盘点任务分配")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowTaskDistribute,expression:"isShowTaskDistribute"}],attrs:{id:"12"}},e._l(e.item.subTaskList,(function(t,i){return a("v-layout",{key:t.id,staticStyle:{"margin-left":"15px"},attrs:{"align-center":""}},[a("v-flex",{attrs:{xs6:""}},[a("span",[a("b",[e._v(e._s(e.item.inventoryDimension.dname)+"：")]),e._v(" "+e._s(t.objectName))])]),a("v-flex",{staticStyle:{"margin-left":"20px"},attrs:{xs3:""}},[a("selectUser",{ref:"selectUser1",refInFor:!0,attrs:{disabled:e.isView,value:t.inventoryUserList&&t.inventoryUserList.map((function(e){return e.uname})).join(","),required:!0,label:"负责人",multiple:!0,initselect:t.inventoryUserList},on:{changeValue:function(t){return e.changeValueDistribute(t,i)}}})],1),e.isView?a("v-flex",{attrs:{xs3:""}},[a("div",{staticStyle:{"padding-left":"15px"}},[e._v("\n                        "+e._s(t.statusName)+"\n                    ")])]):e._e()],1)})),1),e.item.status&&"已取消"==e.item.status.dname?a("div",{staticStyle:{"margin-top":"15px"}},[a("v-textarea",{attrs:{label:"取消原因",disabled:e.isView||e.isDimensionsDisable},model:{value:e.item.cancelReason,callback:function(t){e.$set(e.item,"cancelReason",t)},expression:"item.cancelReason"}})],1):e._e(),e.isView&&e.isImageSrcShow?a("div",{staticStyle:{"margin-top":"15px"}},[a("div",[a("span",{staticStyle:{"font-weight":"bold"}},[e._v("任务进度:")])]),e.imageSrc?a("img",{attrs:{src:e.imageSrc}}):e._e()]):e._e()],1)],1)},k=[],I=(a("bada"),a("1d53")),C=a("1d18"),F=a("2c75"),$=a("a1de"),_=a("551a"),O=a("6bf2"),U=a.n(O),q=new g["a"](new F["a"]),V={name:"sparePartsInventoryDetail",data:function(){return{today:U()(new Date).format("YYYY-MM-DD"),valid:!0,inventoryTypes:[],inventoryDimensions:[],isShowTaskDistribute:!1,imageSrc:"",isDimensionsDisable:!1,isImageSrcShow:!1}},components:{datePicker:I["a"],selectUser:C["a"],fileUploader:$["a"]},created:function(){var e=this;e.$Server.queryAll("Datadict",{},{dname:"设备盘点类型"}).then((function(t){e.inventoryTypes=t.datas}),(function(e){})),e.$Server.queryAll("Datadict",{},{dname:"设备盘点维度"}).then((function(t){e.inventoryDimensions=t.datas}),(function(e){}))},computed:{formatFields:function(){return q.getFormatFields()}},watch:{item:{handler:function(e){this.isImageSrcShow=!1,e&&this.isView&&e.status&&0!=e.status.dvalue&&this.seeTrace()},deep:!0}},props:["item","isView"],methods:{validate:function(){if(1==this.$refs.form.validate()){if(this.item.startDate>=this.item.endDate)return b["a"].alert("开始时间不能大于等于结束时间！"),!1;var e=this.$refs.selectUser.getselectUserList();e&&e.length>0&&(this.item.assignedUser=this.$refs.selectUser.getselectUserList()[0].id,this.item.assignName=this.$refs.selectUser.getselectUserList()[0].uname);for(var t=0;t<this.item.subTaskList.length;t++){var a=this.item.subTaskList[t];if(null===a||a&&a.length<=0)return b["a"].alert("请填写完成分配人员"),!1}return!0}return!1},addUpload:function(){this.isView||this.item.documentList.push({documentViewModel:{}})},getFormData:function(e){},deleteItem:function(e){this.item.documentList.splice(e,1)},handleTypeChange:function(e){if(1===e.dvalue){var t=this.inventoryDimensions.find((function(e){return"所属部门"==e.dname}));this.item.inventoryDimension=t||{},this.isDimensionsDisable=!0}else this.item.inventoryDimension="",this.isDimensionsDisable=!1;this.isShowTaskDistribute&&(this.isShowTaskDistribute=!1)},handleDimensionChange:function(){this.isShowTaskDistribute&&(this.isShowTaskDistribute=!1)},handldTaskDistribute:function(){var e=this;this.item.inventoryType&&this.item.inventoryType.dvalue+""&&this.item.inventoryDimension&&this.item.inventoryDimension.dvalue+""?this.isShowTaskDistribute||(this.isShowTaskDistribute=!0,e.$Server.queryAll("EqpInventorySubTask",{},{type:e.item.inventoryType.dvalue,dimension:e.item.inventoryDimension.dvalue}).then((function(t){e.item.subTaskList=t.datas}),(function(e){return b["a"].alert(e)}))):b["a"].alert("请选择盘点类型或盘点维度")},changeValueDistribute:function(e,t){e.length>0&&(this.item.subTaskList[t].inventoryUserList=e)},downloadDocument:function(e,t){var a=document.createElement("a");a.href=e.newestFilePath,a.download=t,a.click()},seeTrace:function(){var e=this;_["a"].http(window.processForUrl.getUrlForInstanceId(e.item.id),"get","",{success:function(t){if(t.data&&t.data.data&&t.data.data.id){var a=t.data.data.id;e.seeImage(a)}}})},seeImage:function(e){var t=this;_["a"].http(window.processForUrl.getUrlForInstanceTrace(e),"get",{},{success:function(e){t.imageSrc=e.data.data.image,t.isImageSrcShow=!0}})}}},L=V,j=a("6691"),R=Object(j["a"])(L,D,k,!1,null,null,null),E=R.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",[a("v-flex",{staticStyle:{"margin-bottom":"10px"}},[a("span",[e._v("实际开始日期："+e._s(e.EqpInventoryResult.startDate&&e.EqpInventoryResult.startDate.substring(0,10)))]),a("span",{staticStyle:{"margin-left":"20px"}},[e._v("实际结束日期："+e._s(e.EqpInventoryResult.endDate&&e.EqpInventoryResult.endDate.substring(0,10)))])])],1),a("v-layout",[a("v-flex",[a("p",[a("b",[e._v("盘点报告：")]),e._v(e._s(e.inventoryReport))])])],1),a("strong",[e._v("盘点结果统计：")]),a("v-layout",["设备"==e.inventoryType?a("v-flex",{attrs:{xs4:""}},[a("simpleDataTable",{attrs:{items:e.EqpInventoryResult.typeList,headers:e.headers1,hideHeaders:!1}})],1):e._e(),a("v-flex",{staticStyle:{"margin-left":"10px"},attrs:{xs4:""}},[a("simpleDataTable",{attrs:{items:e.EqpInventoryResult.departmentList,headers:e.headers2,hideHeaders:!1}})],1),"设备"==e.inventoryType?a("v-flex",{staticStyle:{"margin-left":"10px"},attrs:{xs4:""}},[a("simpleDataTable",{attrs:{items:e.EqpInventoryResult.workShopList,headers:e.headers3,hideHeaders:!1}})],1):e._e()],1),a("v-layout",{staticStyle:{"margin-top":"25px"},attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("p",[e._v("不存在设备详情")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers4,items:e.EqpInventoryResult.deletedRecordList,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("tr",e._l(e.headers4,(function(i,s){return a("td",{key:s,staticClass:"text-xs-center"},["index"===i.fildType?[e._v(e._s(t.index+1))]:"file"===i.fildType?[t.item[i.value]&&t.item[i.value].length>0?a("div",e._l(t.item[i.value],(function(t,i){return a("div",{key:i,staticStyle:{display:"flex","justify-content":"flex-end"}},[a("div",{staticStyle:{"line-height":"50px"}},[e._v("\n                                            "+e._s(t.documentViewModel.dname+t.documentViewModel.newestFileExt)+"\n                                        ")]),a("v-btn",{attrs:{small:""},on:{click:function(a){return e.priviewDocument(t.documentViewModel)}}},[e._v("查看")])],1)})),0):e._e()]:[e._v(e._s(t.item[i.value]))]],2)})),0)]}}])})],1),a("v-flex",{staticStyle:{"margin-top":"20px"},attrs:{xs12:""}},[a("p",[e._v("不一致设备详情")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers5,items:e.EqpInventoryResult.diffRecordList,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("tr",e._l(e.headers5,(function(i,s){return a("td",{key:s,staticClass:"text-xs-center"},["index"===i.fildType?[e._v(e._s(t.index+1))]:"eqpStatus"===i.fildType?[e._v(e._s(t.item[i.value]&&t.item[i.value].dname))]:"file"===i.fildType?[t.item[i.value]&&t.item[i.value].length>0?a("div",e._l(t.item[i.value],(function(t,i){return a("div",{key:i,staticStyle:{display:"flex","justify-content":"flex-end"}},[a("div",{staticStyle:{"line-height":"50px"}},[e._v("\n                                            "+e._s(t.documentViewModel.dname+t.documentViewModel.newestFileExt)+"\n                                        ")]),a("v-btn",{attrs:{small:""},on:{click:function(a){return e.priviewDocument(t.documentViewModel)}}},[e._v("查看")])],1)})),0):e._e()]:[e._v(e._s(t.item[i.value]))]],2)})),0)]}}])})],1)],1),a("viewer",{staticClass:"images images-viewer",attrs:{options:e.viewerOptions},on:{inited:e.inited}},[a("img",{attrs:{src:e.imageSrc,"data-source":e.imageSrc,alt:"img"}})])],1)},M=[],P=a("64cf"),B=a("52d6"),A=a("ef3e"),J=a("3876"),H={name:"SpReceiveTaskForm",data:function(){return{inventoryReport:"",EqpInventoryResult:{typeList:[],departmentList:[],workShopList:[],deletedRecordList:[],diffRecordList:[]},headers:[{text:"设备编号",value:"eqpCode",align:"center",sortable:!1},{text:"设备名称",value:"eqpName",align:"center",sortable:!1},{text:"状态",value:"eqpStatus",align:"center",sortable:!1},{text:"盘点结果",value:"result",align:"center",sortable:!1,fildType:"inventoryResult"},{text:"备注",value:"description",align:"center",sortable:!1,fildType:"description"},{text:"附件",value:"documentList",align:"center",sortable:!1,fildType:"file"}],headers1:[{text:"设备类型",value:"groupField",align:"center",sortable:!1},{text:"总数",value:"total",align:"center",sortable:!1},{text:"不存在",value:"notExistCount",align:"center",sortable:!1},{text:"不一致",value:"differentCount",align:"center",sortable:!1}],headers2:[{text:"所属部门",value:"groupField",align:"center",sortable:!1},{text:"总数",value:"total",align:"center",sortable:!1},{text:"不存在",value:"notExistCount",align:"center",sortable:!1},{text:"不一致",value:"differentCount",align:"center",sortable:!1}],headers3:[{text:"设备位置",value:"groupField",align:"center",sortable:!1},{text:"总数",value:"total",align:"center",sortable:!1},{text:"不存在",value:"notExistCount",align:"center",sortable:!1},{text:"不一致",value:"differentCount",align:"center",sortable:!1}],headers4:[{text:"序号",value:"index",align:"center",sortable:!1,fildType:"index"},{text:"设备编号",value:"eqpCode",align:"center",sortable:!1},{text:"设备名称",value:"eqpName",align:"center",sortable:!1},{text:"规格型号",value:"model",align:"center",sortable:!1},{text:"备注",value:"description",align:"center",sortable:!1},{text:"附件",value:"documentList",align:"center",sortable:!1,fildType:"file"}],headers5:[],headers5_1:[{text:"序号",value:"index",align:"center",sortable:!1,fildType:"index"},{text:"设备编号",value:"eqpCode",align:"center",sortable:!1},{text:"设备名称",value:"eqpName",align:"center",sortable:!1},{text:"规格型号",value:"model",align:"center",sortable:!1},{text:"所属部门",value:"department",align:"center",sortable:!1},{text:"状态",value:"eqpStatus",align:"center",sortable:!1,fildType:"eqpStatus"},{text:"设备位置",value:"equipmentPosition",align:"center",sortable:!1},{text:"备注",value:"description",align:"center",sortable:!1},{text:"附件",value:"documentList",align:"center",sortable:!1,fildType:"file"}],headers5_2:[{text:"序号",value:"index",align:"center",sortable:!1,fildType:"index"},{text:"设备编号",value:"eqpCode",align:"center",sortable:!1},{text:"设备名称",value:"eqpName",align:"center",sortable:!1},{text:"规格型号",value:"model",align:"center",sortable:!1},{text:"所属部门",value:"department",align:"center",sortable:!1},{text:"备注",value:"description",align:"center",sortable:!1},{text:"附件",value:"documentList",align:"center",sortable:!1,fildType:"file"}],formatFields:{eqpStatus:function(e){return e.dname}},test:"",items:[],params:{},imageSrc:"",viewerOptions:{inline:!1,navbar:!1}}},components:{DetailBlock:P["a"],mergeTable:B["a"],uploadFile2:J["a"],simpleDataTable:A["a"]},methods:{inited:function(e){this.$viewer=e},priviewDocument:function(e){var t=this;if(e&&e.newestFileExt&&e.newestFilePath){var a=e.newestFileExt,i=e.newestFilePath;".png"==a||".gif"==a||".jpg"==a||".bmp"==a||".jpeg"==a?(t.imageSrc=i,t.$viewer.show()):b["a"].alert("只支持查看图片")}}},props:["id","inventoryType"],watch:{id:function(e){var t=this;e&&t.$Server.queryObjectById("EqpInventoryResult",e).then((function(e){console.log(e);var a=e.data.data;null===a.typeList&&(a.typeList=[]),null===a.departmentList&&(a.departmentList=[]),null===a.workShopList&&(a.workShopList=[]),null===a.deletedRecordList&&(a.deletedRecordList=[]),null===a.diffRecordList&&(a.diffRecordList=[]),t.EqpInventoryResult=a}))}}},Y=H,z=Object(j["a"])(Y,N,M,!1,null,null,null),G=z.exports,K=a("8b35"),Q=new g["a"](new p),W={name:"sparePartsInventory",data:function(){var e=this;return{IsShowCancelTask:!1,initObject:{id:"",inventoryCode:"",startDate:"",endDate:"",assignedUser:"",assignName:"",inventoryUser:"",userViewModel:[],inventoryType:"",distributeList:[],subTaskList:[],inventoryDimension:"",documentList:[],inventoryUserList:[]},searchfx:"",sort:!0,total:1,DataSource:[],title:"",IsShow:!1,IsAddOp:!0,isView:!1,detailForUpdate:{inventoryDimension:{}},titleForSee:"",btnexecute:!this.$per("EqpInventoryTask","exe"),btninventory:!(-1!=JSON.parse(sessionStorage.getItem("permission")).findIndex((function(e){return"/api/EqpInventoryTask"==e.pvalue&&"盘点"==e.pname}))),headerBtns:[{disabled:!this.$per("EqpInventoryTask","c"),text:"添加",icon:"self_add",click:function(){return e.tableAdd()}},{disabled:!this.$per("EqpInventoryTask","u"),text:"编辑",icon:"self_edit",click:function(){return e.tableEdit()}},{disabled:!this.$per("EqpInventoryTask","d"),text:"删除",icon:"self_delete",click:function(){return e.tableDelete()}},{disabled:this.btnexecute,text:"执行",icon:"self_execute",click:function(){return e.excuteTask()}},{disabled:this.btninventory,text:"盘点",icon:"self_execute",click:function(){return e.inventory()}},{disabled:!this.$per("EqpInventoryTask","cancel"),text:"取消",icon:"self_cancel",click:function(){return e.cancelTask()}},{disabled:!(-1!=JSON.parse(sessionStorage.getItem("permission")).findIndex((function(e){return"/api/EqpInventoryTask"==e.pvalue&&"查看结果"==e.pname}))),text:"查看结果",icon:"self_look",click:function(){return e.showResult()}}],currentView:"",processKey:window.process.EqpInventoryTask,PreviewType:1,objectId:"",IsShowForSeeResult:!1,isDetails:!1,IsShowForSpare:!1,taskId:"",inventoryType:""}},computed:{headers:function(){var e=Q.formatGridHeader();return!0===this.sort&&e.unshift({text:"序号",align:"center",sortable:!1}),e},formatFields:function(){return Q.getFormatFields()}},components:{contentModal:x["a"],dataTable:S["a"],EqpInventoryTaskDetail:E,EqpInventoryTaskSeeResult:G,eqpInventoryProductForm:K["a"],CancelTask:y["a"]},mounted:function(){},methods:{changeItems:function(e){e&&1==e.length?0==e[0].status.dvalue?(this.headerBtns[3].disabled=this.btnexecute||!1,this.headerBtns[4].disabled=!0):1==e[0].status.dvalue?(this.headerBtns[3].disabled=!0,this.headerBtns[4].disabled=this.btninventory||!1):(this.headerBtns[3].disabled=this.btnexecute||!1,this.headerBtns[4].disabled=this.btninventory||!1):(this.headerBtns[3].disabled=this.btnexecute||!1,this.headerBtns[4].disabled=this.btninventory||!1)},modalComfirmedCancelTask:function(){var e=this;1==e.$refs.CancelTask.validate()?(e.cofirmCancel(e.detailForUpdate),e.IsShowCancelTask=!1):b["a"].alert("验证错误")},modalClosedCancelTask:function(){var e=this;e.IsShowCancelTask=!1},modalAutoVoluation:function(){for(var e=this,t=e.$refs.addOrUpdateForSpare.item,a=t.recordList,i=0;i<a.length;i++){var s=a[i];null==s.result.dvalue&&(s.result.dvalue=0)}},modalComfirmedForEqp:function(){var e=this,t=e.$refs.addOrUpdateForSpare.item,a=t.recordList,i=t.subTaskList;i.forEach((function(e){e.recordList=a.filter((function(t){return e.id===t.inventorySubTaskID}))})),e.$Server.batchUpdate("EqpInventorySubTask",i).then((function(t){t.success&&(b["a"].alert("保存成功","success"),e.initTable(),e.IsShowForSpare=!1)})).catch((function(e){b["a"].alert(e)}))},modalClosedForSeeResult:function(){this.IsShowForSeeResult=!1},showResult:function(){var e=this;if(1!=e.$refs.childDataTable.getCheckItems().length)b["a"].alert("请选择一项作为你查看的对象");else{var t=e.$refs.childDataTable.getCheckItems()[0];"按时完成"==t.status.dname||"超期完成"==t.status.dname?(this.$refs.SeeResult.inventoryReport=t.inventoryReport,t.inventoryType&&"计量仪器"===t.inventoryType.dname?this.$refs.SeeResult.headers5=this.$refs.SeeResult.headers5_2:this.$refs.SeeResult.headers5=this.$refs.SeeResult.headers5_1,e.inventoryType=t.inventoryType.dname,e.taskId=t.id,e.IsShowForSeeResult=!0):b["a"].alert("只有对已完成的盘点任务才能查看！")}},cancelTask:function(){var e=this;1!=e.$refs.childDataTable.getCheckItems().length?b["a"].alert("请选择一项作为你取消的对象"):"进行中"==e.$refs.childDataTable.getCheckItems()[0].status.dname?e.$refs.childDataTable.getCheckItems()[0].assignedUser!==sessionStorage.getItem("userId")?b["a"].alert("您不是该任务的负责人，不能取消"):(e.detailForUpdate=JSON.parse(JSON.stringify(e.$refs.childDataTable.getCheckItems()[0])),e.$refs.CancelTask.resetValid(),e.IsShowCancelTask=!0):b["a"].alert("只有对进行中的盘点任务才能取消！")},cofirmCancel:function(e){var t=this;T["a"].http(window.processForUrl.getUrlForInstanceId(e.id),"get","",{success:function(a){a.data&&a.data.data&&a.data.data.id?T["a"].http(window.processForUrl.getUrlForInstance(a.data.data.id),"Delete","",{success:function(a){e.status.dvalue=4,t.$Server.addOrUpdate(Q.getModelName(),e,!0).then((function(e){e.success&&(t.initTable(),b["a"].alert("取消成功","success"))}),(function(e){b["a"].alert(e)}))},error:function(e){b["a"].alert(e)}}):(e.status.dvalue=4,t.$Server.addOrUpdate(Q.getModelName(),e,!0).then((function(e){e.success&&(t.initTable(),b["a"].alert("取消成功","success"))}),(function(e){b["a"].alert(e)})))},error:function(e){b["a"].alert(e)}})},getQueryStringArgs:function(e){if(e&&e.length>0){var t=e.length>0?e.substring(1):"",a={},i=t.length?t.split("&"):[],s=null,n=null,r=null,l=0,o=i.length;for(l=0;l<o;l++)s=i[l].split("="),n=decodeURIComponent(s[0]),r=decodeURIComponent(s[1]),n.length&&(a[n]=r);return a}return{}},excuteTask:function(){var e=this;if(1!=e.$refs.childDataTable.getCheckItems().length)b["a"].alert("请选择一项作为你执行的对象");else{var t=e.$refs.childDataTable.getCheckItems()[0],a=sessionStorage.getItem("userId");e.objectId=t.id,"未开始"==t.status.dname?a===t.assignedUser?(t.isExcute=!0,t.status.dvalue=1,e.$Server.addOrUpdate(Q.getModelName(),t,!0).then((function(t){t.success&&(e.IsShow=!1,e.initTable(),b["a"].alert("执行成功","success"))}),(function(e){b["a"].alert(e)}))):b["a"].alert("这条任务的负责人不是你"):b["a"].alert("只有对未开始的盘点任务才能执行！")}},inventory:function(){var e=this;e.resetFormValidation(),1!=e.$refs.childDataTable.getCheckItems().length?b["a"].alert("请选择一项作为你盘点的对象"):"进行中"==e.$refs.childDataTable.getCheckItems()[0].status.dname?e.$Server.queryObjectById(Q.getModelName(),e.$refs.childDataTable.getCheckItems()[0].id).then((function(t){var a=t.data.data;console.log(t),a.subTaskList&&a.subTaskList.length>0?0==a.subTaskList[0].status||1==a.subTaskList[0].status?(e.IsAddOp=!1,e.title="盘点任务清单",a.inventoryType&&1===a.inventoryType.dvalue?e.$refs.addOrUpdateForSpare.headers=e.$refs.addOrUpdateForSpare.headers2:e.$refs.addOrUpdateForSpare.headers=e.$refs.addOrUpdateForSpare.headers1,e.detailForUpdate=JSON.parse(JSON.stringify(a)),e.IsShowForSpare=!0):b["a"].alert("你已经盘点完了此任务！"):b["a"].alert("盘点任务为空")}),(function(e){b["a"].alert(e)})):b["a"].alert("只有对进行中的盘点任务才能盘点！")},modalClosedForSpare:function(){this.IsShowForSpare=!1},modalComfirmedForSpare:function(){for(var e=this,t=this.$refs.addOrUpdateForSpare.item,a=t.recordList,i=t.subTaskList,s=0;s<a.length;s++){var n=a[s];if(null===n.result.dvalue)return void b["a"].alert("存在未填写结果的设备,请填写结果！")}i.forEach((function(e){e.status=2,e.recordList=a.filter((function(t){return e.id===t.inventorySubTaskID}))})),this.$Server.batchUpdate("EqpInventorySubTask",i).then((function(t){t.success&&(b["a"].alert("盘点成功","success"),e.initTable(),e.IsShowForSpare=!1)})).catch((function(e){b["a"].alert(e)}))},tableAdd:function(){this.resetForm(),this.IsAddOp=!0,this.isDetails=!1,this.isView=!1,this.detailForUpdate=JSON.parse(JSON.stringify(this.initObject)),this.title="添加盘点任务",this.IsShow=!0},tableEdit:function(){var e=this;if(e.resetFormValidation(),e.IsAddOp=!1,this.isDetails=!1,this.isView=!1,e.title="编辑盘点任务",1!=e.$refs.childDataTable.getCheckItems().length)b["a"].alert("请选择一项作为你修改的对象");else{var t=e.$refs.childDataTable.getCheckItems()[0];null==t.documentList&&(t.documentList=[]),"未开始"==t.status.dname?(e.IsShow=!0,e.$Server.queryObjectById(Q.getModelName(),t.id).then((function(t){null==t.data.data.documentList&&(t.data.data.documentList=[]),e.detailForUpdate=JSON.parse(JSON.stringify(t.data.data)),e.$refs.addOrUpdate.isShowTaskDistribute=!0}),(function(e){return b["a"].alert(e)}))):b["a"].alert("只有对未开始的盘点任务才能编辑！")}},doSearch:function(){var e=this.$refs.childDataTable.getPagination();1==e.page?this.initTable(e):this.$refs.childDataTable.setPage(1)},clearMessage:function(){this.searchfx="",this.doSearch()},initTable:function(e){var t=this;e&&e.page||(e=this.$refs.childDataTable.getPagination()),t.$Server.queryAll(Q.getModelName(),{page:e.page,rowsPerPage:e.rowsPerPage},{searchfx:t.searchfx}).then((function(e){t.$refs.childDataTable.unCheckItems(),t.DataSource=e.datas,t.total=e.page.total,t.DataSource&&t.DataSource.length>0&&t.DataSource.forEach((function(e){e.status&&e.status.dname&&("未开始"==e.status.dname||"已取消"==e.status.dname)?e.statusName=t.$Utils.setStart(e.status.dname):e.status&&e.status.dname&&"进行中"==e.status.dname?e.statusName=t.$Utils.setRed(e.status.dname):e.status&&"按时完成"==e.status.dname?e.statusName=t.$Utils.setSuccess(e.status.dname):e.status&&"超期完成"==e.status.dname&&(e.statusName=t.$Utils.setWarn(e.status.dname))}))}),(function(e){}))},rowDbClick:function(e){var t=this;this.isView=!0,this.isDetails=!0,t.detailForUpdate=JSON.parse(JSON.stringify(e)),t.$refs.addOrUpdate.isShowTaskDistribute=!0,t.title="查看任务详情",t.IsShow=!0},modalComfirmed:function(){var e=this;1==e.$refs.addOrUpdate.validate()&&e.$Server.addOrUpdate(Q.getModelName(),e.detailForUpdate,!e.IsAddOp).then((function(t){t.success&&(e.IsShow=!1,e.initTable(),b["a"].alert("保存成功","success"))}),(function(e){b["a"].alert(e)}))},modalClosed:function(){this.IsShow=!1,this.isDetails&&(this.$refs.addOrUpdate.imageSrc="")},resetFormValidation:function(){this.$refs.addOrUpdate.$refs.form.resetValidation()},resetForm:function(){this.$refs.addOrUpdate.$refs.form.reset(),this.$refs.addOrUpdate.$refs.form.resetValidation()},cofirmDelete:function(){var e=this,t=this.$refs.childDataTable.getCheckItems();e.$Server.batchDelete(Q.getModelName(),t).then((function(){e.initTable()}),(function(e){b["a"].alert(e)}))},tableDelete:function(){var e=this;if(e.$refs.childDataTable.getCheckItems().length<=0)b["a"].alert("请选中需要删除的对象");else{for(var t=!0,a=0;a<e.$refs.childDataTable.getCheckItems().length;a++)if("未开始"!=e.$refs.childDataTable.getCheckItems()[a].status.dname){t=!1;break}t?w["a"].confirm("确定删除所选设备盘点?","提示",500,(function(){e.cofirmDelete()}),(function(){})):b["a"].alert("只有对未开始的盘点任务才能删除！")}},formComfirmed:function(){}}},X=W,Z=Object(j["a"])(X,i,s,!1,null,null,null);t["default"]=Z.exports}}]);