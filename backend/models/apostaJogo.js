var sql = require('../models/db.js');

var ApostaJogo = function(a){
    this.idAposta=a.idAposta;
    this.idJogo=a.idJogo;
    this.previsao=a.previsao;
}

module.exports=ApostaJogo;

ApostaJogo.create = function (idAposta,idJogo,conn) {
    return new Promise(function(resolve, reject) {
        conn.query(``,[],
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