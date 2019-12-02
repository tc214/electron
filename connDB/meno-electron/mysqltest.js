var mysql = require("mysql");
var TEST_TABLE = "t_test";

//创建连接
var client = mysql.createConnection({
  host:"127.0.0.1",
  port:"3306",
  user: "root",
  password: "",
  database: "test"
});

client.connect();
client.query("SELECT * FROM " + TEST_TABLE, function selectCb(
  err,
  results,
  fields
) {
  if (err) {
    throw err;
  }
  if (results) {
    for (var i = 0; i < results.length; i++) {
      console.log("%d\t%s", results[i].id, results[i].name);
    }
  }
  client.end();
});
