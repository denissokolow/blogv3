const Blog = require('../model/post.js');

module.exports = async (req, res) => { 
            const posts = await Blog.find();
            res.json(posts);
    } 

