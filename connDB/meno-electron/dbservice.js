var db = require("./db.js");

/*
 * 数据库服务类。
 */


/**
 *显示测试数据的函数
 *
 * @param {*} callback
 */
function selectTestData(callback){
    db.query("select * from t_test",function(){
        callback.apply(null,arguments);
    });
}

/**
 *生成导航菜单
 *
 * @param {*} callback 回调函数
 */
function selectNavMenus(callback){
    db.query("select * from t_menu  order by tree_pid,tree_id",function(error,results){
        if(error){
            callback(error);
        }
        else{
            var treeArray = resultsToTreeArray(results);
            callback(null,treeArray);
        }
        //callback.apply(null,arguments);
    });
}

/**
 *转化为导航菜单使用的数组，只考虑了菜单分两级。
 *
 * @param {*} error
 * @param {*} results
 * @returns
 */
function resultsToTreeArray(results){
    var treeArray = [];
    var len = results.length;
    for(var i=0;i<len; i++){
        if(results[i].tree_pid===0){//根的ID为0
            results[i].children=[];
            treeArray.push(results[i]);
        }
    }
    for(var j=0; j<treeArray.length;j++){
        for(var i=0;i<len; i++){
            if(results[i].tree_pid===treeArray[j].tree_id){
                treeArray[j].children.push(results[i]);
            }
        }
    }
    return treeArray;
}


module.exports = {
    "selectTestData":selectTestData,
    "selectNavMenus":selectNavMenus,
    "author":'wallimn',
    "version":'20190204'
}