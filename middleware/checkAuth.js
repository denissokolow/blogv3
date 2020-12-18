module.exports = async (req, res, next) => {
    console.log("значение сессии в чеке", req.sessionStore.sessions)
    if (req.session.auth) {
        console.log("сессия есть")
        next();
        } else {
        console.log("сессии нет")
        res.redirect('/');
        }
};

