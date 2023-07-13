import { renderToString } from "stencil-library/hydrate";
import * as http from "http";

const PORT = 8888;

http.createServer(onRequest).listen(PORT);
console.log(`Server has started on port ${PORT}`);

async function onRequest(_request: any, response: any) {
  const res = await renderToString("<my-component></my-component>");
  response.writeHead(200);
  response.write(res.html);
  response.end();
}
