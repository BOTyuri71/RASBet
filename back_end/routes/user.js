var express = require('express');
var router = express.Router();
var User = require('../controllers/user')
var bcrypt = require('bcryptjs')

module.exports = router;

router.post('/register',function(req,res){
    console.log("ON USER REGISTER")
    console.log(req.body)
    User.register(req.body)
        .then(user => res.jsonp(user))
        .catch(erro => res.status(500).jsonp(erro))
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
        .then(user =>res.jsonp(user))
        .catch(erro => res.status(500).jsonp(erro))     
});
