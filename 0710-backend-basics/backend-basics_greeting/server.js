import { createServer } from "node:http";

export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end("Hello, Elisabeth!");
});

//das ist das gleiche wie hier:

export const anotherServer = createServer(callbackFunction);

function callbackFunction(request, response) {
  response.statusCode = 200;
  response.end("Hello, Elisabeth!");
}
