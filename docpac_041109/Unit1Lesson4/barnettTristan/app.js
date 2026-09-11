const http = require('http');
require('dotenv').config()
const fs = require('fs');
const server = http.createServer((req,res) => {
    res.writeHead(200, {  'Content-Type': 'text/plain'});
    res.end('hello, World!\n');

});

const PORT = Number(process.env.PORT);

server.listen(PORT, 'localhost', () => {
    console.log('server running at http://localhost:${PORT}/');
})