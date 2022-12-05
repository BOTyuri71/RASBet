var sql = require('../database/db.js');

var Odds = function(a){
    this.idOdds=a.idOdds;
    this.descricao=a.descricao;
    this.odd=a.odd;
    this.estado=a.estado;
}

Odds.create = function (descricao, odd, estado) {
    return new Promise(function(resolve, reject) {
        sql.query(`INSERT INTO Odds (descricao,odd,estado) VALUES (?,?,?)`,
                   [descricao, odd, estado],
            function (err, res) {
                if(err) {
                    console.log("CREATE ODD ERROR: ", err);
                    reject(err);
                }
                else{
                    resolve(res.insertId);
                }
            }
        );
    })
}; 


Odds.update = function (idOdds, odd, estado) {
    return new Promise(function(resolve, reject) {
        sql.query(`UPDATE Odds
                   SET odd = ?, estado = ?
                   WHERE Odds.idOdds = ?`,
                   [odd, estado, idOdds],
            function (err, res) {
                if(err) {
                    console.log("UPDATE ODD ERROR: ", err);
                    reject(err);
                }
                else{
                    resolve(res);
                }
            }
        );
    })
};

Odds.getOdd = function (idJogo,descricao) {
    return new Promise(function(resolve, reject) {
        sql.query(`SELECT Odds.idOdds FROM Odds 
                   INNER JOIN Jogo_has_Odds AS jho
                   ON Odds.idOdds = jho.Odds_idOdds
                   INNER JOIN Jogo 
                   ON jho.Jogo_idJogo = Jogo.idJogo
                   WHERE Jogo.idJogo = ? AND Odds.descricao = ?`,
                   [idJogo,descricao],
            function (err, res) {
                if(err) {
                    console.log("GET ODD ERROR: ", err);
                    reject(err);
                }
                else{
                    resolve(res);
                }
            }
        );
    })
};

module.exports=Odds;
