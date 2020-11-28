const Blog = require('../model/post.js');

module.exports = async r => {
    const {author, date, title, content}  = r.body;
    const newPost = new Blog({ author, date, title, content });
    await newPost.save();
    r.res.send('Пост добавлен');
}