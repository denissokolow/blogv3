
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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Expose-Headers", "X-Resp,Content-Type, Accept, Access-Control-Allow-Headers, Access-Control-Expose-Headers");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});

app
  .use(cors())
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }))
  .use(session({
    secret: `${KEY}`,
    saveUninitialized: true,
    cookie:  {domain: 'sokolov.tech'},
    resave: true
  }))
  .use(router)
  .use(express.static(path.join(__dirname, '/client/build')))
  .get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'))});
  .listen(process.env.PORT || PORT, () => console.log(process.pid));

  
