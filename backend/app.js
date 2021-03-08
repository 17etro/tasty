'use strict';

require('dotenv/config');
const http = require('http');
const Router = require('./routes/index');
const  { pool } = require('./db/database.js')

const server = http.createServer(async (req, res) => {

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
    'Access-Control-Max-Age': 2592000,
    "Access-Control-Allow-Headers": "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept",
    "Access-Control-Allow-Credentials": false
  };
  const result = await pool.query(`select * from users`).rows;
  console.log(result);
  res.writeHead(204, headers);
  const router = new Router(req.url, req.method);
  console.log(req[0]);
  router.usage(req, res);
});

server.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`server running in ${process.env.HOST}:${process.env.PORT}`);
});