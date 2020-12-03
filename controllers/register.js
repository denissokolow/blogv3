const User = require('../model/user.js');

module.exports = async (req, res) => {
    const login = req.body.log;
    const password = req.body.pas;
    const user = await User.findOne({ "login": req.body.log });
    if (user) {
        req.res.send({ status: "Польователь с таким логином уже зарегестрирован" });

    } else {
        const newUser = new User({ login, password });
        await newUser.save();
        req.res.send({ status: "Вы успешно зарегестрировались, можете войти" });
    }
}       