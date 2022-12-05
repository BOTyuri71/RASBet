var mysql = require('mysql2')
var db_config = {
    host: 'localhost',
    user: 'root',
    password: '1234567890',
    database: 'rasbet',
    timezone: "Z",
    multipleStatements: true
}

var connection = mysql.createPool(db_config)

var getConnection = function(callback) {
    console.log("CONNECTING TO DATABASE")
    connection.getConnection(function(err, connection) {
        callback(err, connection);
    });
};

module.exports = getConnection;
module.exports = connection;