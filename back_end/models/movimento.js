var sql = require('../database/db.js');

var Movimento = function(a){
    this.idMovimento=a.idMovimento;
    this.descricao=a.descricao;
    this.valor=a.valor;
    this.saldo=a.saldo;
    this.data=a.data;
    this.idApostador=a.idApostador;
    this.idMoeda=a.idMoeda;
}


Movimento.create = function (descricao,valor,saldo,data,idApostador,idMoeda) {
    return new Promise(function(resolve, reject) {
      sql.query(`INSERT INTO Movimento (descricao,valor,saldo,data,Apostador_idApostador,Moeda_idMoeda) VALUES (?,?,?,?,?)`,
                [descricao,valor,saldo,data,idApostador,idMoeda],
            function (err, res) {
                if(err) {
                    console.log("Movimento create error", err);
                    reject(err);
                }
                else{
                    resolve(res.insertId);
                }
            }
        );
    })
};
