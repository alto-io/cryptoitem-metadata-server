const jsonFile = process.argv[2];

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(jsonFile);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

console.log("Data file: " + jsonFile + " || Server running on port " + port);
server.listen(port);
