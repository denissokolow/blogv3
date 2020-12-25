const { Server } = require('http');
const path = require('path');
const express = require('express');
var cors = require('cors');
const app = express();
const parser = require('body-parser');
const session	= require('express-session');
const router = require('./router/router');
const key = require('./config/config');
const PORT = 3001;

app
  .use(express.static(path.join(__dirname, '/client/build')))
  .use(cors())
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }))
  .use(session({
    secret: 'secretWord',
    key: 'key',
    cookie: {  httpOnly: false },
    saveUninitialized: true,
    resave: true
  }))
  .use(router)
  //.get('/', function (req, res) {
   // res.sendFile(path.join(__dirname, '/client/build', 'main.html'))})
  .listen(process.env.PORT || PORT, () => console.log(process.pid));
  
