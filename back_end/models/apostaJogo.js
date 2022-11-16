var sql = require('../database/db.js');

class ApostaJogo {
    constructor(a) {
        this.idAposta = a.idAposta;
        this.idJogo = a.idJogo;
        this.previsao = a.previsao;
    }
    static create(a, conn) {
        return new Promise(function (resolve, reject) {
            conn.query(`INSERT INTO Aposta_has_Jogo (Aposta_idAposta, Jogo_idJogo, resultado_Previsto)
                    VALUES (?, ?, ?);`, [a.idAposta, a.idJogo, a.previsao],
                function (err, res) {
                    if (err) {
                        console.log("error: ", err);
                        reject(err);
                    }
                    else {
                        resolve(res.insertId);
                    }
                }
            );
        });
    }
}

module.exports=ApostaJogo;

 