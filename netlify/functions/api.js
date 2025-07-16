const { createServer } = require("json-server");
const path = require("path");
const server = createServer();
const router = require("json-server").router(
  path.resolve("./src/db/mock.json")
);
const middlewares = require("json-server").defaults();

server.use(middlewares);
server.use(router);

module.exports.handler = server;
