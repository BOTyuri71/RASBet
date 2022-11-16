var sql = require('../models/database.js');

class Jogo {
    constructor(a) {
        this.idJogo = a.idJogo;
        this.data = a.data;
        this.idEquipa1 = a.idEquipa1;
        this.idEquipa2 = a.idEquipa2;
        this.estado = a.estado;
        this.resultado = a.resultado;
    }
    static updateEstado(idJogo, estado) {
        return new Promise(function (resolve, reject) {
            sql.query(`UPDATE Jogo 
                    SET
                    estado = ?
                    WHERE
                    idJogo = ?;`, [idJogo, estado],
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
    static create(j) {
        return new Promise(function (resolve, reject) {
            sql.query(`INSERT INTO Jogo (data_inicio Equipa_idEquipa2 Equipa_idEquipa1 Odds_idOdds estado resultado) VALUES (?,?,?,?,?,?);`, 
            [j.data_inicio, j.Equipa_idEquipa2, j.Equipa_idEquipa1, j.Odds_idOdds, j.estado, j.resultado],
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




