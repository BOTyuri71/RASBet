const User = require("../models/user.js");
const Users = module.exports;

Users.put = (user) => {
    if (!User.getUser(user)) {
        return User.regist(user);
    }
};

Users.createMov = (idUser, valor, saldo, data) => {
    return User.createMovimento(idUser, valor, saldo, data);
};

Users.getMov = (idUser) => {
    return User.getMovimentos(idUser);
};

Users.login = (user) => {
    return User.loginUser(user.email,user.password);
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



  