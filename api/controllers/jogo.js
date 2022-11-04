const Jogo = require("../models/jogo.js");
const Jogos = module.exports;


Jogos.update = (idJogo,estado) => {
    return Jogo.updateEstado(idJogo,estado);
};
  
Jogos.getEstado = (idJogo) =>{
    return Jogo.getEstado(idJogo);
};

Jogos.listJogo = ()  =>{
    return Jogo.getList();
};

