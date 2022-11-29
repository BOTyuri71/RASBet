const Jogo = require("../models/jogo.js");
const Jogos = module.exports;


Jogos.createUpdate = (body) => {
    
    return new Promise(function (resolve, reject) {
        Jogo.createUpdate(body.idJogo, body.data_inicio, body.estado, body.resultado)
            .then(idJogo=> {
                Equipa.createUpdate(body.nome,body.desporto)
                .then(nomeEquipa=> {
                    
                    JogoEquipa.createUpdate(body.nome,body.desporto)
                    .then(idJogoEquipa=> {
                        Odds.getOdd(idJogo,body.desporto)
                        
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

};
  
Jogos.getEstado = (idJogo) =>{
    return Jogo.getEstado(idJogo);
};

Jogos.listJogo = ()  =>{
    return Jogo.getList();
};

