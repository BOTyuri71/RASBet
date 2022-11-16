var sql = require('../database/db.js');

class Jogo {
    constructor(a) {
        this.idJogo = a.idJogo;
        this.data = a.data;
        this.idEquipa1 = a.idEquipa1;
        this.idEquipa2 = a.idEquipa2;
        this.estado = a.estado;
        this.resultado = a.resultado;
    }
    static create_update() {
        return new Promise(function (resolve, reject) {
            sql.query(`INSERT INTO Jogo (idJogo, data_inicio, Equipa_idEquipa2, Equipa_idEquipa1, estado, resultado, odd1, oddX, odd2) VALUES (?,?,?,?,?,?,?,?,?)
                       ON DUPLICATE KEY UPDATE data_inicio = ?, Equipa_idEquipa2 = ?, Equipa_idEquipa1 = ?, estado = ?, resultado = ?, odd1 = ?, oddX = ?, odd2 = ?;`, 
                       [this.idJogo,this.data_inicio, this.Equipa_idEquipa2, this.Equipa_idEquipa1, this.estado, this.resultado, this.odd1, this.oddX, this.odd2, this.data_inicio, this.Equipa_idEquipa2, this.Equipa_idEquipa1, this.estado, this.resultado, this.odd1, this.oddX, this.odd2],
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
    static getAllJogos() {
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
}

module.exports=Jogo;




