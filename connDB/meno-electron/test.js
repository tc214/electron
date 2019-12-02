var service = require("./dbservice.js");
console.log(service);

service.selectTestData(function(error,results){
    if(error){
        console.error(error.sqlMessage);
    }
    else{
        console.log("查询结果：",results);
    }
});

service.selectNavMenus(function(error,results){
    if(error){
        console.error(error.sqlMessage);
    }
    else{
        console.log("查询结果：",results);
    }
});

console.log("function run!");