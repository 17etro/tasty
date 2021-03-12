'use strict';

require('dotenv/config');
const http = require('http');
const { headers } = require('./utils/headers/headers');
const Router = require('./routes/router');

const server = http.createServer((req, res) => {

  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end();
  }

  const router = new Router(req.url, req.method);
  router.usage(req, res);

});

server.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`server running in ${process.env.HOST}:${process.env.PORT}`);
});