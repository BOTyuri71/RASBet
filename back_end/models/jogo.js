var sql = require('../database/db.js');

var Jogo = function(a) {
    this.idJogo = a.idJogo;
    this.data = a.data;
    this.idEquipa1 = a.idEquipa1;
    this.idEquipa2 = a.idEquipa2;
    this.estado = a.estado;
    this.resultado = a.resultado;
}

Jogo.create_update = function(j) {
    return new Promise(function (resolve, reject) {
        sql.query(`INSERT INTO Jogo (idJogo, data_inicio, Equipa_idEquipa2, Equipa_idEquipa1, estado, resultado, odd1, oddX, odd2) VALUES (?,?,?,?,?,?,?,?,?)
                    ON DUPLICATE KEY UPDATE data_inicio = ?, Equipa_idEquipa2 = ?, Equipa_idEquipa1 = ?, estado = ?, resultado = ?, odd1 = ?, oddX = ?, odd2 = ?;`, 
                    [j.idJogo,j.data_inicio, j.Equipa_idEquipa2, j.Equipa_idEquipa1, j.estado, j.resultado, j.odd1, j.oddX, j.odd2, j.data_inicio, j.Equipa_idEquipa2, j.Equipa_idEquipa1, j.estado, j.resultado, j.odd1, j.oddX, j.odd2],
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
Jogo.getAllJogos = function() {
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




