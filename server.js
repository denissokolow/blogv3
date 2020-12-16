const { Server } = require('http');
const parser = require('body-parser');
const express = require('express');
const session	= require('express-session');
const app = express();
const router = require('./router/router');
const key = require('./config/config');
var cors = require('cors');
app.use(cors());
const PORT = 3001;

app
  .set('trust proxy', 1)
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }))
  .use(session({	
                secret: "key",
                cookie: {
                  maxAge: 60*1000,
                  secure: true
                },	
                resave: false,	
                saveUninitialized: true },
               ))
  .use(router) 
  .listen(process.env.PORT || PORT, () => console.log(process.pid));
  
