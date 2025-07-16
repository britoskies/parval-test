const path = require("path");
const jsonServer = require("json-server");
const serverless = require("serverless-http");

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const server = jsonServer.create();
const router = jsonServer.router(
  path.resolve(__dirname, "../../src/db/mock.json")
);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const handler = serverless(server);

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return handler(event, context);
};
