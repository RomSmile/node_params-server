/* eslint-disable no-console */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const normilizedUrl = new URL(req.url, `http://${req.headers.host}`);
  const obj = {};

  obj.parts = normilizedUrl.pathname.split('/').slice(1);
  obj.query = Object.fromEntries(normilizedUrl.searchParams.entries());

  console.log(obj);

  res.end();
});

server.listen(
  PORT,
  console.log('server opened on this host: http://localhost:' + PORT));
