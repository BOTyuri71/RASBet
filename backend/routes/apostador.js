var express = require('express');
var router = express.Router();
var Apostador = require('../controllers/apostador')
var bcrypt = require('bcryptjs')


router.post('/create/',function(req,res){
    Apostador.put(req.body)
        .then(apostador => res.jsonp(apostador))
        .catch(erro => res.status(500).jsonp(erro))
});

router.post('/createmov/',function(req,res){
    Apostador.createMov(req.body)
        .then(apostador => res.jsonp(apostador))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/getmov/:idApostador',function(req,res){
    Apostador.getMov(req.params.idApostador)
        .then(apostador => res.jsonp(apostador))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/getUser/:email',function(req,res){
    Apostador.get(req.params.email)
       .then(apostador => res.jsonp(apostador))
       .catch(erro => res.status(500).jsonp(erro))
});

router.get('/getSaldo/:idApostador',function(req,res){
    Apostador.getSaldo(req.params.idApostador)
        .then(apostador => res.jsonp(apostador))
        .catch(erro => res.status(500).jsonp(erro))
});

router.put('/putSaldo/:idApostador',function(req,res){
    Apostador.putSaldo(req.params.idApostador,req.body)
        .then(apostador => res.jsonp(apostador))
        .catch(erro => res.status(500).jsonp(erro))
});

router.put('/update/:idApostador',function(req,res){
    Apostador.update(req.params.idApostador,req.body)
        .then(apostador => res.jsonp(apostador))
        .catch(erro => res.status(500).jsonp(erro))
});

router.post('/login/',function(req,res){
    Apostador.login(req.body)
        .then(dados =>{
            var result = {
                login : false,
                message : "Utilizador não existe."
            }
            if(dados.length!=0){
                if(bcrypt.compareSync(req.body.password,dados[0].password)){
                    Apostador.get(dados[0].email,conn)
                        .then(async apostador =>{
                            var expirationDate = new Date();
                            expirationDate.setHours(expirationDate.getHours() + 8);
                            result.login = true
                            result.message = "Credenciais corretas."
                            result.apostador = apostador
                            result.expirationDate = expirationDate;
                            res.jsonp(result)
                        })
                        .catch(error => {console.log("Erro")
                    res.status(500).jsonp(error)})
                    conn.release();
                    if(err) throw err;
                    
                }
                else{
                    result.message="Password errada."
                }
            }
            else{
                res.jsonp(result)
            }
        })
        .catch(erro => res.status(500).jsonp(erro))
});
