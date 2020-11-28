const { Server } = require('http');
const parser = require('body-parser');
const express = require('express');
const app = express();
const router = require('./router/router');
var cors = require('cors');
app.use(cors());
const PORT = 3000;

app
  .use(parser.json())
  .use(parser.urlencoded({ extended: true }))
  .use(router) 
  .listen(process.env.PORT || PORT, () => console.log(process.pid));
  
