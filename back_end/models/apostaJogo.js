var sql = require('../models/db.js');

var ApostaJogo = function(a){
    this.idAposta=a.idAposta;
    this.idJogo=a.idJogo;
    this.previsao=a.previsao;
}

module.exports=ApostaJogo;

ApostaJogo.create = function (a,conn) {
    return new Promise(function(resolve, reject) {
        conn.query(`INSERT INTO Aposta_has_Jogo (Aposta_idAposta, Jogo_idJogo, resultado_Previsto)
                    VALUES (?, ?, ?);`,[a.idAposta, a.idJogo, a.previsao],
            function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    reject(err);
                }
                else{
                    resolve(res.insertId);
                }
            }
        );
    })
}; 