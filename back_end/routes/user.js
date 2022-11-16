var express = require('express');
var router = express.Router();
var User = require('../controllers/user')
var bcrypt = require('bcryptjs')

module.exports = router;

router.post('/register',function(req,res){
    console.log("ON USER REGISTER")
    console.log(req.body)
    res.jsonp('a')
    /*User.put(req.body)
        .then(user => res.jsonp(user))
        .catch(erro => res.status(500).jsonp(erro))*/
});

router.get('/register',function(req,res){
    res.render("registo-form")
});

router.get('/login',function(req,res){
    res.render("login-form")
});

router.post('/createmov',function(req,res){
    User.createMov(req.body)
        .then(user => res.jsonp(user))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/getmov/:iduser',function(req,res){
    User.getMov(req.params.iduser)
        .then(user => res.jsonp(user))
        .catch(erro => res.status(500).jsonp(erro))
});

router.get('/getUser/:email',function(req,res){
    User.get(req.params.email)
       .then(user => res.jsonp(user))
       .catch(erro => res.status(500).jsonp(erro))
});

router.get('/getSaldo/:iduser',function(req,res){
    User.getSaldo(req.params.iduser)
        .then(user => res.jsonp(user))
        .catch(erro => res.status(500).jsonp(erro))
});

router.put('/putSaldo/:iduser',function(req,res){
    User.putSaldo(req.params.iduser,req.body)
        .then(user => res.jsonp(user))
        .catch(erro => res.status(500).jsonp(erro))
});

router.put('/update/:iduser',function(req,res){
    User.update(req.params.iduser,req.body)
        .then(user => res.jsonp(user))
        .catch(erro => res.status(500).jsonp(erro))
});

router.post('/login',function(req,res){
    User.login(req.body)
        .then(dados =>{
            var result = {
                login : false,
                message : "Utilizador não existe."
            }
            if(dados.length!=0){
                if(bcrypt.compareSync(req.body.password,dados[0].password)){
                    User.get(dados[0].email,conn)
                        .then(async user =>{
                            var expirationDate = new Date();
                            expirationDate.setHours(expirationDate.getHours() + 8);
                            result.login = true
                            result.message = "Credenciais corretas."
                            result.user = user
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
