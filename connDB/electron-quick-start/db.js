var mysql = require('mysql');

// 创建一个数据库连接池
var pool = mysql.createPool({
  connectionLimit: 50,
  host: "localhost",
  port:"3306",
  user: "tc",
  password: "123456",
  database: "test"
});

// SELECT * FROM users
// 让我们的方法支持两种模式
// 一种是只传入SQL语句和回调函数
// 一种是传入SQL语句、参数数据、回调函数

exports.query = function (sql, P, C) {
  var params = [];
  var callback;

  // 如果用户传入了两个参数，就是SQL和callback
  console.log("函数参数：",arguments);
  if (arguments.length == 2 && typeof arguments[1] == 'function') {
    callback = P;
  } else if (arguments.length == 3 && Array.isArray(arguments[1]) && typeof arguments[2] == 'function') {
    params = P;
    callback = C;
  } else {
    throw new Error('对不起，参数个数不匹配或者参数类型错误');
  }


  // 如果用户传入了三个参数，那么就是SQL和参数数组、回调函数


  // 从池子里面拿一个可以使用的连接
  pool.getConnection(function (err, connection) {
    if(err){
      console.error(err);
      callback.apply(null,err);
      return;
    }
    // Use the connection
    console.log("回调参数：",arguments);
    connection.query(sql, params, function () {
      // 使用完毕之后，将该连接释放回连接池
      connection.release();
      console.log("回调参数：",arguments);
      callback.apply(null, arguments);
    });
  });
};