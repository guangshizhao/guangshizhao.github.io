
let express = require("express");
let app = express();
 
app.use(express.static("workflow"));
 
app.listen(8111, ()=>{
    console.log("服务启动成功。");
})