module.exports = async (req, res, next) => {
    if (req.session.auth === 'ok') {
        next();
        } else {
        res.redirect('/');
        }
        };
