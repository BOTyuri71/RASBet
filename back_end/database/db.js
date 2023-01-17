var mysql = require('mysql2')
var db_config = {
    host: 'sql11.freemysqlhosting.net',
    user: 'sql11591349',
    password: 'cMMAuSgAn7',
    database: 'sql11591349',
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