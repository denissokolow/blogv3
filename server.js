const { Server } = require('http');
const express = require('express');
const parser = require('body-parser');
const session	= require('express-session');
const app = express();
const router = require('./router/router');
const key = require('./config/config');
var cors = require('cors');
const PORT = 3001;

app
  
  .use(function(req, res){
        res.set("Access-Control-Allow-Origin", "http://localhost:3000")
        res.set('Access-Control-Allow-Credentials', 'true')
  })
  .use(cors())
  .use(parser.json())
  .use(parser.urlencoded({ extended: true })) 
  .use(session({
    secret: 'secretWord',
    key: 'key',
    cookie: {
      httpOnly: false,
      maxAge: null,
      secure: false
    },
    saveUninitialized: true,
    resave: true
  }))
  .use(router)
  .listen(process.env.PORT || PORT, () => console.log(process.pid));
  
