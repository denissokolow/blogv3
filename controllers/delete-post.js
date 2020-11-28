const Blog = require('../model/post.js');

module.exports = async (req, res) => {
    await Blog.deleteOne({"_id" : req.params._id});
}