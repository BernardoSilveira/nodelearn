const http = require("http");
const url = require("url");
const fs = require("fs");

const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World!</h1>');
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
})
