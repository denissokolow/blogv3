const User = require('../model/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { key } = require('../config/config');

module.exports = async (req, res) => {
    const login = req.headers.log;
    const password = req.headers.pas;
    const user = await User.findOne({ "login": login});
    
    if (user){          
        varPas=bcrypt.compareSync(password, user.password);
        if (varPas) {
                   const token = jwt.sign({
                                          id: user._id
                                          }, key, {expiresIn: "1h"});
                    res.json({ token: token, status: "Авторизация успешна", user: login, LogOn: true});
        }else {
        res.json( {status: "Неверный логин или пароль", LogOn: false });
        }
      }else {
        res.json( {status: "Неверный логин или пароль", LogOn: false });
     }
}

