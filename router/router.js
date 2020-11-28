
const express = require('express');
const router = express.Router();

const getPosts = require('../controllers/get-posts.js.js');
const getPost = require('../controllers/get-post.js');
const createPost = require('../controllers/create-post.js.js');
const deletePost = require('../controllers/delete-post.js.js');

router
    .route('/api/posts/')
    .get(getPosts)
    .post(createPost);

router
    .route('/api/posts/:_id')
    .get(getPost)
    .delete(deletePost)
router
    .route('newpost/')

module.exports = router;