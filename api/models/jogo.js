var sql = require('../models/db.js');

var Jogo = function(a){
    this.idJogo=a.idJogo;
    this.data=a.data;
    this.idEquipa1=a.idEquipa1;
    this.idEquipa2=a.idEquipa2;
    this.estado=a.estado;
    this.resultado=a.resultado;
}

module.exports=Aposta;

Jogo.updateEstado = function (idJogo,estado){
    return new Promise(function(resolve, reject) {
        sql.query(``,[],
            function (err, res) {
                if(err) {
                    reject(err);
                }
                else{
                    resolve(res.insertId);
                }
            }
        );
    })
};


Jogo.getAllJogos =  function(){
    return new Promise( function(resolve, reject) {
        sql.query(``,
            function(err,res){
                if(err){
                    console.log("error: ",err);
                    reject(err);
                }
                else{
                    resolve(res);
                }
            }
        );
    })
};