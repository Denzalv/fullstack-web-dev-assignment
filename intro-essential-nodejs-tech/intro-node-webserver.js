const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const read = req.url;
  if (read === "/about") {
    res.write("Welcome to about us page");
    res.end();
  } else if (read === "/contact") {
    res.write("Welcome to contact us page");
    res.end();
  } else {
    res.write("Hello World!");
    res.end();
  }
});
server.listen(8000, () => {
  console.log("Server start at port 8000");
});
