const Blog = require('../model/post.js');

module.exports = async (req, res) => { 
            //console.log('body в постс:   ', req.session.name, req.session.auth);
            //console.log(req);
            //const posts = await Blog.find({"author" : req.session.name}); 
            //console.log(posts);
            
            const posts = await Blog.find({"author" : req.params.username});
            res.json(posts) 
    } 

