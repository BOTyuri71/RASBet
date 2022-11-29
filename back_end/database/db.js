var mysql = require('mysql2')
var db_config = {
    host: 'sql7.freemysqlhosting.net',
    user: 'sql7580232',
    password: 'qVPk1Q3I1y',
    database: 'sql7580232',
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