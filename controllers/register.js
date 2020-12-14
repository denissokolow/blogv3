const User = require('../model/user.js');
const bcrypt = require('bcryptjs');

module.exports = async (req, res) => {
    const login = req.body.log;
    const pass = req.body.pas;
    const user = await User.findOne({ "login": login });
    if (user) {
        req.res.send({ status: "Польователь с таким логином уже зарегестрирован" });
    } else {
        password = bcrypt.hashSync(pass, 7);
        const newUser = new User({ login, password });
        await newUser.save();
        req.res.send({ status: "Вы успешно зарегестрировались, можете войти" });
    }
}       