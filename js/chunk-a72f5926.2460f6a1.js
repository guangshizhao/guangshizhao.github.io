(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a72f5926"],{"090d":function(t,e,i){},"6e68":function(t,e,i){"use strict";var n=i("090d"),o=i.n(n);o.a},a65e:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("layContent",[n("layContentHeader",{attrs:{title:"设备运行管理",buttons:t.headerBtns}}),n("div",[n("v-layout",[n("div",{staticStyle:{"margin-top":"15px","margin-bottom":"15px","margin-left":"10px"}},[n("p",{staticStyle:{color:"black","font-size":"18px",margin:"5px 10px 0px 0px"}},[t._v("工厂：")])]),n("div",{staticStyle:{width:"300px","margin-left":"0px"}},[n("v-select",{attrs:{items:t.factorys,"item-text":"fname","single-line":"","return-object":""},on:{change:function(e){return t.changeFactory()}},model:{value:t.selectFactory,callback:function(e){t.selectFactory=e},expression:"selectFactory"}})],1),t.isError?t._e():n("div",{staticStyle:{"margin-top":"15px","margin-bottom":"15px","margin-left":"10px"}},[n("p",{staticStyle:{color:"black","font-size":"18px",margin:"5px 10px 0px 0px"}},[t._v("车间：")])]),t.isError?t._e():n("div",{staticStyle:{width:"300px","margin-left":"0px"}},[n("v-select",{attrs:{items:t.workshops,"item-text":"fname","single-line":"","return-object":""},on:{change:function(e){return t.changeWorkShop()}},model:{value:t.seletedWorkshop,callback:function(e){t.seletedWorkshop=e},expression:"seletedWorkshop"}})],1),n("v-spacer"),n("div",{staticStyle:{"margin-top":"15px","margin-bottom":"15px","margin-left":"30px",width:"300px"}},[n("v-layout",[n("v-icon",{staticStyle:{color:"green"}},[t._v("panorama_fish_eye")]),n("span",{staticStyle:{color:"black","font-size":"18px",margin:"5px 20px 0px 20px"}},[t._v("正常")]),n("v-icon",{staticStyle:{color:"orange"}},[t._v("panorama_fish_eye")]),n("span",{staticStyle:{color:"black","font-size":"18px",margin:"5px 20px 0px 20px"}},[t._v("异常")]),n("v-icon",{staticStyle:{color:"red"}},[t._v("panorama_fish_eye")]),n("span",{staticStyle:{color:"black","font-size":"18px",margin:"5px 20px 0px 20px"}},[t._v("故障")])],1)],1)],1),n("div",{staticStyle:{position:"relative",width:"100%"},attrs:{id:"offset"}},[t.isError?n("div",{staticStyle:{margin:"10px 0px 10px 10px","font-size":"16px",color:"red"}},[t._v("此工厂下暂无车间")]):t._e(),t.isShowList?n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:"",row:""}},t._l(t.allBindingData,(function(e,i){return n("v-flex",{attrs:{xs12:"",md6:""}},[n("div",{staticStyle:{"font-size":"18px","text-align":"center","margin-bottom":"10px"}},[t._v(t._s(e.fname))]),n("div",{style:t.setStyleForAll(e,0)},[n("v-img",{staticStyle:{width:"100%"},attrs:{src:e.workShopImage?e.workShopImage:""}}),t._l(e.childs,(function(e){return 0==e.stationType?n("div",{class:t.setClass(e,0),style:t.setStyle(e,i,0),on:{click:function(i){return t.openDevices(e.runningEquipments)}}}):t._e()}))],2)])})),1)],1):n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:"",row:""}},[n("v-flex",{attrs:{xs12:"",md12:""}},[n("div",{style:t.setStyleForAll(t.allBindingDataForOne,1)},[n("v-img",{staticStyle:{width:"100%"},attrs:{src:t.allBindingDataForOne.workShopImage?t.allBindingDataForOne.workShopImage:""}}),t._l(t.allBindingDataForOne.childs,(function(e){return 0==e.stationType?n("div",{class:t.setClass(e,1),style:t.setStyle(e,t.currentIndex,1),on:{click:function(i){return t.openDevices(e.runningEquipments)}}}):t._e()}))],2)])],1)],1)],1)],1)],1),n("contentModal",{attrs:{title:"设备信息",IsShow:t.IsShowForDevice,IsShowComfirmed:"true"},on:{modalClosed:function(e){return t.modalClosedForDevice()}}},[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:"",row:""}},t._l(t.devices,(function(e,o){return n("v-flex",{attrs:{xs12:"",md4:""}},[n("div",{class:t.setClassForDevice(e),staticStyle:{position:"relative",cursor:"pointer"}},[n("div",{staticStyle:{position:"absolute",left:"35px",top:"25px"}},[n("v-img",{attrs:{src:e.eqpImage?e.eqpImage:i("faaf"),width:"60",height:"60"}})],1),n("div",{staticStyle:{position:"absolute",left:"115px",top:"25px",width:"115px"}},[n("div",{staticClass:"overflow_text",staticStyle:{"font-size":"16px",color:"#585858"}},[t._v(t._s(e.code))]),n("div",{staticClass:"overflow_text",staticStyle:{"font-size":"14px",color:"#a4a4a4"}},[t._v(t._s(e.name))]),n("div",{staticClass:"overflow_text",staticStyle:{"font-size":"14px",color:"#a4a4a4"}},[t._v(t._s(null!=e.departmentName&&void 0!=e.departmentName?e.departmentName:"")+"\n                            ")])]),n("div",{staticStyle:{position:"absolute",left:"30px",top:"97px",width:"220px","font-size":"14px",color:"#585858",height:"30px","line-height":"30px"}},[n("span",{staticClass:"overflow_text",staticStyle:{float:"left",width:"120px"}},[t._v("运行时间：\n                                "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(i){var o=i.on;return[n("span",t._g({staticStyle:{"font-weight":"bold"}},o),[t._v(t._s(e.runningTime)+"H")])]}}],null,!0)},[n("span",[t._v(t._s(e.runningTime)+"H")])])],1),n("span",{staticClass:"overflow_text",staticStyle:{float:"left","margin-left":"10px",width:"90px"}},[t._v("次数：\n                                "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(i){var o=i.on;return[n("span",t._g({staticStyle:{"font-weight":"bold"}},o),[t._v(t._s(e.runningCount)+"/次")])]}}],null,!0)},[n("span",[t._v(t._s(e.runningCount)+"/次")])])],1)])])])})),1)],1)],1),n("contentModal",{attrs:{title:"导入设备信息",IsShow:t.IsExportModelShow},on:{modalClosed:function(e){return t.hideExportWindow()},modalComfirmed:function(e){return t.ExportWindowConfirm()}}},[n("div",{staticStyle:{display:"flex","align-items":"center"}},[n("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:t.downloadTemp}},[t._v("下载导入模板")]),n("div",{staticStyle:{color:"red","font-size":"12px"}},[t._v("\n                (注:文档内标题标红的列为必填项，请勿输入以下非法字符：~、@、$、^、&、《、》、<、>、￥)\n            ")])],1),n("div",[n("fileUploader",{ref:"uploadFile",attrs:{label:"请选择文件"},model:{value:t.exportExcel,callback:function(e){t.exportExcel=e},expression:"exportExcel"}})],1)])],1)},o=[],a=(i("4634"),i("1e17"),i("07c5"),i("4027")),r=i("b490"),s=i("b690"),l=i("7300"),c=i("5873"),d=i("ddf2"),p=i("80ea"),h=i("ae0a"),f=i("97a3"),u=i("652a"),m=i("1269"),g=new u["a"],v=function(t){function e(){var t,i;Object(l["a"])(this,e);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return i=Object(c["a"])(this,(t=Object(d["a"])(e)).call.apply(t,[this].concat(o))),Object(f["a"])(Object(p["a"])(i),"__name","EquipmentRealData"),Object(f["a"])(Object(p["a"])(i),"runStatus",g.charField({require:!0,fieldName:"设备运行状态"})),Object(f["a"])(Object(p["a"])(i),"runningTime",g.charField({require:!0,fieldName:"设备运行时间"})),Object(f["a"])(Object(p["a"])(i),"runningCount",g.charField({require:!0,fieldName:"设备运行次数"})),Object(f["a"])(Object(p["a"])(i),"equipmentCode",g.charField({require:!0,fieldName:"设备编码"})),i}return Object(h["a"])(e,t),e}(m["a"]),x=i("d5b3"),w=i("a2a7"),y=(i("7c02"),i("55b3")),S=i("debc"),b=i.n(S),E={name:"RunningEquipment",data:function(){var t=this;return{headerBtns:[{disabled:!this.$per("RunningEquipment","import"),text:"导入",icon:"self_import",click:function(){return t.showExportWindow()}},{disabled:!this.$per("RunningEquipment","e"),text:"导出",icon:"self_export",click:function(){return t.exportFile()}}],devices:[],IsShowForDevice:!1,isError:!1,IsExportModelShow:!1,offset:[],seletedWorkshop:{},workshops:[],selectedItem:{},exportExcel:{},factorys:[],selectFactory:{},allData:[],allBindingData:[],isShowList:!0,selftime:null,allBindingDataForOne:{},currentIndex:0}},mounted:function(){this.FOrganizationServer=new r["a"],this.initialize()},components:{contentModal:w["a"],fileUploader:y["a"]},methods:{modalClosedForDevice:function(){this.IsShowForDevice=!1},clk:function(t){},openDevices:function(t){if(0!=t.length){var e=this;e.IsShowForDevice=!0,e.devices=t}else x["a"].alert("此工位没有设备！","warning")},setStyleForAll:function(t,e){var i=b()("#offset").width();return{position:"relative",border:"1px solid #d5d5d5",width:"100%",height:(0==e?i*t.shopWidth/(2*t.shopLength):i*t.shopWidth/t.shopLength)+"px"}},setStyle:function(t,e,i){var n=this,o=0,a=0;0==i?(o=n.allBindingData[e].shopWidth*n.offset[e],a=n.allBindingData[e].shopLength*n.offset[e]):(o=n.allBindingData[e].shopWidth*n.offset[e]*2,a=n.allBindingData[e].shopLength*n.offset[e]*2);var r=0,s=0;return 0==i?(r=n.offset[e]*t.xPoint,r>=a&&r-20<=a&&(r=a-20),s=n.offset[e]*t.yPoint,s>=o&&s-20<=o&&(s=o-20)):(r=2*n.offset[e]*t.xPoint,r>=a&&r-72<=a&&(r=a-72),s=2*n.offset[e]*t.yPoint,s>=o&&s-72<=o&&(s=o-72)),{position:"absolute",left:r+"px",top:s+"px","z-index":"100",cursor:"pointer"}},setClassForDevice:function(t){return 2==t.runStatus.dvalue?{error_box:!0}:1==t.runStatus.dvalue?{warning_box:!0}:{normal_box:!0}},setClass:function(t,e){if(t.runningEquipments&&t.runningEquipments.length>0){for(var i=[],n=0;n<t.runningEquipments.length;n++)i.push(t.runningEquipments[n].runStatus.dvalue);return i.indexOf(2)>-1?{error_circle:0==e,error_bigcircle:1==e}:i.indexOf(1)>-1?{warning_circle:0==e,warning_bigcircle:1==e}:{normal_circle:0==e,normal_bigcircle:1==e}}return{default_circle:0==e,default_bigcircle:1==e}},setImageOffset:function(t){var e=this;e.offset=[];var i=b()("#offset").width();t.forEach((function(t){e.offset.push(i/(2*t.shopLength))})),window.onresize=function(){var i=b()("#offset").width();e.offset=[],t.forEach((function(t){e.offset.push(i/(2*t.shopLength))}))}},changeWorkShop:function(){if("-1"==this.seletedWorkshop.id)this.isShowList=!0;else{for(var t=0;t<this.allBindingData.length;t++)if(this.seletedWorkshop.id==this.allBindingData[t].id){this.currentIndex=t,this.allBindingDataForOne=this.allBindingData[t];break}this.isShowList=!1}},changeFactory:function(){this.isShowList=!0,this.setWorkshopsByFactoryId(this.selectFactory.id),this.setAllBindingData(this.selectFactory.fcode)},setAllBindingData:function(t){var e=this;this.$Server.queryAll((new s["a"]).__name,{},{factory:t}).then((function(t){e.setImageOffset(t.datas),e.allBindingData=t.datas}))},setWorkshopsByFactoryId:function(t){var e=[{fname:"全部",id:"-1"}];this.allData.forEach((function(i){t==i.parentId&&2!=i.orgType.dvalue&&7!=i.orgType.dvalue&&e.push(i)})),this.workshops=e,this.workshops.length>1?(this.seletedWorkshop={fname:"全部",id:"-1"},this.isError=!1):this.isError=!0},initialize:function(){var t=this;t.isShowList=!0,t.$Server.queryAll((new a["a"]).__name).then((function(e){t.allData=e.datas,t.factorys=e.datas.filter((function(t){return 0==t.orgType.dvalue})),t.factorys.length>0&&(t.selectFactory=t.factorys[0],t.setWorkshopsByFactoryId(t.selectFactory.id),t.setAllBindingData(t.selectFactory.fcode))}))},exportFile:function(){this.$Server.exportFile((new v).__name,"运行设备信息"+this.$Utils.getLocalFotmatTime())},showExportWindow:function(){this.IsExportModelShow=!0},downloadTemp:function(){var t=document.createElement("a");t.href="/imporTemp/runningEquipment.xls",t.download="设备运行管理.xls",t.click()},hideExportWindow:function(){this.IsExportModelShow=!1,this.$refs.uploadFile.clearFile()},ExportWindowConfirm:function(){var t=this,e=this.$refs.uploadFile.filename,i={base64:this.exportExcel,fileName:e,fileType:"xls"};this.$Server.importFile((new v).__name,i).then((function(e){e.success?(x["a"].alert("导入成功","success"),t.hideExportWindow(),t.initialize()):x["a"].alert(e.datas.error)}),(function(t){return x["a"].alert(t)}))}}},I=E,D=(i("6e68"),i("6691")),k=Object(D["a"])(I,n,o,!1,null,"4d29eb00",null);e["default"]=k.exports},faaf:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdCNjg0ODRBN0JBRTExRTk4RDdBREJENEMzMDUwRjI5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdCNjg0ODRCN0JBRTExRTk4RDdBREJENEMzMDUwRjI5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0I2ODQ4NDg3QkFFMTFFOThEN0FEQkQ0QzMwNTBGMjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0I2ODQ4NDk3QkFFMTFFOThEN0FEQkQ0QzMwNTBGMjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ASv1RAAAEnElEQVR42uycTWgTQRSA3252N9A0mnhQaNX6gxH8RUEPgvUgotWDVvAgei6iohfBQs+FCnpSQXpWPAjWi+jFg/WmIPiDUlv/bUHBWkkUmk12fW+yk05j0mybNN2feWSS3eyw7Hx5P5M3w1OGhobAEQPbKWzHsW1SFaUZFAVfCgRZbNumN7BsO4Onr7HdxnYjlUpl6briAGrFdh9RbFUjEVBVFVQOxwEUNEz2FCEGyaJmWWDl83TtBV45hJBGCZCBIJ4jgI0RhBNxACnUBO0JLCBHi2yCgy2PgPIFSG/w++0aQjiNPTZGNA00bEUNwlYEE1QzIzDOIcFRqDljzeVyG4iNhhpznggyzRE0SBXMK/CC41cEfxtxTA7Pz2moTm1Mcxyt4U0JgYMWTUy17SlzcxigFq3USE+YQ+ZwHDDcxMIgNF4yMRo7wbE4BwCmKtO1JUSaUwqpGLGFCK65DeW/fmdg8OlL+Dz6A7JZ07cgDEOHttal0L5zCyQXN/8PaooYg6SVYCx70/GJNNy69wgmfQyGC/24wx9H4Qv+0CeO7IUliTjMxEDj1GbSnifPXjE4qTUr4GjHHog3N/kWUDrzF+4+eAzvPnxl4zq8b1dZLeI8XHliMisSv8MhoeencZB8+va9an/VrVrymwdB+DhMM1cfQGEWCaiKaLXegJwdOT1yfty+yZl7uU9DNYg/jBghvN6noYD4w1Q692KfhgIqjWzxWJPn+zQUUOeB9uJDLIrHoLOj3fN9ZvUfbWRkxDZ0nSXLIkLaQ/zDern/DvvsvdgVmOjUc6mffV7oOlZMc1g8q5jLUaoDsqYpw7ycBzUCEKUI6hERPPOH9U9hHLqu1QcQ5U9IBh4OFm/uV/md/gMDDwbZ8arly+ozk969YzPLnwy9/wJ9124GQouiaBU0rrpoECWVKLm0bnUrGLrmazD0/DSOssmyuYZ5N9Lde73s9309Zxo2+FqeQYZ5GebnR1ybWNBXNSqZmCuPG6pVjbmE+bCtaszaB8lVDRdqWS7X4mdIJHJVQ4b5+RdfrWr4UoO8uhrhGQ1aqNUIUePcRK25aqOvVjUqaZybec+CaRCtIlACihJptIpwZP/ueetTTsOqLSRQcr6WTGjNgNavXQndZ082pI8M83IeJAHJiaKcKMqJYn0BeXXbimdMjMxBHEylSWA9+pTrzzchzNi3hi0wvtr+Uqn/TFLrFhi5/UVuf5HzIAnI84Dk/qAqIvcHVRG5P6iKyP1Bcn+QnAfJMD+fgGyYXssi7CLyUEsMUdIpYaAMDw8XnDS2adVfQlZcgDtpXv0lhw664KSd+jk2JycehwwQiPU7nHONvrJ4kSGnPIwqHIcFjlhkidUSIkBUeSEajdqmaSpUeUms4cEKfYSoPI4lzIN4Mwwjr8Visc/jP3+uygtweIkY5qTYWzgKLPESXeSD6DOWSHzVksnk1Uwmc8XMsppmrLgQLxET5hJdRjQKxEbBi1E0sedjY2MbspOTIIu8FeC0tLS81XV9G6uCl0qlWrHT/YmJia3pdBqypE2OkwpLmUAaK/ociMfjkEgkXuK4D+Ll0X8CDAAvRekB1un4RAAAAABJRU5ErkJggg=="}}]);