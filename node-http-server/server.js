const http = require("http"); // `http` is a built-in module, no need to install

const server = http.createServer((request, response) => {
  if (request.url === "/foo") {
    response.write("This is the foo page");
    response.end();
  } else if (request.url === "/foo/bar") {
    response.write("This is the foo/bar page");
    response.end();
  } else {
    response.write("HELLO WORLD!!dsadsadsadsa!!!!   ");
    response.end();
  }
});

server.listen(3000, () => {
  console.log("SERVER LISTENING ON PORT 3000");
});
