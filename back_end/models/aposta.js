var sql = require('../database/db.js');

var Aposta = function(a){
    this.idAposta=a.idAposta;
    this.data=a.data;
    this.valor=a.valor;
    this.idApostador=a.idApostador;
    this.resultado=a.resultado;
}


Aposta.create = function (ap,conn) {
    return new Promise(function(resolve, reject) {
      conn.query(`INSERT INTO Aposta (idAposta, dataCriacao, valor, Apostador_idApostador, resultado)
                  VALUES (?, ?, ?, ?, ?);`,[ap.idAposta, ap.data, ap.valor, ap.idApostador, ap.resultado],
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

module.exports=Aposta;
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

