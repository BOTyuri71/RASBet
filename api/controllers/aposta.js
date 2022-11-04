const Aposta = require("../models/aposta.js");
const ApostaJogo = require("../models/apostaJogo.js");
const Apostas = module.exports

Apostas.createAposta = async(aposta)=>{
    sql.getConnection(async function(err, connection) {
        try {
            connection.beginTransaction()
            const queryPromises = []
            var idAposta = await Aposta.create(aposta,connection);
            for(i in aposta.Jogos)
                queryPromises.push(ApostaJogo.create(idAposta,aposta.Jogos[i].idJogo,connection))
            const results = await Promise.all(queryPromises)
            connection.commit()
            connection.release()
            return results
        } catch (err) {
            connection.rollback()
            connection.release()
        }
})}

Apostas.updateAposta = (idAposta,state)=>{
    return Jogo.updateAposta(idAposta,state);
}

