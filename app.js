const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Server request");
  console.log("Just for test");

  res.setHeader("Content-Type", "text/html");

  const creatPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

  let basePath = "";
  switch (req.url) {
    case "/":
    case "/home":
    case "/index.html":
      basePath = creatPath("index");
      res.statusCode = 200;
      break;
    case "/about":
      res.statusCode = 301;
      res.setHeader("Location", "/contacts");
      res.end();
      break;
    case "/contacts":
      basePath = creatPath("contacts");
      res.statusCode = 200;
      break;
    default:
      basePath = creatPath("error");
      res.statusCode = 404;
      break;
  }

  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(PORT, "localhost", (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
