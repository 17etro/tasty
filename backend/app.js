'use strict';

require('dotenv/config');
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello world');
});

server.listen(process.env.PORT);
console.log(`server running in ${process.env.HOST}:${process.env.PORT}`);