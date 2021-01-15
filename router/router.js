
const express = require('express');
const router = express.Router();
const checkAuth = require ('../middleware/checkAuth');
const getPosts = require('../controllers/get-posts.js');
const getPost = require('../controllers/get-post.js');
const createPost = require('../controllers/create-post.js');
const deletePost = require('../controllers/delete-post.js');
const login = require('../controllers/login.js');
const register = require('../controllers/register.js');

router
    .route('/posts/:username')
    .get(checkAuth, getPosts)
router
    .route('/post/:_id')
    .get(checkAuth, getPost)
    .delete(checkAuth, deletePost)
router
    .route('/api/posts/')   
    .post(checkAuth, createPost)
router
    .route('newpost/')
router
    .route('/api/login/')
    .get(login)
router
    .route('/api/login/')   
    .post(register)


module.exports = router;