const { Server } = require('http');
const session	= require('express-session');
const parser = require('body-parser');
const express = require('express');
const app = express();
const router = require('./router/router');
const key = require('./config/config');
var cors = require('cors');
const PORT = 3001;

app
   .use(session({	
    secret: 'secretWord',   
    key: 'key',             
    cookie: {
        httpOnly: false,     
        maxAge: null,
        secure : false        
          },
    saveUninitialized: true,   
    resave: true               
      }))
  .use(cors())
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }))
  .use(router) 
  .listen(process.env.PORT || PORT, () => console.log(process.pid));
  
