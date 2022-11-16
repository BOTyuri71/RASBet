var mysql = require('mysql2')
var db_config = {
    host: 'sql8.freesqldatabase.com',
    user: 'sql8575971',
    password: 'XBU6VtGqkZ',
    database: 'sql8575971',
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