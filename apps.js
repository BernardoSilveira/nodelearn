const http = require("http");
const path = require("path");
const fs = require("fs");

const port = 8080;

const server = http.createServer((req, res) => {
    let filename = '.' + req.url;
    filename = (filename === './') ? './index.html' : filename;
    fs.readFile(filename, (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        return res.end(data);
    })

});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
})
