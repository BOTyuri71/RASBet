var sql = require('../database/db.js');
const salt = 14;
var bcrypt = require('bcryptjs')

var User = function(a) {
    this.idUser = a.idUser;
    this.nome = a.nome;
    this.email = a.email;
    this.password = a.password;
    this.dataN = a.dataN;
    this.nCC = a.nCC;
    this.nif = a.nif;
    this.saldo = a.saldo;
}
User.create = function(u){
    return new Promise(function (resolve, reject) {
        bcrypt.genSalt(salt, function (err, salt) {
            bcrypt.hash(u.password, salt, function (err, hash) {
                sql.query("INSERT INTO Apostador (nome, email, password, dataN, nCC, nif, saldo) VALUES (?,?,?,?,?,?,?);",
                    [u.nome, u.email, hash, u.dataN, u.nCC, u.nif, u.saldo],
                    function (err, res) {
                        if (err) {
                            console.log("error: ", err);
                            reject(err);
                        }
                        else {
                            console.log(res);
                            resolve(res.idUser);
                        }
                    });
            });
        });
    });
}
User.register = function(newUser) {
    return new Promise(function (resolve, reject) {
        User.getOne(newUser.email)
            .then(user => {
                if (user == null) {
                    User.create(newUser)
                        .then(id => {
                            resolve(id);
                        })
                        .catch(err => {
                            reject(err);
                        });
                }
                else {
                    reject("Já existe uma conta associada a este utilizador");
                }
            })
            .catch(err => {
                reject(err);
            });
    });
}
User.getOne = function(email) {
    let user = null;
    console.log("Verify if user exists " + email);
    return new Promise(function (resolve, reject) {
        sql.query("Select * from Apostador where email= ?", email, function (err, res) {
            if (err) {
                console.log("error: ", err);
                reject(err);
            }
            else {
                if (res[0]) {
                    console.log(res[0]);
                    user = res[0];
                }
                resolve(user);
            }
        });
    });
}
User.getUser = function(id) {
    return new Promise(function (resolve, reject) {
        sql.query(`SELECT email,password,dataN,nCC,nif,saldo 
                FROM Apostador as a 
                WHERE a.idApostador = ?`,
            id, function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    reject(err);
                }
                else {
                    resolve(res[0]);
                }
            });
    });
}
User.updateUser = function(id, body) {
    return new Promise(function (resolve, reject) {
        sql.query(`UPDATE Apostador a
                SET nome = 'joao', email = 'joao@email.com', password = 'fbsunfijsamdi', dataN = '1999-12-12', nCC = '123432', nif = '454133413', saldo = 32
                WHERE a.idApostador = 5;`,
            [body.name, body.gender, body.birthdate, body.savings, body.rendimento, body.euro, id], function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    reject(err);
                }
                else {
                    resolve(res[0]);
                }
            });
    });
}

module.exports=User;

