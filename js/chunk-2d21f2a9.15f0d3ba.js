(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f2a9"],{d953:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("layContentHeader",{attrs:{title:"工作流模型",buttons:e.headerBtns}}),a("layContent",[a("dataTable",{ref:"childDataTable",attrs:{headers:e.headers,DataSource:e.DataSource,total:e.total,hideOperation:!0,sort:!0,allowActive:!0},on:{initialize:e.initialize}})],1)],1)},o=[],i=a("e3b8"),s=a("bd12"),l=a("551a"),n=a("09fd"),c=a("01ee"),d=a("0e3a"),u={name:"processModel",data:function(){var e=this;return{total:0,DataSource:[],headerBtns:[{disabled:!1,text:"增加模型",icon:"self_add",click:function(){return e.addProcessModel()}},{disabled:!1,text:"编辑模型",icon:"self_edit",click:function(){return e.editProcessModel()}},{disabled:!1,text:"删除模型",icon:"self_delete",click:function(){return e.toProcessModel()}},{disabled:!1,text:"部署",icon:"self_deploy",click:function(){return e.deployModel()}}],headers:[{text:"序号",align:"center",sortable:!1},{text:"模型名称",align:"center",sortable:!1,value:"processName"},{text:"模型描述",align:"center",sortable:!1,value:"description"},{text:"创建日期",align:"center",value:"createTime",sortable:!1}]}},components:{dataTable:i["a"],layContent:n["a"],layContentHeader:c["a"]},mounted:function(){},methods:{initialize:function(e){var t=this;l["a"].http(window.processForUrl.getModels(e.page,e.rowsPerPage),"get",{},{success:function(e){t.DataSource=e.data.data.rows,t.total=e.data.data.total,t.$refs.childDataTable.setActiveItem([])},error:function(e){s["a"].alert(e)}})},cofirmDelete:function(){var e=this,t=this.$refs.childDataTable.getActiveItem(),a=t.id;l["a"].http(window.processForUrl.getModelForDel(a),"Delete",null,{success:function(t){200==t.status&&(200==t.data.code?(e.IsComfirmShow=!1,s["a"].alert("删除成功","success"),e.initialize({page:1,rowsPerPage:10})):(e.IsComfirmShow=!1,s["a"].alert(t.data.msg,"error")))},error:function(t){e.IsComfirmShow=!1,s["a"].alert(t)}})},toProcessModel:function(){var e=this,t=this.$refs.childDataTable.getActiveItem();t&&!Array.isArray(t)?d["a"].confirm("确定删除所选模型?","提示",500,(function(){e.cofirmDelete()}),(function(){})):s["a"].alert("请选择一项作为你删除的对象！")},addProcessModel:function(){var e="";this.$router.push({path:"/processModelDesign",query:{modelId:e}})},editProcessModel:function(){var e=this.$refs.childDataTable.getActiveItem();if(e&&!Array.isArray(e)){var t=e.id;this.$router.push({path:"/processModelDesign",query:{modelId:t}})}else s["a"].alert("请选择一项作为你操作的对象！")},deployModel:function(){var e=this,t=this.$refs.childDataTable.getActiveItem();if(t&&!Array.isArray(t)&&t.id){var a=t.id;l["a"].http(window.processForUrl.getModelForDeploy(a),"Post",null,{success:function(t){200==t.status&&(200==t.data.code?(s["a"].alert("部署成功","success"),e.initialize({page:1,rowsPerPage:10})):s["a"].alert(t.data.msg,"error"))},error:function(e){s["a"].alert(e)}})}else s["a"].alert("请选择一项作为你操作的对象！")}}},f=u,h=a("6691"),p=Object(h["a"])(f,r,o,!1,null,null,null);t["default"]=p.exports}}]);