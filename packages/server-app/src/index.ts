import { renderToString } from "stencil-library/hydrate";
import * as http from "http";

http.createServer(onRequest).listen(8888);
console.log("Server has started");

async function onRequest(_request: any, response: any) {
  const res = await renderToString(
    '<my-component></my-component><ion-icon name="logo-twitter"></ion-icon>'
  );
  response.writeHead(200);
  response.write(res.html);
  response.end();
}
