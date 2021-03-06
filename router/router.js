
const express = require('express');
const router = express.Router();
const getPosts = require('../controllers/get-posts.js');
const getPost = require('../controllers/get-post.js');
const createPost = require('../controllers/create-post.js');
const deletePost = require('../controllers/delete-post.js');
const login = require('../controllers/login.js');
const register = require('../controllers/register.js');

router
    .route('/posts/:username')
    .get(getPosts)
router
    .route('/post/:_id')
    .get(getPost)
    .delete(deletePost)
router
    .route('/api/posts/')
    .post(createPost)
router
    .route('newpost/')
router
    .route('/api/login/')
    .post(login)
router
    .route('/api/register/')
    .post(register)


module.exports = router;