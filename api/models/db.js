var mysql = require('mysql2')
var db_config = {
  host: 'localhost',
  user: 'user1',
  password: 'abcdefgh',
  database: 'rasbet',
  timezone: "Z",
  multipleStatements: true
}

var connection = mysql.createPool(db_config)

var getConnection = function(callback) {
    connection.getConnection(function(err, connection) {
        callback(err, connection);
    });
};

module.exports = getConnection;
module.exports = connection;