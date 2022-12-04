var sql = require('../database/db.js');

var JogoEquipa = function(a){
    this.idJogo=a.idJogo;
    this.idEquipa=a.idEquipa;
}

JogoEquipa.createUpdate = function (idJogo, nome) {
    return new Promise(function(resolve, reject) {
        sql.query(`INSERT INTO Jogo_has_Equipa (Jogo_idJogo,Equipa_nome) VALUES (?,?)
                   ON DUPLICATE KEY UPDATE Jogo_idJogo=Jogo_idJogo,Equipa_nome=Equipa_nome;`,
                   [idJogo, nome],
            function (err, res) {
                if(err) {
                    console.log("CREATE JOGOEQUIPA ERROR: ", err);
                    reject(err);
                }
                else{
                    resolve(res.insertId);
                }
            }
        );
    })
}; 

module.exports=JogoEquipa;