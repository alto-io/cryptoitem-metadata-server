const jsonFile = process.argv[2];
const port = process.env.PORT || 3000;

const express = require('express');
const jsonServer = require('json-server');

const server = express();

const jsonServerRouter = jsonServer.router(jsonFile);

server.use(express.static('public'));
server.use('', jsonServerRouter);

console.log("Data file: " + jsonFile + " || Server running on port " + port);
server.listen(port);
