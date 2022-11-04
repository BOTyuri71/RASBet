const Apostador = require("../models/apostador.js");
const Apostadores = module.exports;

Apostadores.put = (apostador) => {
    if (!Apostador.getUser(apostador)) {
        return Apostador.regist(apostador);
    }
};

Apostadores.createMov = (idApostador, valor, saldo, data) => {
    return Apostador.createMovimento(idApostador, valor, saldo, data);
};

Apostadores.getMov = (idApostador) => {
    return Apostador.getMovimentos(idApostador);
};

Apostadores.login = (user) => {
    return Apostador.loginUser(user.email,user.password);
};

Apostadores.get = (email) => {
    return Apostador.getUser(email);
};

Apostadores.getSaldo = (idApostador) => {
    return Apostador.getSaldo(idApostador);
};

Apostadores.putSaldo = (idApostador,valor) => {
    return Apostador.putSaldo(idApostador,valor);
};

Apostadores.update = (idApostador, apostador) => {
    return Apostador.updateUser(idApostador, apostador);
};



  