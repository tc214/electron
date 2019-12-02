/*
 *工具类
 */


/**
 *转化为驼峰形字符串
 *
 * @param {*} str
 * @returns
 */
function transformCamel(str){
    var re=/-(\w)/g;
    return str.replace(re,function ($0,$1){
        return $1.toUpperCase();
    });
}


module.exports={
    "transformCamel":transformCamel,
    "author":'wallimn'
}