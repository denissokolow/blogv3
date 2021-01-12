module.exports = async (req, res, next) => {
    if (req.session.auth) {
        console.log("сессия есть");
        next();
    } else {
        console.log("сессии нет")
        res.sendFile('index.html', { root: './client/build' })
        }
};

