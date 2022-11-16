var mysql = require('mysql2')
var db_config = {
  host: 'sql8.freesqldatabase.com',
  user: 'sql8575971',
  password: 'XBU6VtGqkZ',
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