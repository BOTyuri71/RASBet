const Aposta = require("../models/aposta.js");
const User = require("../models/user.js");
const Movimento = require("../models/movimento.js");
const ApostaJogo = require("../models/apostaJogo.js");
const Apostas = module.exports

Apostas.createAposta = (body) => {
    return new Promise(function (resolve, reject) {
        User.getSaldo(body)
            .then(saldo => {
                if(body.valor > saldo){
                    reject("Saldo insuficiente para realizar aposta!")
                }
                else{
                    var data = body.data
                    Movimento.create(body.descricao,body.valorMov,saldo,data,body.idApostador,body.idMoeda)
                        .then(idMovimento => {
                            Aposta.create(data, body.valorApo, body.estado, body.idApostador, body.idMoeda)
                            .then(idAposta => {
                                ApostaJogo.create(idAposta, body.idJogo, body.idOdds)
                                .then(idApostaJogo => {
                                    resolve('Sucesso na criacao da aposta!');
                                })
                                .catch(err => {
                                    reject(err);
                                });
                            })
                            .catch(err => {
                                reject(err);
                            });
                        })
                        .catch(err => {
                            reject(err);
                        });
                    
                        
                }
            })
            .catch(err => {
                reject(err);
            });
    });
}

Apostas.getApostas = (body)=>{
    return Apostas.getApostas(body.idAposta);
}


