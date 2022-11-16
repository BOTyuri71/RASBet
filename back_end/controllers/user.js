const User = require("../models/user.js");
const Users = module.exports;

Users.put = (user) => {
    if (!Users.getUser(user)) {
        return Users.regist(user);
    }
};

Users.createMov = (idUser, valor, saldo, data) => {
    return Users.createMovimento(idUser, valor, saldo, data);
};

Users.getMov = (idUser) => {
    return Users.getMovimentos(idUser);
};

Users.login = (user) => {
    return Users.loginUser(user.email,user.password);
};

Users.get = (email) => {
    return Users.getUser(email);
};

Users.getSaldo = (idUser) => {
    return Users.getSaldo(idUser);
};

Users.putSaldo = (idUser,valor) => {
    return Users.putSaldo(idUser,valor);
};

Users.update = (idUser, user) => {
    return Users.updateUser(idUser, user);
};



  