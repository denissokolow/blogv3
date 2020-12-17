const Blog = require('../model/post.js');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
    const post = await Blog.findOne({"_id" : req.params._id});
    res.send(post);
}