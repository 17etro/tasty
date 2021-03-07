'use strict';

require('dotenv/config');
const http = require('http');
const { POSTrouter, PUTrouter, GETrouter, DELETErouter } = require('./routes/routes');

const server = http.createServer((req, res) => {

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
    'Access-Control-Max-Age': 2592000,
    "Access-Control-Allow-Headers": "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept",
    "Access-Control-Allow-Credentials": false
  };
  res.writeHead(204, headers);

  // methods
  console.log(req.method);
  switch (req.method) {
    case "GET": {
      console.log('get');
      break;
    }
    case "POST": {
      const url = req.url;
      const func = POSTrouter[url];
      func();
      res.end('hello');
      break;
    }
    case "DELETE": {
      console.log('delete');
      break;
    }
    case "PUT": {
      console.log('put');
      break;
    }
  };

});

server.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`server running in ${process.env.HOST}:${process.env.PORT}`);
});