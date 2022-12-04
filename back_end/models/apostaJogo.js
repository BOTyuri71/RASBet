var sql = require('../database/db.js');

var ApostaJogo = function(a){
    this.idAposta=a.idAposta;
    this.idJogo=a.idJogo;
    this.idOdds=a.idOdds;
}


ApostaJogo.create = function (idAposta, idJogo, idOdds) {
    return new Promise(function(resolve, reject) {
        sql.query(`INSERT INTO Aposta_has_Jogo (Aposta_idAposta, Jogo_idJogo, Odds_idOdds) VALUES (?,?,?);`,
                   [idAposta, idJogo, idOdds],
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


module.exports=ApostaJogo;