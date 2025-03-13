const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url, true).pathname;
  const name = url.parse(req.url, true).query.name;

  if (name) {
    if (pathname === "/file") {
      fs.writeFile(`./${name}`, "", () => {});
      return res.end(`${name} file created`);
    } else if (pathname === "/dir") {
      fs.mkdir(`./${name}`, () => {});
      return res.end(`${name} folder created`);
    }
  } else {
    if (req.url === "/file") {
      fs.writeFile("./temp.js", "", () => {});
      return res.end("file created");
    } else if (req.url === "/dir") {
      fs.mkdir("./temp", () => {});
      return res.end("folder created");
    }
  }
});

module.exports = { server };

// http://localhost:5000/file?name=now.txt&data=this is simple data
