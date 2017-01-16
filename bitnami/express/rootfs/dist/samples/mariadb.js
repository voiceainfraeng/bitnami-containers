/*
 Note: Generated by Bitnami:
 Configuration file that shows how to use the built in MySQL database in your project.
 Based on the examples found here: https://github.com/mysqljs/mysql
*/

var mysql = require('mysql')
  , assert = require('assert');;

// Connection URL configured in your docker-compose.yml file
var url = process.env.DATABASE_URL;

var connection = mysql.createConnection(url);
connection.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected correctly to MySQL server");
  connectiom.query('SHOW TABLES;');
  connection.end();
});
