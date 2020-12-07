const User = require('../model/user.js');

module.exports = async (req, res) => {
    //const login = req.query.log;
    //const password = req.query.pas;
    const user = await User.findOne({ "login": req.query.log, "password": req.query.pas });
    if (user) {
        res.json({ status: "Авторизация успешна", user: req.query.log, LogOn: true });

    } else {
        res.json( {status: "Неверный логин или пароль", LogOn: false });
    }
}