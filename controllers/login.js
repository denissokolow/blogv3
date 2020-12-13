const User = require('../model/user.js');
const bcrypt = require('bcryptjs');

module.exports = async (req, res) => {
    const login = req.headers.log;
    const password = req.headers.pas;
    const user = await User.findOne({ "login": login});
    if (user){
        varPas = bcrypt.hashSync(password, user.salt);
        if(user.password === varPas){ 
           res.json({ status: "Авторизация успешна", user: login, LogOn: true });
        }
    } else {
        res.json( {status: "Неверный логин или пароль", LogOn: false });
    }
}