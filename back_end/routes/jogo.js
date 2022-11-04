var express = require('express');
var router = express.Router();
var Jogo = require('../controllers/jogo.js')


router.post('/update/:idJogo&:state',function(req,res){
    Jogo.update(req.params.idJogo,req.params.state)
        .then(jogo => res.jsonp(jogo))
        .catch(erro => res.status(500).jsonp(erro))
});


router.post('/list/',function(req,res){
    Jogo.listJogo()
        .then(jogos => res.jsonp(jogos))
        .catch(erro => res.status(500).jsonp(erro))
});
