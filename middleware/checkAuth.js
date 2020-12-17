module.exports = async (req, res, next) => {
    console.log("значение сессии в чеке", req.session.auth)
    console.log("req params  ", req.params)
    if (req.session.auth) {
        console.log("сессия есть")
        next();
        } else {
        res.redirect('/');
        }
};
