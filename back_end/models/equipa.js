
var sql = require('../database/db.js');

var Equipa = function(a) {
    this.nome = a.nome;
    this.desporto = a.desporto;
    this.pais = a.pais;
    this.liga = a.liga;
}

Equipa.createUpdate = function(nome, desporto, pais, liga) {
    return new Promise(function (resolve, reject) {
        sql.query(`INSERT INTO Equipa (nome,desporto,pais,liga) VALUES (?,?,?,?)
                   ON DUPLICATE KEY UPDATE nome = ?,desporto = ?,pais = ?,liga = ?;`, 
                   [nome, desporto, pais, liga, nome, desporto, pais, liga],
            function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res.insertId);
                }
            }
        );
    });
}


module.exports=Equipa;