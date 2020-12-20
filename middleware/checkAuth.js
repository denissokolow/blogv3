module.exports = async (req, res, next) => {
    console.log("авторизация в чеке", req.session.auth)
    console.log("юзернейм в чеке", req.session.name)
    if (req.session.auth) {
        console.log("сессия есть")
        res.redirect(`/api/posts/${req.session.name}`)
    
    } else {
        console.log("сессии нет")
        console.log(__dirname)
        res.sendFile('index.html', { root: './client/build' })
        }
};

