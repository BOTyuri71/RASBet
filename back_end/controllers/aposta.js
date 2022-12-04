const Aposta = require("../models/aposta.js");
const User = require("../models/user.js");
const Movimento = require("../models/movimento.js");
const ApostaJogo = require("../models/apostaJogo.js");
const Apostas = module.exports

Apostas.createAposta = (body) => {
    return new Promise(function (resolve, reject) {
        var saldov
        User.getSaldo(body)
            .then(saldo => saldov = saldo)
            .catch(err => {
                reject(err);
            });
        if(body.valor > saldov){
            reject("Saldo insuficiente para realizar aposta!")
        }
        else{
            var data = body.data
            Movimento.create(body.descricao,body.valorMov,body.saldo,data,body.idApostador,body.idMoeda)
                .then(idMovimento => idmov = idMovimento)
                .catch(err => {
                    reject(err);
                });
            var idAp
            Aposta.create(data, body.valorApo, body.estado, body.idApostador, body.idMoeda)
                .then(idAposta => idAp = idAposta)
                .catch(err => {
                    reject(err);
                });
                
            ApostaJogo.create(idAp, body.idJogo, body.idOdds)
                .then(idApostaJogo => {
                    resolve('Sucesso na criacao da aposta!');
                })
                .catch(err => {
                    reject(err);
                });     
            }
    });
}

Apostas.getApostas = (body)=>{
    return Apostas.getApostas(body.idAposta);
}


