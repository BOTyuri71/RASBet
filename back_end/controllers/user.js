const User = require("../models/user.js");
const Users = module.exports;
var bcrypt = require('bcryptjs')
const salt = 14;

Users.register = (body) => {
    return new Promise(function (resolve, reject) {
        User.findOne(body.email)
            .then(user => {
                if (user == null) {
                    User.create(body.nome, body.email, body.password, body.dataN, body.nCC, body.nif, body.saldo)
                        .then(id => {
                            resolve(id);
                        })
                        .catch(err => {
                            reject(err);
                        });
                }
                else {
                    reject("Já existe uma conta associada a este email");
                }
            })
            .catch(err => {
                reject(err);
            });
        
    });
};

Users.createMov = (idUser, valor, saldo, data) => {
    return User.createMovimento(idUser, valor, saldo, data);
};

Users.getMov = (idUser) => {
    return User.getMovimentos(idUser);
};

Users.login = (body) => {
    return new Promise(function (resolve, reject) {
        User.findOne(body.email)
            .then(user => {
                if(user == null){
                    reject("Não existe uma conta associada a este email");
                }
                else{
                    bcrypt.compare(body.password, user.password, (err, result) => {
                        if(result){
                            console.log("LOGIN COM SUCESSO")
                            resolve(user.idApostador)
                        }
                        else{
                            reject("Password Errada")
                        }
                    });
                }
            })
            .catch(err => {
                reject(err)
            });
    })
};

Users.get = (email) => {
    return User.getUser(email);
};

Users.getSaldo = (idUser) => {
    return User.getSaldo(idUser);
};

Users.putSaldo = (idUser,valor) => {
    return User.putSaldo(idUser,valor);
};

Users.update = (idUser, user) => {
    return User.updateUser(idUser, user);
};



  