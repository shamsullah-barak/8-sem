const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const processors = os.cpus();
  const uptime = os.uptime();

  if (url === "/cpus") {
    fs.readFile("./pages/home.html", (err, data) => {
      if (err) {
        console.log({ err });
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(pro);
      }
    });
  } else {
    res.end("Not Found");
  }
});

server.listen(5555, () => {
  console.log("server is running");
});
