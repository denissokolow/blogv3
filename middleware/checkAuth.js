module.exports = async (req, res, next) => {
    if (req.session.auth) {
        console.log("сессия есть");
        //req.res.redirect('/posts');        
        next();
    } else {
        console.log("сессии нет")
        req.res.redirect('/');
        //res.sendFile('index.html', { root: './client/build' })
        }
};

