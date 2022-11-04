var express = require('express');
var router = express.Router();
var Aposta = require('../controllers/aposta')

module.exports = router;

router.post('/create/',function(req,res){
    Aposta.createAposta(req.body)
        .then(aposta => res.jsonp(aposta))
        .catch(erro => res.status(500).jsonp(erro))
});

router.post('/list/',function(req,res){
    Aposta.listAposta()
        .then(aposta => res.jsonp(aposta))
        .catch(erro => res.status(500).jsonp(erro))
});