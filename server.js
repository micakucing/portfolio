'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});


app.listen(3000, () => console.log('Local app listening on port 3000!'));