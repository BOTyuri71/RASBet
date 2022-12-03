var sql = require('../database/db.js');

var Jogo = function(a) {
    this.idJogo = a.idJogo;
    this.data = a.data;
    this.idEquipa1 = a.idEquipa1;
    this.idEquipa2 = a.idEquipa2;
    this.estado = a.estado;
    this.resultado = a.resultado;
}

Jogo.createUpdate = function(idJogo, data_inicio, estado, resultado) {
    return new Promise(function (resolve, reject) {
        sql.query(`INSERT INTO Jogo (idJogo, data_inicio, estado, resultado) VALUES (?,?,?,?)
                   ON DUPLICATE KEY UPDATE data_inicio = ?, estado = ?, resultado = ?;`, 
                    [idJogo, data_inicio, estado, resultado, data_inicio, estado, resultado],
            function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res.insertId);
                }
            }
        );
    });
}
Jogo.getAll = function() {
    return new Promise(function (resolve, reject) {
        sql.query(`SELECT * FROM Jogo;`,
            function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    reject(err);
                }
                else {
                    resolve(res);
                }
            }
        );
    });
}


module.exports=Jogo;




