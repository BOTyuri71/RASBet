var sql = require('../database/db.js');

var Aposta = function(a){
    this.idAposta=a.idAposta;
    this.data=a.data;
    this.valor=a.valor;
    this.idApostador=a.idApostador;
    this.resultado=a.resultado;
}


Aposta.create = function (data, valor, estado, idApostador, idMoeda) {
    return new Promise(function(resolve, reject) {
      sql.query(`INSERT INTO Aposta (dataCriacao, valor, estado, Apostador_idApostador, Moeda_idMoeda) VALUES (?,?,?,?);`,
                [data, valor, estado, idApostador, idMoeda],
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

Aposta.getApostas = function (idApostador) {
    return new Promise(function(resolve, reject) {
      sql.query(`SELECT a.idAposta,a.dataCriacao, a.valor, a.estado, a.odd, m.nome FROM Aposta AS a
                 INNER JOIN Moeda AS m
                 ON a.Moeda_idMoeda = m.idMoeda AND a.Apostador_idApostador = ?`,
                [idApostador],
            function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    reject(err);
                }
                else{
                    resolve(res);
                }
            }
        );
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

