var sql = require('../models/db.js');

var Aposta = function(a){
    this.idAposta=a.idAposta;
    this.data=a.data;
    this.valor=a.valor;
    this.idApostador=a.idApostador;
    this.resultado=a.resultado;
}

module.exports=Aposta;

Aposta.create = function (a,conn) {
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
        });
    })
};
/*
Aposta.updateAposta = function (idJogo,estado){
    return new Promise(function(resolve, reject) {
      sql.query(`UPDATE jogo SET estado = ?
                    where idJogo=?`,[estado,idJogo],
          function (err, res) {
            if(err) {
                reject(err);
            }
            else{
                resolve(res.insertId);
            }
        });
    })
};*/

