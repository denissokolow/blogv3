const Blog = require('../model/post.js');

module.exports = async (req, res) => { 
            const posts = await Blog.find({"author" : req.params.username});
            res.json(posts);
    } 

