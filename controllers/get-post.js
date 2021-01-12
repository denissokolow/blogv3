const Blog = require('../model/post.js');

module.exports = async (req, res) => {
    const post = await Blog.findOne({"_id" : req.params._id});
    res.send(post);
}