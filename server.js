
const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');
const express = require('express');
var cors = require('cors');
const app = express();
const parser = require('body-parser');
const session	= require('express-session');
const router = require('./router/router');
const KEY = require('./config/config');
const PORT = 443;

const privateKey = fs.readFileSync('/etc/letsencrypt/live/sokolov.tech/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/sokolov.tech/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/sokolov.tech/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

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
    //.listen(process.env.PORT || PORT, () => console.log(process.pid));
    
    
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(PORT, () => {
      console.log(`HTTPS Server running on port ${PORT}`);
    });
  
