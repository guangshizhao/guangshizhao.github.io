window.infoConfig={
    systemName:"全员生产维护平台", //系统名称
    info:"版权所有(C) 2019 航天云网",//版权所有
    currentVersion:"版本：V1.1",//当前版本
    // latestVersion:"最新版本：V1.0.0612",//最新版本
    phone:"手机：13811060498(陈老师)",//phone
    // qq:"QQ：456789451",//qq
    email:"邮箱：13811060498@139.com",//email
    barMaxWidth: 50, // 柱状图最大宽度
};
window.messageUpdateTime = 30000;
window.process = {
    SpInventoryTask:'SpInventoryTask',//备件盘点的流程的id号
    eqpPurchaseTask: "EqpPurchaseTask", // 设备购置
    EqpUnusedTrendTask:"EqpUnusedTrendTask",
    spPurchaseTask: 'SpPurchaseTask', // 备件购置
    EqpRentalTask:'EqpRentalTask', // 设备租赁
    EqpStoppageTask:'EqpStoppageTask',
    SpScrapTask:"SpScrapTask", //备件报废
    EqpAllocateTask:"EqpAllocateTask", //设备调拨
    SpRepairTask:"SpRepairTask", //备件送修
    SpReceiveTask:"SpReceiveTask", // 备件领用
    CalibrationTask: "CalibrationTask", // 计量仪器流程
    RepairTask: "RepairTask", // 维修工单,
    EqpInventoryTask: "EqpInventoryTask", // 设备盘点,
    Training: 'Training', // 培训管理
    ImproveApply:"ImproveApply" // 持续改善那
};
window.colors = [
    { key:"red",value:['#e57373','#ef5350',"#f44336",'#e53935','#d32f2f',"#c62828"]},
    { key:"pink",value:['#f06292','#ec407a',"#e91e63",'#d81b60','#c2185b',"#ad1457"]},
    { key:"purple",value:['#ba68c8','#ab47bc',"#9c27b0",'#8e24aa','#7b1fa2',"#6a1b9a"]},
    { key:"deep-purple",value:['#9575cd','#7e57c2',"#673ab7",'#5e35b1','#512da8',"#4527a0"]},
    { key:"indigo",value:['#7986cb','#5c6bc0',"#3f51b5",'#3949ab','#303f9f',"#283593"]},
    { key:"blue",value:['#64b5f6','#42a5f5',"#2196f3",'#1e88e5','#1976d2',"#1565c0"]},
    { key:"light-blue",value:['#4fc3f7','#29b6f6',"#03a9f4",'#039be5','#0288d1',"#0277bd"]},
    { key:"cyan",value:['#4dd0e1','#26c6da',"#00bcd4",'#00acc1','#0097a7',"#00838f"]},
    { key:"teal",value:['#4db6ac','#26a69a',"#009688",'#00897b','#00796b',"#00695c"]},
    { key:"green",value:['#81c784','#66bb6a',"#4caf50",'#43a047','#388e3c',"#2e7d32"]},
    { key:"light-green",value:['#aed581','#9ccc65',"#8bc34a",'#7cb342','#689f38',"#558b2f"]},
    { key:"lime",value:['#dce775','#d4e157',"#cddc39",'#c0ca33','#afb42b',"#9e9d24"]},
    { key:"yellow",value:['#fff176','#ffee58',"#ffeb3b",'#fdd835','#fbc02d',"#f9a825"]},
    { key:"amber",value:['#ffd54f','#ffca28',"#ffc107",'#ffb300','#ffa000',"#ff8f00"]},
    { key:"orange",value:['#ffb74d','#ffa726',"#ff9800",'#fb8c00','#f57c00',"#ef6c00"]},
    { key:"deep-orange",value:['#ff8a65','#ff7043',"#ff5722",'#f4511e','#e64a19',"#d84315"]},
    { key:"brown",value:['#a1887f','#8d6e63',"#795548",'#6d4c41','#5d4037',"#4e342e"]},
    { key:"grey",value:['#e0e0e0','#bdbdbd',"#9e9e9e",'#757575','#616161',"#424242"]},
    { key:"blue-grey",value:['#90a4ae','#78909c',"#607d8b",'#546e7a','#455a64',"#37474f"]}
    ];
window.isIe = false;
window.processForUrl ={
   getUrlForFirst:function(processKey){//流程第一步
        return '/process/engine/definition/'+processKey+"/first";
   },
    getUrlForStart:function(sourceKey,processKey){//流程开始
        return '/process/resource/'+sourceKey+'/start/'+processKey;
    },
    getUrlForExecution:function(sourceKey,taskid){//流程下一步执行
        return '/process/resource/'+sourceKey+'/execution/'+taskid;
    },
    getUrlForInstanceId:function(taskid){//获取流程实例
        return '/process/engine/instance?businessKey='+taskid;
    },
    getUrlForInstance:function(instanceid){//结束流程
        return '/process/engine/instance/'+instanceid;
    },
    getUrlForInstanceTrace:function(instanceid){//获取流程图
        return '/process/engine/instance/'+instanceid+'/trace';
    },
    getUrlForInitiated:function(page,rowsPerPage){//获取我发起的
        return '/process/engine/instance/initiated?pageIndex='+page+"&pageSize="+rowsPerPage;
    },
    getUrlForRecords:function(id){//查看流程记录
        return '/process/engine/instance/'+id+'/records';
    },
    getModels:function(page,rowsPerPage){//模型列表
        return '/process/engine/model?pageIndex='+page+"&pageSize="+rowsPerPage;
    },
    getModelForDel:function(modelId){//删除模型
        return "/process/engine/model?ids="+modelId;
    },
    getModelForDeploy:function (modelId) {//部署模型
        return '/process/engine/model/'+modelId+'/deploy';
    },
    getUrlForTodos:function(page,rowsPerPage){//获取待办列表
        return '/process/engine/task/todos?pageIndex='+page+"&pageSize="+rowsPerPage;
    },
    getUrlForTask:function(id){
        return '/process/engine/task/'+id;
    },
    getUrlForHistory:function(page,rowsPerPage){//已办列表
        return '/process/engine/task/history?pageIndex='+page+"&pageSize="+rowsPerPage;
    },
    getUrlForTaskTrace:function(taskid) {//获取流程图
        return '/process/engine/task/'+taskid+'/trace';
    },
    getUrlForDefinition:function(page,rowsPerPage){
        return '/process/engine/definition?pageIndex='+page+"&pageSize="+rowsPerPage;
    },
    getUrlForImage:function(id){
        return '/process/definition/'+id+'/image';
    }
};