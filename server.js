const { Server } = require('http');
const path = require('path');
const express = require('express');
var cors = require('cors');
const app = express();
const parser = require('body-parser');
const session	= require('express-session');
const router = require('./router/router');
const KEY = require('./config/config');
const PORT = 80;

app
  .use(cors())
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }))
  .use(session({
    secret: `${KEY}`,
    key: 'key',
    cookie: {  httpOnly: false },
    saveUninitialized: true,
    resave: true
  }))
  .use(router)
  .use(express.static(path.join(__dirname, '/client/build')))
  .get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'))})
  .listen(process.env.PORT || PORT, () => console.log(process.pid));
  
