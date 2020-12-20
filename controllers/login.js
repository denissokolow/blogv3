const User = require('../model/user.js');
const bcrypt = require('bcryptjs');
const { key } = require('../config/config');

module.exports = async (req, res) => {
    const login = req.headers.log;
    const password = req.headers.pas;
    const user = await User.findOne({ "login": login});
    
    if (user){          
        varPas=bcrypt.compareSync(password, user.password);
        if (varPas) {
                   req.session.auth = true;
                   req.session.name = login;
                   res.json({ status: "Авторизация успешна", user: login, LogOn: true});
        }else {
        res.json( {status: "Неверный логин или пароль", LogOn: false });
        }
      }else {
        res.json( {status: "Неверный логин или пароль", LogOn: false });
     }
}

