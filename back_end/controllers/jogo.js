const Jogo = require("../models/jogo.js");
const Equipa = require("../models/equipa.js");
const JogoEquipa = require("../models/jogoEquipa.js");
const Odds = require("../models/odds.js");
const Jogos = module.exports;


Jogos.createUpdate = (jogo,equipas,odds) => {
    return new Promise(function (resolve, reject) {
        var estado = 0
        if(jogo.completed){
            estado = 2
        }
        Jogo.createUpdate(jogo.id, jogo.commenceTime, estado, jogo.scores)
            .then()
            .catch(err => {
                reject(err);
            });
        for(const equipa of equipas){
            Equipa.createUpdate(equipa.nome,equipa.desporto,equipa.pais,equipa.liga)
                .then(nomeEquipa=> {
                    JogoEquipa.createUpdate(jogo.id,equipa.nome)
                    .then(idJogoEquipa=> {
                        
                    })
                    .catch(err => {
                        reject(err);
                    });
                })
                .catch(err => {
                    reject(err);
                });
        }
        for(const odd of odds){
            Odds.getOdd(jogo.id,odd.descricao)
                .then(idOdd=> {
                    Odds.create(odd.descricao,odd.odd,odd.estado)
                        .then(odd2=> {
                            resolve('Sucesso')
                        })
                        .catch(err => {
                            reject(err);
                        });
                })
                .catch(err => {
                    Odds.update(idOdd,odd.odd,odd.estado)
                        .then(odd1=> {
                            resolve('Sucesso')
                        })
                        .catch(err => {
                            reject(err);
                        });
                });
        }
        
    });
};
  
Jogos.getEstado = (idJogo) =>{
    return Jogo.getEstado(idJogo);
};

Jogos.listJogo = ()  =>{
    return Jogo.getList();
};

