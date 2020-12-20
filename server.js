const { Server } = require('http');
const express = require('express');
var cors = require('cors');
const app = express();
const parser = require('body-parser');
const session	= require('express-session');
const router = require('./router/router');
const key = require('./config/config');
const PORT = 3001;


app
  //.use(express.static('./client/build'))
  .use(cors())
  .use(parser.json())
  .use(parser.urlencoded({ extended: true })) 
  .use(session({
    secret: 'secretWord',
    key: 'key',
    maxAge: 60000,
    saveUninitialized: true,
    resave: true,
    httpOnly: false
    }))
  .use(router)
  .listen(process.env.PORT || PORT, () => console.log(process.pid));
  
