const path = require("path");
const jsonServer = require("json-server");
const serverless = require("serverless-http");

// Create a json-server instance
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, "../../db/mock.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Wrap with serverless-http
const handler = serverless(server);

exports.handler = async (event, context) => {
  // prevent Lambda from waiting for open handles
  context.callbackWaitsForEmptyEventLoop = false;
  return handler(event, context);
};
