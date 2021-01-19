
// Dependencies
const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');

const app = express();

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/sokolov.tech/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/sokolov.tech/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/sokolov.tech/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

app.use((req, res) => {
	res.send('Hello there !');
});

// Starting both http & https servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
});


app.use(function(req, res, next) {
	res.header("Access-Control-Expose-Headers", "X-Resp,Content-Type, Accept, Access-Control-Allow-Headers, Access-Control-Expose-Headers");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
	res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
	next();
  });
  //res.header("Access-Control-Allow-Origin", "*");
  
